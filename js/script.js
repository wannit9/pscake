$(function(){
    cake();
    $(".close").click(function(){
        $(".popup").hide();
    });
});

function cake(){
    $(".fadeinout li").not(":nth-child(1)").hide();
    $(".cakeimg li").click(function(){
        var idx = $(this).index();
        changeImg(idx);
    });
}
function changeImg(num) {
    if (num == 0) {
        $(".fadeinout li").not(":nth-child(1)").fadeOut();
        $(".fadeinout li").eq(num).fadeIn();
    } else if (num == 1){
        $(".fadeinout li").not(":nth-child(2)").fadeOut();
        $(".fadeinout li").eq(num).fadeIn();
    } else if (num == 2){
        $(".fadeinout li").not(":nth-child(3)").fadeOut();
        $(".fadeinout li").eq(num).fadeIn();
    }
}