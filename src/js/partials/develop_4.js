function sectionSlider(){
    $('.section-9-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true
    });
}

$(document).ready(function(){
    sectionSlider();
});

$(window).load(function(){

});

$(window).resize(function(){

});