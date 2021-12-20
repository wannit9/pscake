$(function(){
    $(".fadeinout li").hide();
    $(".fadeinout ul").eq(0).show();
    $(".cakeimg li").click(function(){
        var idx = eq(this).index();
        $(".fadeinout").eq(idx).fadeIn(200);
    });
});