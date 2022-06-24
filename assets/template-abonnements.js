document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const allChoices = document.querySelectorAll(".abonnements__filters-choice");

    header.classList.add('sticky-important');
    document.body.style.background = 'white';

    allChoices.forEach(choice => {
        choice.addEventListener('click', function() {
            document.querySelector('.abonnements__filters-choice.active').classList.remove('active');
            document.querySelector('.is-active').classList.add('product-hidden');
            this.classList.add('active');


            const triggerName = this.dataset.name;
            const triggerElement = document.querySelector(`.${triggerName}`);
            triggerElement.classList.remove('product-hidden');
            document.querySelector('.is-active').classList.remove('is-active');
            triggerElement.classList.add("is-active");
        })
    });

    const activeElement =  document.querySelector('.abonnements__filters-choice.active');
    const datasetName = activeElement.dataset.name;
    const datasetNameElement = document.querySelector(`.${datasetName}`);
    datasetNameElement.classList.remove('product-hidden');
    datasetNameElement.classList.add('is-active');



    //Floating box
    const floatAnimation = () => {
        const tlCan = new TimelineMax({repeat:-1});
        /*Can Animation*/
       tlCan
           //move top left
       .to('.abonnements__product-img-container', 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
       
           //move down right
       .to('.abonnements__product-img-container', 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
       
       
       .to('.abonnements__product-img-container', 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
       
       .to('.abonnements__product-img-container', 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
       
       
       .to('.abonnements__product-img-container', 3, { y:'-=50', ease:Power1.easeInOut})
          
       .to('.abonnements__product-img-container', 3, { y:'+=50', ease:Power1.easeInOut})
       
       
       .to('.abonnements__product-img-container', 3, { y:'-=30', ease:Power1.easeInOut})
          
       .to('.abonnements__product-img-container', 3, { y:'+=30', ease:Power1.easeInOut})
       
       
       .to('.abonnements__product-img-container', 2, { y:'-=30', ease:Power1.easeInOut})
          
       .to('.abonnements__product-img-container', 2, { y:'+=30', ease:Power1.easeInOut})
 
     TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

   }
   floatAnimation();
})

