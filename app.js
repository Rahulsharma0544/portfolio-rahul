
//Creating responsive navbar
let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#closeBtn');
let menu = document.querySelector('.menu');

openBtn.addEventListener('click', () => {
    closeBtn.style.display = 'block';
    openBtn.style.display = 'none';
    menu.classList.remove('menu-dragDown');
})

closeBtn.addEventListener('click', () => {
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    menu.classList.add('menu-dragDown');
})


// Get the <ul> element by its ID
let menuList = document.getElementById('menu-list');
let menuLinks = menuList.querySelectorAll('a');

// Add a click event listener to each <a> tag using forEach
menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        menu.classList.add('menu-dragDown');
    });
});
