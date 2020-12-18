
$(function() {
	$("#myCarousel").carousel();
 	$('.navbar-toggle').on("click", function (event) {
    $('.navbar-toggle').toggleClass('rotate');
    $('.navbar-toggle').toggleClass('rotate2');
 	}); 
 	$(".nav-tabs a").click(function(){
        $(this).tab('show');
	});

	if (document.querySelector('#lightGallery')){
		let galleryImages = [  'IMG_4352-min.JPG',
		'IMG_3776-min.JPG',  'IMG_4341-min.JPG'];
		let galleryImagesNh = [
		'IMG_3797-min.JPG',  'IMG_3863-min.JPG',  'IMG_4009-min.JPG',
		'IMG_3762-min.JPG',  'IMG_3817-min.JPG',  'IMG_3894-min.JPG',  
		'IMG_4026-min.JPG',  'IMG_3767-min.JPG',  'IMG_3833-min.JPG',  'IMG_3905-min.JPG',  'IMG_4061-min.JPG',
		'IMG_3772-min.JPG',  'IMG_3839-min.JPG',  'IMG_3916-min.JPG',
		'IMG_3785-min.JPG',  'IMG_3852-min.JPG',  'IMG_3965-min.JPG',  'IMG_3855-min.JPG',  'IMG_3995-min.JPG'
		
		]
		const galleryContainer = document.querySelector('#lightGallery');
		galleryImages.forEach(element=>{
		  galleryContainer.innerHTML += `
		  <li class="col-xs-12 col-sm-3" data-src="/img/gallery_images/highlight/${element}">
			<img class="img-responsive" src="/img/gallery_images/highlight/${element}" />
		  </li>
		  `
		})
		galleryImagesNh.forEach(element=>{
		  galleryContainer.innerHTML +=`
		  <li class="col-xs-12 col-sm-3" data-src="/img/gallery_images/${element}">
			<img class="img-responsive" src="/img/gallery_images/${element}" />
		  </li>
		  `
		})
		$("#lightGallery").lightGallery();

		
	}
});
