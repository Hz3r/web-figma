
// Swiper 1
const swiperOne = new Swiper('.swiper-one', {
    slidesPerView: 3,
    spaceBetween:20,
    
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

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