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
		var r;

		$.each(data.data.children, function(i, redditFeed) {
			r = redditFeed;
			r.data.created = new Date(redditFeed.data.created * 1000);

			function checkThumbnail() {
				var r = redditFeed.data.thumbnail;
			
				if (r == "") {
					r = '/assets/img/empty.png';
					} else if (r == "self") {
						r = 'assets/img/self.png';
					}else if (r == "nsfw") {
						r = 'assets/img/nsfw.png';
					}
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