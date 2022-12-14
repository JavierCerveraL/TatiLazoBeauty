
// MODAL ///

document.addEventListener("click", function(e){
    if(e.target.classList.contains("productos-item")){
        const src = e.target.getAttribute("src");
    
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById("products-modal"))
        myModal.show();
    }
})




// MODAL ENDS//



