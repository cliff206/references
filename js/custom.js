/*!
Custom JS


 */


$( document ).ready(function() {
	//makes carousels not wrap
	$('.carousel').carousel({
	  wrap: false
	});
	//checks fist slide in carosuel not have left arrow
	if ($('.carousel-inner .item.step1').hasClass('active')) {
		// Hide left arrow
		$('.left.carousel-control').hide();		        	            
	}
	
	// returns the year (four digits)
	const year = (new Date()).getFullYear();
	$(".year").text(year);

	//adds slimheader class to header on scroll and slides header down
    $(function() {
	    var header = $(".header");
	    $(window).scroll(function() {    
	        var scroll = $(window).scrollTop();
	    
	        if (scroll >= 300) {
	            header.addClass("slimheader").css({
	            	/*top:'0px'*/
	            });
	        } else {
	            header.removeClass("slimheader").css({
		            /*top: '-200px'*/
		        });;
	        }
	    });
	});

}); //closes document.ready
 		
//hides left and right arrows at end of carousel, update classes to match html
$('.carousel').on('slid.bs.carousel',checkitem);

function checkitem(){
var $carousel = $(this).find('.carousel-inner .item');
	if($carousel.is('.step1.active')){ // is first slide
		$(this).find('.carousel-control.right').show();
		$(this).find('.carousel-control.left').hide();
	
	}else if($carousel.is(".step3.active")){ // is last slide
		$(this).find('.carousel-control.left').show();
		$(this).find('.carousel-control.right').hide();
		
	}else{ // is not first or last slide
		$(this).find('.carousel-control').show();
		
	}
}
//ends hide left and right arrows

//vertical time line
(function(){
    // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("js-cd-block");
		this.images = this.element.getElementsByClassName("js-cd-img");
		this.contents = this.element.getElementsByClassName("js-cd-content");
		this.offset = 0.8;
		this.hideBlocks();
	};

	VerticalTimeline.prototype.hideBlocks = function() {
		//hide timeline blocks which are outside the viewport
		if ( !"classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-is-hidden"); 
					self.contents[i].classList.add("cd-is-hidden"); 
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function() {
		if ( ! "classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("cd-timeline__img--bounce-in");
					self.contents[i].classList.add("cd-timeline__content--bounce-in");
					self.images[i].classList.remove("cd-is-hidden");
					self.contents[i].classList.remove("cd-is-hidden");
				}
			})(i);
		}
	};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};
})();

//push in on click
jQuery(document).ready(function($){
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

	//open team-member bio
	$('#project-list').find('ul a').on('click', function(event){
		event.preventDefault();
		var selected_member = $(this).data('type');
		$('.project-info.'+selected_member+'').addClass('slide-in');
		$('.cd-member-bio-close').addClass('is-visible');

		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( is_firefox ) {
			$('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
		} else {
			$('main').addClass('slide-out');
			$('body').addClass('overflow-hidden');
		}

	});

	//close team-member bio
	$(document).on('click', '.cd-overlay, .cd-member-bio-close', function(event){
		event.preventDefault();
		$('.project-info').removeClass('slide-in');
		$('.cd-member-bio-close').removeClass('is-visible');

		if( is_firefox ) {
			$('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('main').removeClass('slide-out');
			$('body').removeClass('overflow-hidden');
		}
	});
});

//bs collapse via js

	$(document).ready(function(){
		$(".read-more").click(function(){
	    	$(".more-content").collapse('toggle');
		});

	});

//function to pass value of one form field to another one or hidden one on submit (jquery)
$(function() {
	$('#submit').click(function() {
		//variable to get the value of my custom field
	    const vanityNumber = $("#vanityNumber").val();
	    
	    //changes the value of the hidden field with the new value from the custom form
	    $("#00N60000002JAd0").val("Desired Vanity Number:" + vanityNumber);
	});
});

//javascript
document.getElementById("submit").addEventListener("click", combineValue);
			
function combineValue(){
	
	const vanityNumber = document.getElementById("vanityNumber").value;
	const customValue01 = document.getElementById("customField01").value;
	const hiddenField = document.getElementById("00N60000002JAd0");

	document.getElementById("00N60000002JAd0").value = ("Desired Vanity number: " + vanityNumber + "\n" + "Custom Field: " + customValue01);

	
};