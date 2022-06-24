document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const categories = document.querySelector('.exclusive__categories');
    const categoriesTitle = document.querySelector('.exclusive__categories-title');
    const categoriesTitleSvg = document.querySelector('.exclusive__categories-title svg');
    const categoriesDropdown = document.querySelector(".exclusive__categories-dropdown");
    const allCategories = document.querySelectorAll(".item-categories");

    const sorts = document.querySelector('.exclusive__sorts');
    const sortsTitle = document.querySelector('.exclusive__sorts-title');
    const sortsTitleSvg = document.querySelector('.exclusive__sorts-title svg');
    const sortsDropdown = document.querySelector(".exclusive__sorts-dropdown");
    const allSorts = document.querySelectorAll(".item-sorts");

    header.classList.add('sticky-important');
    document.body.style.background = 'white';

    categoriesTitle.addEventListener('click', () => {
        categoriesDropdown.classList.toggle('show');
        categories.classList.toggle("active");
        categoriesTitleSvg.classList.toggle("reverse");

        sorts.classList.remove('active');
        sortsDropdown.classList.remove("show")
        sortsTitleSvg.classList.remove("reverse");
    });

    allCategories.forEach(categoryItem => {
        categoryItem.addEventListener('click', function() {
            categoriesDropdown.classList.toggle('show');
            categories.classList.toggle("active");
            categoriesTitleSvg.classList.toggle("reverse");

            const url = new URL(location.href);
            let pathname = url.pathname;

            pathname+= `?filter.p.m.custom.type_de_vin=${this.dataset.type}&`;
            location.href = pathname;
        })
    })


    header.classList.add('sticky-important');
    document.body.style.background = 'white';

    sortsTitle.addEventListener('click', () => {
        sortsDropdown.classList.toggle('show');
        sorts.classList.toggle("active");
        sortsTitleSvg.classList.toggle("reverse");

        categories.classList.remove('active');
        categoriesDropdown.classList.remove("show")
        categoriesTitleSvg.classList.remove("reverse");
    });

    allSorts.forEach(sortItem => {
        sortItem.addEventListener('click', function() {
            sortsDropdown.classList.toggle('show');
            sorts.classList.toggle("active");
            sortsTitleSvg.classList.toggle("reverse");

            const url = new URL(location.href);
            let pathname = url.pathname;
            pathname+= `?sort_by=${this.dataset.sort}&`;
            location.href = pathname;
        })
    })
})