$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass= 'panel_scroll',
			nav = $('.nav'),
			navClass = 'nav_scroll',
			navToggle = 'nav_toggle',
			bg = $('.bg-nav'),
			bgClass = 'bg-nav_toggle',
			counts = $('.counts');

	$(window).on('scroll load', function() {
		if($(window).scrollTop() > 0){
			panel.addClass(panelClass);
			nav.addClass(navClass);
		} else {
			panel.removeClass(panelClass);
			nav.removeClass(navClass);
		}

		if ($(window).scrollTop() >= countTop - 300) {
			if (!counts.hasClass('loaded')) {
				$('.counts__item-num').each(function(index, el) {
					var attr = $(this).attr('data-count');

					$(this).animateNumber({
						number: attr
					}, 5000)

				});
			}
			
			counts.addClass('loaded');
		}
	});

	var hum = $('.hum'),
			humClass = 'hum_toggle'

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.toggleClass(navToggle);
		bg.toggleClass(bgClass);
	});

	var countTop = $('.counts').offset().top;



	new WOW().init();

	// window.onload = function() {
	//   Particles.init({
	//     selector: '.background',
	//     color: '#ffffff',
	//     maxParticles: 100,
	//     speed: 1,
	//     connectParticles: true
	//   });
	// };
});
