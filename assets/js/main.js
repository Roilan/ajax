$('document').ready(function() {
	var $input 	= $('#input'),
		$submit = $('#submit'),
		$username = $('#username');

	$submit.on('click', function(e) {
		e.preventDefault();
		// find the most upvoted for a sub reddit

		var url = 'http://www.reddit.com/r/' + $input.val() +'/top.json?jsonp=';

		var settings = {
			t: 'all',
			limit: 10
		};

		function callback(data) {
			// obj = data.data.children

			var html = '<div>';

			$.each(data.data.children, function(i, redditPost) {
				html += '<p>';
				html += '<a href="' + redditPost.data.url + ' target="_blank">' + redditPost.data.title  +  '</a>"';
				html += ' <span style="color:red">'; 
				html +=  redditPost.data.score;
				html += '</span>';
				html += '</p>';
			});

			html+= '</div>';
			$username.html(html);
		};

		$.getJSON(url, settings,  callback);

	});

}); // end ready