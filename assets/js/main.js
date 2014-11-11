$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback(data) {
		var r;

		$.each(data.data.children, function(i, redditFeed) {
			r = redditFeed;
			r.data.created = new Date(redditFeed.data.created * 1000);

			function checkThumbnail() {

				if (r.data.thumbnail == '') {
					r.data.thumbnail = '/assets/img/empty.png';
				} else if (r.data.thumbnail == 'self') {
					r.data.thumbnail = '/assets/img/self.png';
				} else if (r.data.thumbnail == 'nsfw') {
					r.data.thumbnail = '/assets/img/nsfw.png';
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