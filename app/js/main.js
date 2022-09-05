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

	$('.blog-page__slider').slick({
		prevArrow: '<button type="button" class="slick-prev"><svg width="11px" height="15px" viewBox="0 0 11 14"><path d="M 1.1875 6.382812 C 0.828125 6.722656 0.828125 7.277344 1.1875 7.621094 L 6.6875 12.871094 C 7.042969 13.210938 7.625 13.210938 7.984375 12.871094 C 8.339844 12.527344 8.339844 11.972656 7.984375 11.632812 L 3.132812 7 L 7.980469 2.367188 C 8.339844 2.027344 8.339844 1.472656 7.980469 1.128906 C 7.621094 0.789062 7.042969 0.789062 6.683594 1.128906 L 1.183594 6.378906 Z M 1.1875 6.382812 "/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg width="11px" height="15px" viewBox="0 0 11 14"><path d="M 9.8125 6.382812 C 10.171875 6.722656 10.171875 7.277344 9.8125 7.621094 L 4.3125 12.871094 C 3.957031 13.210938 3.375 13.210938 3.015625 12.871094 C 2.660156 12.527344 2.660156 11.972656 3.015625 11.632812 L 7.867188 7 L 3.019531 2.367188 C 2.660156 2.027344 2.660156 1.472656 3.019531 1.128906 C 3.378906 0.789062 3.957031 0.789062 4.316406 1.128906 L 9.816406 6.378906 Z M 9.8125 6.382812 "/></svg></button>',
		infinite: false,
	});

	// RateYo plugin for rating
	$(".star").rateYo({
    rating: 3.6,
		starWidth: "18px",
		normalFill: "#ccccce",
		ratedFill: "#ffc35b",
		readOnly: true,
		starSvg: '<svg width="18px" height="16px" viewBox="0 0 18 16"><path d="M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 "/></svg>'
  });

	// Filter shop page (ion.rangeSlider plugin)
	$(".filter-price__input").ionRangeSlider({
		type: "double",
		prefix: "$",
		onStart: function(data){
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function(data){
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		}
	});

	// JQuery-form-styler (stylization selects)
	$('.select-style').styler();
	
	// 
	$('.shop-content__filter-button').on('click', function(){
		$('.shop-content__filter-button').removeClass('shop-content__filter-button--active');
		$(this).addClass('shop-content__filter-button--active');
	});
	$('.button-list').on('click', function(){
		$('.product-item').addClass('product-item--list');
	});
	$('.button-grid').on('click', function(){
		$('.product-item').removeClass('product-item--list');
	});

	// Slider product
	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big',
		focusOnSelect: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		draggable: false
	});
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb',
		draggable: false,
		arrows: false,
		fade: true
	});

	// 
	$('.product-tabs__top-item').on('click', function(e){
		e.preventDefault();
		$('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
		$(this).addClass('product-tabs__top-item--active');

		$('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
		$($(this).attr('href')).addClass('product-tabs__content-item--active');

	});

	// Map
	
});