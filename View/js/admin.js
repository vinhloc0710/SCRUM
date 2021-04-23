
var addForm = document.getElementsByClassName("form")[0];
var editDeleteForm = document.getElementsByClassName("edit-delete-container")[0];
var add = document.getElementsByClassName("add_product")[0];
add.addEventListener("click", function () {
   editDeleteForm.style.display = "none";
   addForm.style.display = "block";
   //  form.action="addProduct";
   //  var button=document.getElementById("button");
   //  button.value="Add";
   //  console.log('kkk');
});


var editDelete = document.querySelectorAll(".edit_delete_product");
editDelete.forEach(e => {
   e.addEventListener("click", function () {
      addForm.style.display = "none";
      editDeleteForm.style.display = "block";
   
   });
});



