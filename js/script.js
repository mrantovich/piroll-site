$(document).ready(function(){

	var moreWorks = '<div class="works__box"><div class="works__item"><img src="img/works/work-04.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-05.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-03.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-01.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-02.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-07.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-08.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-06.jpg" alt=""></div> </div>';

	$('.burger').on('click', function() {
		$(this).toggleClass('_active');
		$('.nav__list, .header__logo').toggleClass('_active');
		$('body').toggleClass('_locked');
		$('.skills__progress-item, .text-slider__box').toggleClass('_burger-is-active');
	});

	$('.works__more').on('click', function() {
		$('.works').append(moreWorks);
		$(this).remove();
	});

	$('.text-slider__dot').on('click', function(){
		if (!$(this).hasClass('text-slider__dot_active')) {
			$('.text-slider__dot').removeClass('text-slider__dot_active');
			$(this).toggleClass('text-slider__dot_active');
			if ($(this).hasClass('text-slider__dot_first')) {
				$('.text-slider__items').removeClass('second-is-active third-is-active').addClass('first-is-active');
			}
			else if ($(this).hasClass('text-slider__dot_second')) {
				$('.text-slider__items').removeClass('first-is-active third-is-active').addClass('second-is-active');
			}
			else if ($(this).hasClass('text-slider__dot_third')) {
				$('.text-slider__items').removeClass('first-is-active second-is-active').addClass('third-is-active');
			}
		};
	});

	var intv;
	var currentDot = 1;
	var dotsLength = $('.text-slider__dot').length;

	setInterval(function() {
		if ($('.text-slider__dot_first').hasClass('text-slider__dot_active')) {
			$(this).remove('text-slider__dot_active');
			$('.text-slider__dot_second').click();
		}
		else if ($('.text-slider__dot_second').hasClass('text-slider__dot_active')) {
			$(this).remove('text-slider__dot_active');
			$('.text-slider__dot_third').click();
		}
		else if ($('.text-slider__dot_third').hasClass('text-slider__dot_active')) {
			$(this).remove('text-slider__dot_active');
			$('.text-slider__dot_first').click();
		}
	}, 5000);


});