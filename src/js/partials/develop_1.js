function scrollToSecondSection(){

    var secondSection = $('.section-2').offset().top;

    $('.section-1-learn-more-wrap').click(function(){
        $(scroller).animate({scrollTop:secondSection}, 400);
    });

};

function headerScroll(){

    function headerClass(){
        if($(window).scrollTop() != 0){
            $('.header').addClass('scroll');
        }
        else{
            $('.header').removeClass('scroll');
        }
    }

    headerClass();
    $(window).scroll(function(){

        headerClass();

    });

};

$(document).ready(function(){

    scrollToSecondSection();
    headerScroll();

});

$(window).load(function(){

});

$(window).resize(function(){

});