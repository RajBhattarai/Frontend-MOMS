$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:20,
    center: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})