function sectionSlider(){
     setTimeout(function(){

            $('.item-slide:not(.slick-center) .item-slide-hidden').css('display','none');
            console.log('init');
        },1500);
    $('.section-9-slider').on('init', function(event, slick, direction){


    });
    $('.section-9-slider').on('beforeChange', function(){
        $('.item-slide-hidden').fadeOut(100);
    });
    $('.section-9-slider').on('afterChange', function(){
        $('.item-slide.slick-center').find('.item-slide-hidden').fadeIn(100);
    });
    $('.section-9-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
        draggable:false,
        centerPadding:'30px'
    });



}

$(document).ready(function(){
    sectionSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});