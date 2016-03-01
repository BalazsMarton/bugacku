
$(document).ready(function() {
    $("#lightGallery").lightGallery(); 
  });

$(document).ready(function() {
 $('.navbar-toggle').on("click", function (event) {
    $('.navbar-toggle').toggleClass('rotate');
    $('.navbar-toggle').toggleClass('rotate2');
 }); 
});

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});