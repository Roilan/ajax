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
		var timeCreated;
		var d;
		//d = new Date(data.children.data.created * 1000);

		$.each(data.data.children, function(i, redditFeed) {
			//timeCreated = new Date(redditFeed.created * 1000);
			redditFeed.data.created = new Date(redditFeed.data.created * 1000);
		});

		var source = $('#reddit-feed').html();
		var template = Handlebars.compile(source);
		var mytemp = template(data);
		
		$('.postarea').html(mytemp);
		//console.log(data.data.children[0].data.created);
	}

	$.getJSON(url, callback);
}); // end ready