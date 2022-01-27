

document.addEventListener('DOMContentLoaded', () => {

    const listMenu = document.querySelector(".header__menu"),
          menuItems = document.querySelectorAll('.menu__item')

    function removeActive() {
        menuItems.forEach((item) => {
            item.classList.remove('menu__item_active');
        });
    }

    function getActive(i = 0) {
        menuItems[i].classList.add('menu__item_active');
    }
    removeActive();
    getActive();
    listMenu.addEventListener('click', (event) => {
        let listItem = event.target;
        menuItems.forEach((el, i) => {
            if(el == listItem) {
                removeActive();
                getActive(i);
            }
        });
    });
});