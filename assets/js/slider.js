/**
 * slides, well actually more like toggles to the 
 * appropriate page based on whether you click 
 * Home, Archive, Ask, or Contact 
 */
var SLIDE_DURATION = 1250;

/*
 * onClick function for each link 
 */

function onClickLink(linkElem) {

    // gets the div class that the link is part of. For example, if the ask link element was linkElem, 
    // then linkElem.attr('class').split(' ') -> ['link', 'ask'] and linkElem.attr('class').split(' ')[1] -> 'ask'. 
    var divId = linkElem.attr('class').split(' ')[1];

    var divElem = $('div').filter('#' + divId);

    linkElem.click(function () {
        divSlider(divElem);
        
        // goes thru all the links. for each link
        // if it references the current visible 
        // div then underline it via the active class 
        $('.link').each(function(index, elem) {
        	
          if($(elem).hasClass(divId))
          	$(elem).addClass('active'); // aka .css('border-bottom', '3px solid #E44A4A', 'color', '#717171');
          else
          	$(elem).removeClass('active');
        });
    });
}

/*
 * div slider
 */

function divSlider(jQueryDivElem) {

    if (jQueryDivElem.hasClass('hidden')) {

        divShow(jQueryDivElem);
        divHide(jQueryDivElem);
    }
}

/*
 *  div show and class changer
 */

function divShow(jQueryDivElem) {

    jQueryDivElem.removeClass('hidden');
    jQueryDivElem.addClass('visible');
    jQueryDivElem.show(SLIDE_DURATION);
}

/*
 *  div hider and class changer
 */
// TODO: implement it 

function divHide(jQueryDivElem) {

    $('.visible').each(function (index, element) {
        if (!(element.id == jQueryDivElem.attr('id'))) {

            $(element).hide(SLIDE_DURATION);
            $(element).addClass('hidden');
            $(element).removeClass('visible');
        }
    });
}

$(document).ready(function () {
	
	$('#ask-page').hide();
	$('#archive-page').hide();
	$('#contact-page').hide();
	

    $('.link').each(function (index, elem) {
        onClickLink($(elem));
    });
});