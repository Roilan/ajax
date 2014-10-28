$('document').ready(function() {
	var $input 	= $('#input'),
		$submit = $('#submit'),
		$username = $('#username');

	$submit.on('click', function(e) {
		e.preventDefault();
		
		var url = 'http://www.reddit.com/r/aww.json?jsonp=';

		function callback(data) {
			// obj = data.data.children
			console.log(data.data.children);

			var html = '<ul>';

			$.each(data.data.children, function(i, redditPost) {
				html += '<li>';
				html += '<img src="' + redditPost.data.thumbnail +  '" alt="alt txt" />';
				html += '</li>';
			});
			html += '</ul>';
			$username.html(html);
			$('#username li').first().remove();
		};

		$.getJSON(url, callback);
	});


}); // end ready