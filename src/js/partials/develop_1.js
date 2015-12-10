function scrollToSecondSection(){

    var secondSection = $('.section-2').offset().top-75;

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

function goTo(){

    $('.nav-bar a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-56;
        $(scroller).animate({scrollTop:target},500);
    });

}

$(document).ready(function(){

    scrollToSecondSection();
    headerScroll();
    goTo();

});

$(window).load(function(){

});

$(window).resize(function(){

});