const arrImages = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const eleSliderContainer = document.querySelector('.slider-container');
const eleSmallImgContainer = document.querySelector('.small-img-container');

for (let i = 0; i < arrImages.length; i++) {
    const eleImg = document.createElement('img');
    eleImg.src = arrImages[i];
    eleImg.classList.add('slider-img');
    eleSmallImgContainer.innerHTML += `<img class="small-img" src="${arrImages[i]}">`;
    const eleSmallImg = document.querySelector('.small-img');

    if (i == 0) {
        eleImg.classList.add('active');
        eleSmallImg.classList.add('active-small');
    }

    eleSliderContainer.append(eleImg);
}

const eleBtnPrev = document.querySelector('.btn-prev');
const eleBtnNext = document.querySelector('.btn-next');
const eleImgList = document.querySelectorAll('.slider-img');
const eleSmallImgList = document.querySelectorAll('.small-img')

let activeIndex = 0

eleBtnNext.addEventListener('click', function() {
    if (activeIndex < eleImgList.length) {
        eleImgList[activeIndex].classList.remove('active');
        eleSmallImgList[activeIndex].classList.remove('active-small');

        activeIndex++;

        if (activeIndex == eleImgList.length) {
            activeIndex = 0;
        } 

        eleImgList[activeIndex].classList.add('active');
        eleSmallImgList[activeIndex].classList.add('active-small');

    }
})
eleBtnPrev.addEventListener('click', function() {
    if (activeIndex >= 0) {
        eleImgList[activeIndex].classList.remove('active');
        eleSmallImgList[activeIndex].classList.remove('active-small');

        if (activeIndex == 0) {
            activeIndex = eleImgList.length - 1;
        } else {
            activeIndex--;
        }

        eleImgList[activeIndex].classList.add('active');
        eleSmallImgList[activeIndex].classList.add('active-small');

    }
})