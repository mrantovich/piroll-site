$(document).ready(function(){

	var moreWorks = '<div class="works__box"><div class="works__item"><img src="img/works/work-04.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-05.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-03.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-01.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-02.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-07.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-08.jpg" alt=""></div> <div class="works__item"><img src="img/works/work-06.jpg" alt=""></div> </div>';

	$('.burger').on('click', function() {
		$(this).toggleClass('_active');
	});
	$('.works__more').on('click', function() {
		$('.works').append(moreWorks);
		$(this).remove();
	});

});