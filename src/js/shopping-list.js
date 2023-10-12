
const deleteBtn = document.querySelector(".delete-btn");
const description = document.querySelector(".js-description");


deleteBtn.addEventListener ("click", onDelete);

function onDelete(evt) {
    console.log("Deleted");
}


//Make Description shorter for mob and tabl

const descriptionLarge = description.textContent;

window.addEventListener('resize', handleResize);
    
    function handleResize() {
    if (window.innerWidth < 768) {
        const descriptionShirt = descriptionLarge.slice(0, 86) + '…';
        description.textContent = descriptionShirt;
        }
        
    else if (window.innerWidth >= 768 && window.innerWidth < 1440){
        const descriptionShirt = descriptionLarge.slice(0, 253) + '…';
        description.textContent = descriptionShirt;
    } else {
        description.textContent = descriptionLarge;
    }
};

handleResize();

