<!-- INITIALIZATION AND ADD CURRENT SLIDE NUMBER -->
const glide = new Glide('.glide').mount();
const slide = document.getElementsByClassName('slide-number')[0];

glide.on('run.after', event =>{
    slide.innerText = glide.index + 1;
});

const header = document.getElementsByTagName('header')[0];
const logo = document.getElementsByClassName('logo-img')[0];
const logoImg = logo.getElementsByTagName('img')[0];
const number = document.getElementsByClassName('number')[0];
const menuButton = document.getElementsByClassName('menu-button')[0];
const menuButtonImg = menuButton.getElementsByTagName('img')[0];
const menu = document.getElementsByTagName('menu')[0];
const openInfoButtons = [...document.getElementsByClassName('open-info-button')];
const carouselLists = [...document.getElementsByClassName('carousel-list')];
const carouselTitles = [...document.getElementsByClassName('carousel-title')];
const carouselDescription = [...document.getElementsByClassName('carousel-description')];

<!-- CHANGE MENU WHEN SCROLLING -->
document.addEventListener('scroll', event =>{
    if(pageYOffset !== 0){
        changeMenuToBlackTheme()
    }
    if(pageYOffset === 0 && menu.style.display === 'none'){
        changeMenuToWhiteTheme()
    }
});

<!-- CHANGE MENU WHEN CLICK MENU BUTTON -->
menuButton.addEventListener('click', event =>{
   if(menu.style.display === 'flex'){
       menu.style.display = 'none';

       if(pageYOffset === 0){
           header.style.background = '';
           logoImg.removeAttribute('src');
           logoImg.setAttribute('src','images/logo.png');
           number.style.color = '#ffffff';
           menuButtonImg.removeAttribute('src');
           menuButtonImg.setAttribute('src','images/menu.png');
       }else{
           menuButtonImg.removeAttribute('src');
           menuButtonImg.setAttribute('src','images/black-menu.png');
       }

       changeMenuButtonSize(menuButton);
   }else{
       menu.style.display = 'flex';
       header.style.background = '#ffffff';
       logoImg.removeAttribute('src');
       logoImg.setAttribute('src','images/black-logo.png');
       number.style.color = '#303030';

       menuButton.style.width = '40px';
       menuButton.style.height = '40px';
       menuButton.style.padding = '0 5px';
       menuButtonImg.removeAttribute('src');
       menuButtonImg.setAttribute('src','images/close-menu.png');
   }
});

openInfoButtons.forEach(element =>{
    element.addEventListener('click', event =>{
        if(carouselLists[0].style.display !== 'block'){
            openInfoButtons.forEach(element =>{
                element.innerText = 'скрыть';
            });
            carouselTitles.forEach(element =>{
                element.style.display = 'block';
            });
            carouselDescription.forEach(element=>{
                element.style.display = 'block'
            });
            carouselLists.forEach(element =>{
                element.style.display = 'block';
            })
        }else{
            openInfoButtons.forEach(element =>{
                element.innerText = 'раскрыть';
            });
            carouselTitles.forEach(element =>{
                element.style.display = 'none';
            });
            carouselDescription.forEach(element=>{
                element.style.display = 'none'
            });
            carouselLists.forEach(element =>{
                element.style.display = 'none';
            })
        }
    });
});


if(pageYOffset !== 0){
    changeMenuToBlackTheme();
}

function changeMenuToBlackTheme() {
    header.style.background = '#ffffff';
    number.style.color = '#303030';
    logoImg.removeAttribute('src');
    logoImg.setAttribute('src','images/black-logo.png');
    menu.style.display = 'none';

    changeMenuButtonSize(menuButton);

    menuButtonImg.removeAttribute('src');
    menuButtonImg.setAttribute('src','images/black-menu.png');
}

function changeMenuToWhiteTheme(){
    header.style.background = '';
    logoImg.removeAttribute('src');
    logoImg.setAttribute('src','images/logo.png');
    number.style.color = '#ffffff';

    changeMenuButtonSize(menuButton);

    menuButtonImg.removeAttribute('src');
    menuButtonImg.setAttribute('src','images/menu.png');
    menu.style.display = 'none';
}

function changeMenuButtonSize(menuButton){
    menuButton.style.width = '50px';
    menuButton.style.height = 'auto';
    menuButton.style.padding = '0';
}