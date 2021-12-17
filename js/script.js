$(function(){
    $(".fadeinout li").hide();
    $(".fadeinout li").first().fadeIn();
    $(".cakeimg li").click(function(){
        var idx = $(this).index();
        $(".fadeinout").eq(idx).fadeIn();
    });
});