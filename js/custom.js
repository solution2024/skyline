$(document).ready(function(){
    $('.updateSlide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    
                }
            }
        ]
    });
    $('.commentSlide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
    
                }
            }
        ]
    });
    
    //  couter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

// profolio photo

$('.buttons').click(function(){

    $(this).addClass('active').siblings().removeClass('active');

    var filter = $(this).attr('data-filter')

    if(filter == 'All'){
        $('.image').show(400);
    }else{
        $('.image').not('.'+filter).hide(200);
        $('.image').filter('.'+filter).show(400);
    }

});

$('.gallery').magnificPopup({
    type: 'image',
    delegate:'a',
    type:'image',
    gallery:{
        enabled:true
    }

});







});