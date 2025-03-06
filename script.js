document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".gallery img");
    
    images.forEach(img => {
        img.addEventListener("click", function() {
            let modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = <img src="${this.src}" class="modal-img">;
            document.body.appendChild(modal);

            modal.addEventListener("click", function() {
                document.body.removeChild(modal);
            });
        });
    });
});