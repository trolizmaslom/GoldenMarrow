function sectionSlider(){
    $('.section-9-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
        draggable:false,
        centerPadding:'30px'
    });
    $('.section-9-slider').on('beforeChange', function(){
        $('.item-slide-hidden').fadeOut();
    });
    $('.section-9-slider').on('afterChange', function(){
        $('.item-slide.slick-center').find('.item-slide-hidden').fadeIn();
    });

}

$(document).ready(function(){
    sectionSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});