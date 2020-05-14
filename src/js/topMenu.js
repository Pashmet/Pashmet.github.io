function togleTopMenu(){
    if ($(window).width() <= '991'){
$("#navbarSupportedContent .nav-linkMine").on("click", function(){
    $("#navbarSupportedContent")
    .removeClass("show");
    $(".nav-togglerMine").addClass('collapsed')
})
}
}
$(window).on('load resize',togleTopMenu);
   
