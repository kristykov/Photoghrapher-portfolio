
// Animation on scroll
const arrImg = [].slice.call(document.querySelectorAll('.gallery-item'));
const screenPosition = window.innerHeight / 1.2;

function scrollAppear() {

    arrImg.forEach((img, index) => {
        if (screenPosition > img.getBoundingClientRect().top) {
            img.classList.add('gallery-item-appear');
        }
    })
}

window.addEventListener('scroll', scrollAppear);
