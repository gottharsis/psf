const LEFT_BUTTON_CLASS = "hero-scroll-button-left";
const RIGHT_BUTTON_CLASS = "hero-scroll-button-right";

const images = document.getElementsByClassName("hero-image-div");
const numberOfImages = images.length;
let currentIndex = 0;

const onClickHeroScrollButton = function () {
    let newIndex;
    if ($(this).hasClass(LEFT_BUTTON_CLASS)) {
        newIndex = (currentIndex - 1 + numberOfImages) % numberOfImages;
    }
    else if ($(this).hasClass(RIGHT_BUTTON_CLASS)) {
        newIndex = (currentIndex + 1) % numberOfImages;
    }
    $(images[currentIndex]).hide();
    $(images[newIndex]).show();
    currentIndex = newIndex;
};

$(".hero-scroll-button").on("click", onClickHeroScrollButton)