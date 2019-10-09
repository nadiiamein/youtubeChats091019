 " use strict";
document.addEventListener('DOMContentLoaded', () => {

    {
    const keyboardButton = document.querySelector('.search-form__keyboard');
       keyboard =document.querySelector('.keyboard'),
        closeKeyboard = document.getElementById('close-keyboard'), 
        searchInput = document.querySelector('.search-form__input');

    const toggleKeyboard = () => {
        keyboard.style.top = keyboard.style.top ? '' : '50%'};

const typing = event => {
    const target = event.target;

    if(target.tagName.toLowerCase() === 'buttom'){
        searchImput.value += targetContent.trim();
    }

};

    keyboardButton.addEventListener('click', toggleKeyboard);
    closeKeyboard.addEventListener('click', toggleKeyboard);
    keyboard.addEventListener('click', typing);
}

{
const burger = document.querySelector('.spinner');
const sidebarMenu = document.querySelector('.sedebarMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle.apply('active');
    sidebarMenu.classList.toggle('rollUp');
});

sidebarMenu.addEventListener('click', e =>{
    let target = e.target;
    target = target.closest('a[href="#"]');

    if(target){
        const parentTarget = target.parentElement;
        console.log(parentTarget);
        sidebarMenu.querySelectorAll('li').forEach(elem => {
            if (elem === parentTarget){
                elem.classList.add('active');
            }else{
                elem.classList.remove('active');
            }
        })
    }
})
}


});
