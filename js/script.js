

document.addEventListener('DOMContentLoaded', () => {

    const imgs = ['img/car1.png', 'img/car2.png'];

    let listMenu = document.querySelector(".header__menu"),
          menuItems = document.querySelectorAll('.menu__item'),
          car = document.querySelector('.main-block__image img');

    function removeActive() {
        menuItems.forEach((item) => {
            item.classList.remove('menu__item_active');
        });
    }

    function getActive(menu, i = 0) {
        menu[i].classList.add('menu__item_active');
    }

    function changeCar(i) {
        car.src = imgs[i];
        document.querySelector('.main-block__title').textContent = menuItems[i].textContent;
    }
    removeActive();
    getActive(menuItems);
    listMenu.addEventListener('click', (event) => {
        let listItem = event.target;
        menuItems.forEach((el, i) => {
            if(el == listItem) {
                removeActive();
                getActive(menuItems, i);
                changeCar(i);
            }
        });
        
    });
});