document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.header');
    header.classList.add('sticky-important');
    document.body.style.background = 'white';

    //Select quantity in Product and Gift card section
    const bttnMinus = document.querySelector("#button-minus");
    const bttnPlus = document.querySelector("#button-plus");
    const quantity = document.querySelector("#quantity");
    let quantityValue = quantity.value;

    bttnMinus.addEventListener('click', () => {
        if(quantityValue > 1){
            quantityValue--;
            quantity.value = quantityValue;
        }
    })

    bttnPlus.addEventListener('click', () => {
        if(quantityValue >= 1 && quantityValue < 10){
            quantityValue++;
            quantity.value = quantityValue;
        }
    })
    // end

    //See more button
    const bttnSeeMoreDown = document.querySelector("#button-seeMore-down");
    const bttnSeeMoreUp = document.querySelector("#button-seeMore-up");
    const productInfos = document.querySelector(".product__infos");

    bttnSeeMoreDown.addEventListener('click', () => {
        bttnSeeMoreDown.classList.toggle('active');
        bttnSeeMoreUp.classList.toggle('active');
        productInfos.classList.toggle('active');
    });
    bttnSeeMoreUp.addEventListener('click', () => {
        bttnSeeMoreDown.classList.toggle('active');
        bttnSeeMoreUp.classList.toggle('active');
        productInfos.classList.toggle('active');
    });
});