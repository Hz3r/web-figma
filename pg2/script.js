// Swiper 1
const swiperOne = new Swiper('.swiper-one', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints:{
        320:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640:{
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 20,
        }

    }

});


// Swiper 2

const swiperTwo = new Swiper('.swiper-two', {
    slidesPerView: 1,
    loop: true,


    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
},
});