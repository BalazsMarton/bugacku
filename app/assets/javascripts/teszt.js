/*
$(document).ready(function(){
	$("#lightGallery").lightGallery();
 	$('.navbar-toggle').on("click", function (event) {
    $('.navbar-toggle').toggleClass('rotate');
    $('.navbar-toggle').toggleClass('rotate2');
 	}); 
 	$(".nav-tabs a").click(function(){
        $(this).tab('show');
    }); 
}); */


$(window).bind("load", function() {
   	$("#lightGallery").lightGallery();
 	$('.navbar-toggle').on("click", function (event) {
    $('.navbar-toggle').toggleClass('rotate');
    $('.navbar-toggle').toggleClass('rotate2');
 	}); 
 	$(".nav-tabs a").click(function(){
        $(this).tab('show');
	});
});