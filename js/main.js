$(document).ready( function(){
    $(".del-item").click(function(){
        $(this).closest(".line-order").fadeOut(function () {
            $(this).closest(".line-order").remove();
            total();
        });
        
        
    })
    $(".minus").click(function(){
        if($(this).siblings(".units").val()>1){
            $(this).siblings(".units").val(+$(this).siblings(".units").val() - 1);
            total();
        }
    })
    $(".plus").click(function(){
        $(this).siblings(".units").val(+$(this).siblings(".units").val() + 1);
        total();
    })
    function total(){
        var imt = 0;
        $("#imt").empty();
        $(".im").each(function() {
           
            imt += (+$(this).closest(".line-order").find(".units").val()) * (+ $(this).html());
        })
        Math.round(imt * 100) / 100;
        $("#imt").html(imt.toFixed(2));
    }
    total();
});
