function telMask(){
    $('.tel-mask').mask('+9 (999) 999-99-99 ');
}
$(document).ready(function(){
    telMask();
     $('.fancybox').fancybox({
            padding:0
     });
    validate('.contact-form', {submitFunction:validationCall});
    validate('.contact-form2', {submitFunction:validationCall2});
});

$(window).load(function(){

});

$(window).resize(function(){

});