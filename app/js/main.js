$(function(){
	
	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		// Плавное переключения
		fade: true,
		// Автоматически переключения
		autoplay: true,
		// Скорость переключения
		autoplaySpeed: 3000,
	});

	// RateYo plugin for rating
	$(".star").rateYo({
    rating: 3.6,
		starWidth: "18px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: true
  });
});