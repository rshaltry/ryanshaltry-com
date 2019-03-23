$("document").ready(function() {

	// Contact Form
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
	
});
