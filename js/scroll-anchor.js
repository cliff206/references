//scroll to anchor
$('a[href^="#"]')
	// Remove links that don't actually link to anything, and carousel links
	.not('[href="#"]')
	.not('[href="#0"]')
	.not('[href="#steps-slide"]')
	.click(function(event) {
		// On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ){
	    	var $root = $('html, body');
	    	var href = $.attr(this, 'href');
	    	// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$root.animate({
			        scrollTop: $(href).offset().top-165
			    }, 800, function () {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
						} else {
						$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					};
				});
	    	}
		}
	});
