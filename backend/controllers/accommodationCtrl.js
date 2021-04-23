const Accoms = require('../models/accommodationModel')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    searching() {
        const keyword = this.queryString.keyword ? {
            address: {
                $regex: this.queryString.keyword,
                $options: 'i'
            }
        } : {}

        this.query = this.query.find({ ...keyword });
        return this;
    }
    
    filtering(){
        const queryCopy = { ...this.queryString };

       

        // Removing fields from the query
        const removeFields = ['keyword', 'limit', 'page']
         removeFields.forEach(el => delete queryCopy[el]);

         console.log(queryCopy)
        // Advance filter for price, ratings etc
        let queryString = JSON.stringify(queryCopy)
        queryString = queryString.replace(/\b(gt|gte|lt|lte|regex)\b/g, match => `$${match}`)


        this.query = this.query.find(JSON.parse(queryString));
        return this; 
    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    }
 
}

const accommodationCtrl={
    getAccoms: async(req, res) =>{
        try {
            const features = new APIfeatures(Accoms.find(), req.query)
            .searching() 
            .filtering()

            const accoms = await features.query

            res.json({
                status: 'success',
                result: accoms.length,
                accoms: accoms
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }

        
    },
    getAccomSingle: async (req, res) =>{
        try {
            const accom = await Accoms.findById(req.params.id)

            res.json(accom)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createAccoms: async(req, res) =>{
        try {
            const {owner_name, price, description, address, status,images} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const accom = await Accoms.findById(req.params.id)
            if(accom)
                return res.status(400).json({msg: "This accommodation already exists."})

            const newAccom = new Accoms({
               owner_name, price, description, address, status, images
            })

            await newAccom.save()
            res.json({msg: "Created an accommodation"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteAccoms: async(req, res) =>{
        try {
            await Accoms.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted an accommodation"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateAccoms: async(req, res) =>{
        try {
            const {owner_name, price, description, address, status, images} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Accoms.findOneAndUpdate({_id: req.params.id}, {
                owner_name, price, description, address, status, images
            })

            res.json({msg: "Updated an accommodation"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = accommodationCtrl