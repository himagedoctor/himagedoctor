Template.trainingLong.rendered = function() {
	/******* scroll page ********/
	$(window).scrollTop(0);
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

	/****** jssor slider *************/
	var options = {
		$AutoPlay: true,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$ChanceToShow: 2
		}
	};
	var jssorSlider1 = new $JssorSlider$('training_container', options);
	//responsive code begin
  //you can remove responsive code if you don't want the slider scales
  //while window resizes
  function ScaleSlider() {
  	var parentWidth = $('#training_container').parent().width();
  	if (parentWidth) {
  		jssorSlider1.$ScaleWidth(parentWidth);
  	}
  	else {
  		window.setTimeout(ScaleSlider, 30);
  	}
  }
  //Scale slider after document ready
  ScaleSlider();
  if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
      //Capture window resize event
      $(window).bind('resize', ScaleSlider);
    }
  //responsive code end
};
