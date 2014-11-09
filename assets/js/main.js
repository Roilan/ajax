$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

		function addThumbnail() {
			var r = redditFeed.data.thumbnail;

			if (r == "") {
				postarea += '<img class="thumbnail" src="assets/img/empty.png" />'
				} else if (r == "self") {
					postarea += '<img class="thumbnail" src="assets/img/self.png" />'
				} else if (r == "nsfw") {
					postarea += '<img class="thumbnail" src="assets/img/nsfw.png" />'
				} else {
					postarea += '<img class="thumbnail" src="' + r + '" />'
			}
		}

	function callback(data) {

		var source = $('#reddit-feed').html();
		var template = Handlebars.compile(source);
		var mytemp = template(data);
		
		$('.postarea').html(mytemp);
	}

	$.getJSON(url, callback);
}); // end ready