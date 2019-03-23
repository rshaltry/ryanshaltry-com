$("document").ready(function() {

	// CUFON - font replacement

	Cufon.replace('.light h3', {
		textShadow: 'rgba(255,255,255,.5) 0px 1px 0px'
	});
	
	Cufon.replace('.glass h3', {
		textShadow: 'rgba(255,255,255,.5) 0px 1px 0px'
	});
	
	Cufon.replace('.dark h3', {
		textShadow: 'rgba(0,0,0,.5) 0px 1px 0px'
	});
	
	Cufon.replace('span.title');
	
	
	// Download vCard bubble

	$(".header a.vcard").hover(function() { //mouseover
		$(".header p.bubble").show();
		$(".header p.bubble").animate({
			top: "8px"
		}, 250 );
	}, function() { // mouseout
		$(".header p.bubble").animate({ 
			top: "0px"
		}, 250 );
		setTimeout("$('.header p.bubble').hide();", 250);
		$(".header p.bubble").animate({ 
			top: "0px"
		}, 250 );
	});
	
	
	// jQuery Cycle plugin (portfolio tab)
	
	$(".folio")
	.addClass('working')
	.after('<div id="pager">') 
	.cycle({
		fx:	'scrollHorz',
		pager:  '#pager',
		timeout: 6000
	});	
	
	// Contact Form
	/*
	$('#contactform').ajaxForm({
	   	target: '#error',
	   	beforeSubmit: function() {	
	   		$('#error p').remove();
			$('#error').append('<p class="loading">Sending your message...</p>');
		},
		success: function() {
			$('#error p.loading').fadeOut();
			$('#error').fadeIn('slow');
		}
	});
        */

	
});
