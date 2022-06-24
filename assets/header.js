document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = function() { scrollSticky() };
    const header = document.querySelector(".header");
    const sticky = header.offsetTop;
    scrollSticky()

    function scrollSticky() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
        document.body.classList.add('sticky-active')
      } else {
        header.classList.remove("sticky");
        document.body.classList.remove('sticky-active')
      }
    }

    const burgerToggle = document.querySelector('.header__menu-toggle');
    const burgerToggleMobile = document.querySelector('.header__menu-toggle--mobile');
    const burgerToggleReverse = document.querySelector('.header__menu-actions--toggle');
    const menu = document.querySelector('.header__menu')
    const searchIcon = document.querySelector('.header__search-icon');
    const searchOverlay = document.querySelector('.search-overlay');
    
    burgerToggle.addEventListener('click', () => {
      document.body.classList.add('menu-active');
      menu.classList.add('active')
    })

    burgerToggleMobile.addEventListener('click', () => {
      document.body.classList.add('menu-active');
      menu.classList.add('active')
    })

    burgerToggleReverse.addEventListener('click', () => {
      if (!searchOverlay.classList.contains("active")) {
        document.body.classList.remove('menu-active');
      }

      menu.classList.remove('active')
    })

    searchIcon.addEventListener('click', () => {      
      header.classList.toggle("sticky-search")
      searchOverlay.classList.toggle('active')
      document.body.classList.toggle('menu-active');
    })

    const headerMenuLink = document.querySelectorAll(".header__menu-link");
    headerMenuLink.forEach(link => {
      if (link.textContent === "Blog") {
        link.classList.add('coming-soon');
        link.href = "#"
      }
    })
});