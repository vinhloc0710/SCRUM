const Accoms = require('../models/accommodationModel')

const accommodationCtrl={
    getAccoms: (req,res)=>{
       
             Accoms.find().then((acc) => res.send(acc)).catch((err) => res.send(err));

        
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
            const {owner_name, price, description, address,images} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const accom = await Accoms.findById(req.params.id)
            if(accom)
                return res.status(400).json({msg: "This accommodation already exists."})

            const newAccom = new Accoms({
               owner_name, price, description, address, images
            })

            await newAccom.save()
            res.json({msg: "Created an accommodation"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = accommodationCtrl