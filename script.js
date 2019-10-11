 " use strict";
document.addEventListener('DOMContentLoaded', () => {

    {
    const keyboardButton = document.querySelector('.search-form__keyboard');
       keyboard =document.querySelector('.keyboard'),
        closeKeyboard = document.getElementById('close-keyboard'), 
        searchInput = document.querySelector('.search-form__input');

    const toggleKeyboard = () => {
        keyboard.style.top = keyboard.style.top ? '' : '50%'};

const changeLang = (btn, lang) =>
{
    const langEn = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    'de', ' '];
    const langDE =['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    'en', ' '];

    if(lang === 'en'){
        btn.forEach((elem, i, buttons) =>{
            console.log();
elem.textContent = langEn[i];
        })
}else {
    btn.forEach((elem, i) =>{
        elem.textContent = langDE[i];
    })
}
}
const typing = event => {
    const target = event.target;

    if(target.tagName.toLowerCase() === 'buttom'){
        const buttons =[...keyboard.querySelectorAll('button')]
        .filter(elem => elem.style.visibility !== 'hidden');
        console.log(buttons);
        const contentButton = target.textContent.trim();

        if(contentButton === '⬅'){
            searchInput.value = searchInput.value.slice(0, length -1);    
        }else if(!contentButton){
            searchInput.value += ' ';
        } else if(contentButton === 'en' ||
        contentButton === 'de' ){
          changeLang(button, contentButton)
        } else  {
            
    
        searchInput.value += contentButton;
        }
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

{

    document.body.insertAdjacentHTML('beforeend',`
<div class="youtuberModal">
    < div id="youtuberClose">&#215;<div>
    <div id="youtuberContainer"><div>
</div>
`);

const youtuberItems = document.querySelectorAll('[data-youtuber]');
const youTuberModal = document.querySelector('.youtuberModal');
const youtuberContainer = document.getElementById('youtuberContainer');

const qw = [3840, 2560, 1920, 1280, 854, 640, 426, 256];
const qh = [2160, 1440, 1080, 720, 480, 360, 240, 144];

const sizeVideo = () => {
    let ww = document.documentElement.clientWidth;
    let wh = document.documentElement.clientHeight;
    
    for(let i=0; i < qw.length; i++ ){
        if( ww > qw[i]){
            youtuberContainer.querySelector('iframe').style.cssText = `
            width: ${qw[i]}px;
            height: ${qh[i]}px;
            `;
            youtuberContainer.style.cssText = `
            width: ${qw[i]}px;
            height: ${qh[i]}px;
            top: ${(wh - qh[i]) / 2}px;
            left: ${(ww - qw[i]) / 2}px;
            `;
          break;  
        }
    
    }
    }
youtuberItems.forEach(elem =>{
    elem.addEventListener('click',() => {
        const idVideo = elem.dataset.youtuber;
        youTuberModal.style.display = 'block';

        const youTuberFrame = document.createElement('iframe');
        youTuberFrame.src = `https://youtube.com/embed/${idVideo}`;
        youtuberContainer.insertAdjacentElement('beforeend',youTuberFrame);
        
        window.addEventListener('resize', sizeVideo);

        sizeVideo();

    })
})

youTuberModal.addEventListener('click', () =>{
    youTuberModal.style.display = '';
    youtuberContainer.textContent = '';
    window.removeEventListener('resize', sizeVideo);

})

}

//aPI KEY
{
const API_KEY ='AIzaSyDs6jEF5FWFB-08vJMZurq4tKf0LBQVrYI';
const CLIENT_ID = '936404617377-v6s7mdhqohfn1tp4rivtf71k3mkvjoml.apps.googleusercontent.com';
}

});
