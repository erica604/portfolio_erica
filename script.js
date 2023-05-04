document.onscroll = () => {
    if(window.scrollY > 0) { /*아래로 스크롤 할 때*/
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
};

document.onload = () => {
    if(window.scrollY > 0) { /*문서가 로드 될 때*/
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');

    }
};