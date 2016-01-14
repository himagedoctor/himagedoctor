Template.charity.rendered = function() {
	/******* scroll page ********/
	$('body').scrollspy({target: '.navbar-nav'});

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($('.navbar').offset().top > 50) {
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		} else {
			$('.navbar-fixed-top').removeClass('top-nav-collapse');
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	this.$('.navbar-nav li a').bind('click', function(event) {
		var anchor = $(this).attr('href');
		if($(this).attr('class') !== 'dropdown-toggle') {
			$('html, body').stop().animate({
				scrollTop: $(anchor).offset().top
			}, 1500, 'easeInOutExpo');
		}
		event.preventDefault();
	});
	this.$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
};
