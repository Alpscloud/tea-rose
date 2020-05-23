$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	// Fancybox
	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: ['close']
	});

	// quantity
	$('.product__quantity').on('click', function(event) {
		var input = $(this).find('.js-quantity-input'),
			value = input.val(),
			target = $(event.target);
		
		if(target.attr('data-action') === 'plus') {
			value++;
			
			input.val(value);
		

		} else if(target.attr('data-action') === 'minus') {	
			if(input.val() <= 1) {return};
			value--;	
			
			input.val(value);
			
		}

	});

	// Sliders
	var promoSlider = new Swiper('.js-promo-slider', {
		speed: 600,
		spaceBetween: 0,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.js-promo-slider-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.js-promo-slider-btn-next',
			prevEl: '.js-promo-slider-btn-prev',
		},
	});


	$('input[type=tel]').mask('+38 (999) 999-99-99');


});
