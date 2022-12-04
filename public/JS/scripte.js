// card Slider Scripte

const ScrollContainer = [...document.querySelectorAll('.Scroll-Container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

ScrollContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

// full Screen Slid Scripte

window.onload = function () {
    carrouselInit();
};

function carrouselInit() {
    var carrousel = document.getElementById('slidelist1');
    carrousel.style.opacity = '1';
    setInterval(carrouselAutoChange, 15000);
}

function carrouselAutoChange() {
    carrouselRight();
}

function carrouselChange(i) {
    var carrousel = document.getElementById('slidelist' + i);
    carrousel.style.opacity = '1';
}

function carrouselLeft() {
    let nbCarrousel = 3;
    let num = 0;

    for (let i = 0; i < nbCarrousel; i++) {
        num = i + 1;
        var carrousel = document.getElementById('slidelist' + num);
        if (carrousel.style.opacity == '1') {
            carrousel.style.opacity = '0';
            if (i == 0) {
                return carrouselChange(3);
            }
            return carrouselChange(num - 1);
        }
    }
}

function carrouselRight() {
    let nbCarrousel = 3;
    let num = 0;

    for (let i = 0; i < nbCarrousel; i++) {
        num = i + 1;
        var carrousel = document.getElementById('slidelist' + num);
        if (carrousel.style.opacity == '1') {
            carrousel.style.opacity = '0';
            if (i == 2) {
                return carrouselChange(1);
            }
            return carrouselChange(num + 1);
        }
    }
}

// Product Silder scripte

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
