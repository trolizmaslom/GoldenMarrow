function scrollToSecondSection(){

    var secondSection = $('.section-2').offset().top;

    $('.section-1-learn-more-wrap').click(function(){
        $(scroller).animate({scrollTop:secondSection}, 400);
    });

};

$(document).ready(function(){

    scrollToSecondSection();

});

$(window).load(function(){

});

$(window).resize(function(){

});