// Header menu js //
	$(document).ready(function() {
		$(function($) {
		  let url = window.location.href;
		  $('.header_sec .navbar .navbar-nav > li > a').each(function() {
			if (this.href === url) {
			  $(this).closest('li').addClass('active');
			}
		  });
		});
	});

	$('.header_sec .navbar .dropdown > .dropdown-toggle').click(function () {
		window.location = $(this).attr('href');
	});
// Sticky-Header js //
	$(window).scroll(function(){
		if ($(this).scrollTop() > 80) {
		   $('.header_sec').addClass('header_sticky');
		} else {
		   $('.header_sec').removeClass('header_sticky');
		}
	});
// owl-carousel js
$(document).ready(function() {
	var owl = $('.owl-carousel');
	$('.served-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:15,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1024:{
				items:4
			}
		}
	});
	
});
$('.clientSlide').owlCarousel({
	loop:true,
	autoplay:true,
	margin:25,
	nav:false,
	dots:true,
	responsive:{
		0:{
			items:1
		},
		768:{
			items:2
		},
		1024:{
			items:2
		}
	}
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(document).ready(function() {
	$(".topScroll").click(function(e){
	   e.preventDefault();
	   var dest = $(this).attr('href');
	   $("html, body").animate({ scrollTop: $(dest).offset().top -= 150}, 500);
	});
}); 
  
AOS.init();


// Gallery 
function openModal() {
	document.getElementById("myModal").style.display = "block";
}
  
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  }