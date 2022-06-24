document.addEventListener('DOMContentLoaded', () => {
    const warningSection = document.querySelector('.warning');
    const confirmButton = document.querySelector(".warning__confirm-button");
    document.body.classList.add('warning');


    const isConfirm = localStorage.getItem('isConfirm') ?? null;

    if (isConfirm) {
        warningSection.style.display = 'none';
        document.body.classList.remove('warning');
    };

    confirmButton.addEventListener('click', () => {
        warningSection.classList.add('hidden');
        document.body.classList.remove('warning');
        localStorage.setItem('isConfirm', true);
    })
})