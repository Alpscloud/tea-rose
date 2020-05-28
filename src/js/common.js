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

	// Popup
	$('.js-open-popup-form-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-form').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-add-to-cart-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-added-to-cart').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-login-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-login-form').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-restore-pw-form-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup').fadeOut(300);
		$('.js-popup-restore-pw-form').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========

	// Tabs
	$('.js-tab-content').not(":first").hide();
	$('.js-tab-btn:first').addClass('is-active');

	$('.js-tab-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-tab-content').removeClass('is-active');
		$('.js-tab-btn').removeClass('is-active').eq($(this).index()).addClass('is-active');
		$('.js-tab-content').hide().eq($(this).index()).fadeIn().addClass('is-active');
	}).eq(0).addClass('is-active');

	// Fancybox
	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: ['close']
	});

	// Toggle filter
	$('.js-toggle-filter-block-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');

		$(this).next('.aside-form__filters--block').stop().slideToggle(150);
	});

	// Toggle choise results
	$('.choise-bouquet__variant--label input').each(function() {
		var input = $(this);

		input.on('change', function() {
			var choiseResults = $('.js-choise-results');

			if(choiseResults.hasClass('is-active')) {
				return;
			} else {
				choiseResults.addClass('is-active');
			}
		});
	});

	$('.js-choise-results-clear-btn').on('click', function(e) {
		e.preventDefault();

		var choiseResults = $('.js-choise-results');

		if(choiseResults.hasClass('is-active')) {
			choiseResults.removeClass('is-active');
		}

		$('.choise-bouquet__variant--label input').each(function() {
			var input = $(this);
			$(this).prop('checked', false);
		});

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

	var nonLinearSlider = document.getElementById('price');

	if (nonLinearSlider) {

		noUiSlider.create(nonLinearSlider, {
			connect: true,
			behaviour: 'tap',
			start: [0, 99999],
			range: {
				'min': [0],
				'max': [99999]
			}
		});

		

		var nodes = [
			document.getElementById('priceMin'), // 0
			document.getElementById('priceMax')  // 1
		];

		var priceInput = $('.js-price-input');

		nonLinearSlider.noUiSlider.on('update', function (values, handle) {
			var valueRange = Math.round(values[handle]);

			nodes[handle].value = valueRange + ' грн';

			priceInput.val(valueRange);
		});


		$('.price-range__input').each(function(handle) {
			var self = $(this);

			self.on('change', function () {
				nonLinearSlider.noUiSlider.setHandle(handle, this.value);
			});

		});
		
	}

	// Sliders
	var promoSlider = new Swiper('.js-promo-slider', {
		speed: 600,
		loop: true,
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
		on: {
			init: function() {
				$('.js-promo-slider').parents('.promo-slider').find('.slider__loader').hide(200);
			}
		},
	});


	$('input[type=tel]').mask('+38 (999) 999-99-99');


});
