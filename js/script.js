$(function(){
    $(".fadeinout li").hide();
    // $(".fadeinout li").first().fadeIn();
    $(".cakeimg ul").click(function(){
        var idx = $(this).index();
        $(".fadeinout").stop().eq(idx).fadeIn();
    });
});