const galleryItems= document.querySelector('.gallery-items').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next')
const pageIndicator = document.querySelector('.pagination .page span.page');


maxItems =3;
totalItems= galleryItems.length;
totalPages= Math.ceil(totalItems/maxItems);

index = 1; // current page

function updateButton(){
    // enable/ disable button
    prev.classList.toggle('disable', index===1);
    next.classList.toggle('disable', index === totalPages)
}

// page update

function showPageIndicator() {
    pageIndicator.textContent=`${index} of ${totalPages}`;

    
}

function showItem(){

    //Hide all
    for (let i = 0; i < totalItems; i++) {
        galleryItems[i].classList.add('hide');
        galleryItems[i].classList.remove('show');
        
    }

    //show all
    for (let i = (index - 1)*maxItems; i <index*maxItems && i<totalItems; i++) {
        galleryItems[i].classList.remove('hide');
        galleryItems[i].classList.add('show');
        
    }

    updateButton();
    showPageIndicator();


}

 //pupdate page indicator

    prev.addEventListener('click', ()=>{
        if (index>1) {
            index--;
            showItem();
        }
    })


     next.addEventListener('click', ()=>{
        if (index<totalPages) {
            index++;
            showItem();
        }
    });

    window.onload=showItem;