function telMask(){
    $('.tel-mask').mask('+9 (999) 999-99-99 ');
}
function activPop3(){
    $('#call-popup3').toggleClass('activator');
}
$(document).ready(function(){
    telMask();
     $('.fancybox').fancybox({
            padding:0
     });
     setTimeout(function(){activPop3();}, 5000);
     $('.popup-close').click(function(event) { activPop3(); });
    validate('.contact-form', {submitFunction:validationCall});
    validate('.contact-form2', {submitFunction:validationCall2});
    validate('.contact-form3', {submitFunction:validationCall3});
});

$(window).load(function(){

});

$(window).resize(function(){

});