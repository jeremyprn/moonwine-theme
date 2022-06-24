document.addEventListener('DOMContentLoaded', () => {

    //Select quantity in Product and Gift card section
    const quantitySection = document.querySelectorAll(".quantity");

    const updateQuantity = async (productId, productQuantity) => {
        const updateData = {
            updates: {
                [productId]: productQuantity
            }   
        };

        const httpCall = await fetch('/cart/update.js', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });
        const response = await httpCall.json();

        return window.location.reload();
    }

    const checkQuantity = (el) => {
        const id = el.id;
        const bttnMinus = document.querySelector(`#button-minus-${id}`);
        const bttnPlus = document.querySelector(`#button-plus-${id}`);
        let quantityValue = el.value;
        console.log(quantityValue)
        bttnMinus.addEventListener('click', () => {
            if(quantityValue > 1){
                quantityValue--;
                el.value = quantityValue;
                updateQuantity(Number(id), quantityValue);
            }
        })
    
        bttnPlus.addEventListener('click', () => {
            if(quantityValue >= 1 && quantityValue < 10){
                quantityValue++;
                el.value = quantityValue;
                updateQuantity(Number(id), quantityValue);
            }
        })
    }
    quantitySection.forEach(el => checkQuantity(el));
    
});