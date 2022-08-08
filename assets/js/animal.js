//Mobile Bar
var navBarMobile = document.querySelector(".navbar-mobile_btn");
var navBarMobileList = document.querySelector(".nav-mobile__list");

navBarMobile.onclick = function () {
    navBarMobileList.classList.toggle("nav-mobile-open");
}

//Search-btn
var searchBtns = document.querySelectorAll(".search");
var modal = document.querySelector(".search-modal");
var modalForm = document.querySelector(".search-modal__form");

function showSearch() {
    modal.classList.add("active");
}

function closeSearch() {
    modal.classList.remove("active");
}

//Click search button to show search 
for (var searchBtn of searchBtns) {
    searchBtn.addEventListener("click", showSearch);
}

//Click to hide search
modal.addEventListener("click", closeSearch);

//Stop Propagation
modalForm.addEventListener("click", function (event) {
    event.stopPropagation();
})

// Animals filter button search
const animalCards = document.querySelectorAll(".animal-card-js");
const animalCardsLength = animalCards.length;
const animalBtns = document.querySelectorAll(".animals-btn");
const animalsBtnsLength = animalBtns.length;

Array.from(animalBtns).forEach(function (element) {
    element.addEventListener("click", function () {
        for (var i = 0; i < animalsBtnsLength; i++) {
            animalBtns[i].classList.remove("active");
        }
        this.classList.add("active");

        let animalFilter = element.dataset.filter;

        Array.from(animalCards).forEach(function (item) {
            let animalItem = item.dataset.item;

            if (animalItem === animalFilter || animalFilter === "all") {
                item.style.display = "block";
                item.style.animation = "mobileBarGrowth 0.5s linear"
            }
            else {
                item.style.display = "none";
            }
        })
    })
})

// Animals img overlay
const arrayImg = ["animal-card_img-1", "animal-card_img-2",
    "animal-card_img-3", "animal-card_img-4",
    "animal-card_img-5", "animal-card_img-6",
    "animal-card_img-8", "animal-card_img-9",
    "animal-card_img-10", "animal-card_img-11",
    "animal-card_img-12", "animal-card_img-13",
    "animal-card_img-14", "animal-card_img-15",
    "animal-card_img-16"];
const animalModal = document.querySelector(".animal-modal");
const animalModalImg = document.querySelector(".animal-modal__img");
const animalCard = document.querySelectorAll(".animal-card");
let arrayImgIndex = 0;

Array.from(animalCard).forEach(function (elementCards) {
    elementCards.addEventListener("click", function () {
        let firstImgChild = elementCards.firstElementChild.src;
        let imgIndexNumber = firstImgChild.indexOf("img");
        let pngIndexNumber = firstImgChild.indexOf(".png");
        let imgName = firstImgChild.slice(imgIndexNumber + 4, pngIndexNumber);

        animalModal.style.display = "flex";
        animalModalImg.style.backgroundImage = `url(/Github/assets/img/${imgName}.png)`;

        for (let i = 0; i < arrayImg.length; i++) {
            if (imgName === arrayImg[i]) {
                arrayImgIndex = i;
            }
        }
    })
})

// Close animal modal
const closeBtn = document.querySelector(".animal-modal__close");
closeBtn.onclick = function () {
    animalModal.style.display = "none";
}

// Move to other animal's img
const right = document.querySelector(".arrow-right");
const left = document.querySelector(".arrow-left");

right.addEventListener("click", function () {
    arrayImgIndex++;
    if (arrayImgIndex > arrayImg.length - 1) {
        arrayImgIndex = 0;
    }
    animalModal.style.display = "flex";
    animalModalImg.style.backgroundImage = `url(/Github/assets/img/${arrayImg[arrayImgIndex]}.png)`;
})

left.addEventListener("click", function () {
    arrayImgIndex--;
    if (arrayImgIndex < 0) {
        arrayImgIndex = arrayImg.length - 1;
    }
    animalModal.style.display = "flex";
    animalModalImg.style.backgroundImage = `url(/Github/assets/img/${arrayImg[arrayImgIndex]}.png)`;
})

//Interactions
setTimeout(function () {
    odometer1.innerHTML = 156;
}, 100);

setTimeout(function () {
    odometer2.innerHTML = 2;
}, 100);

setTimeout(function () {
    odometer3.innerHTML = 1.5;
}, 100);

setTimeout(function () {
    odometer4.innerHTML = 35;
}, 100);

//Feedback
$(document).ready(function () {
    $(".feedback__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left text-white'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right text-white'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        cssEase: 'ease-in-out',
        speed: 500,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    speed: 300,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                    speed: 300,
                    infinite: false,
                }
            },
        ]
    });
});

//Back to top button
var backToTopBtn = document.querySelector(".back-to-top");
window.onscroll = function () {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopBtn.style.display = "block";
    }
    else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Preloading page
var loader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})