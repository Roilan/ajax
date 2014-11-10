$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback(data) {
		var r;

		$.each(data.data.children, function(i, redditFeed) {
			r = redditFeed;
			r.data.created = new Date(redditFeed.data.created * 1000);

			function checkThumbnail() {
				r = r.data.thumbnail;
				console.log(r);

				if (r == 'self') {
					r = '/assets/img/empty.png';
				}
			}

			checkThumbnail();
		});

		var source = $('#reddit-feed').html();
		var template = Handlebars.compile(source);
		var mytemp = template(data);
		
		$('.postarea').html(mytemp);
		//console.log(data.data.children[0].data.created);
	}

	$.getJSON(url, callback);
}); // end ready