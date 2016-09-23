$(document).ready( function() {

	var sectionBlocks = $('.section-content');
	var tocLinks = $('.toc-link');

	$(window).scroll( function() {

		sectionBlocks.each( function() {

			//Get Measurements for each Block
			var thisBlock = jQuery(this);
			var thisBlockScroll = $(window).scrollTop();
			var thisBlockTop = thisBlock.offset().top;
			var thisBlockHeight = thisBlock.height();
			var thisBlockTopDistance = thisBlockTop + thisBlockHeight;
			var thisBlockIndex = thisBlock.index();

			//Check if the current scroll position is within the current section.
			if ((thisBlockScroll > thisBlockTop) && (thisBlockScroll < thisBlockTopDistance)) {

				//Find the toc link that has the same index level as the current section, style it.
				tocLinks.each( function() {
					
					var thisLink = jQuery(this);
					var thisLinkIndex = thisLink.index();

					if (thisBlockIndex == thisLinkIndex) {
						tocLinks.removeClass('this-section');
						thisLink.addClass('this-section');
					}
				});

			}

		});

	});

});

