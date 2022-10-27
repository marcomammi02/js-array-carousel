const arrImages = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const eleSliderContainer = document.querySelector('.slider-container');

for (i = 0; i < arrImages.length; i++) {
    const eleImg = document.createElement('img');
    eleImg.src = arrImages[i];
    
    if (i == 0) {
        eleImg.classList.add('active');
    }

    eleSliderContainer.append(eleImg);
}

const eleBtnPrev = document.querySelector('.btn-prev');
const eleBtnNext = document.querySelector('.btn-next');
const eleImgList = document.querySelectorAll('img');

let activeIndex = 0

eleBtnNext.addEventListener('click', function() {
    if (activeIndex < eleImgList.length) {
        eleImgList[activeIndex].classList.remove('active');
        
        activeIndex++;

        if (activeIndex == eleImgList.length) {
            activeIndex = 0;
        } 

        eleImgList[activeIndex].classList.add('active');
    }
})
eleBtnPrev.addEventListener('click', function() {
    if (activeIndex >= 0) {
        eleImgList[activeIndex].classList.remove('active');

        if (activeIndex == 0) {
            activeIndex = eleImgList.length - 1;
        } else {
            activeIndex--;
        }

        eleImgList[activeIndex].classList.add('active');
    }
})