$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback(rD) {
		var postarea;
		var r;

		// opening div for reddit post area
		postarea = '<div class="postarea">';

		$.each(rD.data.children, function(i, redditFeed) {
			r = redditFeed.data;

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

			// add up/down vote arrows and score
			postarea += '<div class="vote">';
			postarea += '<div class="arrow arrow-up"></div>';

			postarea += '<div class="upvoteAmt"><span>';
			postarea += r.score;
			postarea += '</span></div>'; // close upvote amt

			postarea += '<div class="arrow arrow-down"></div>'
			postarea += '</div>'; // close vote

			// add thumbnail image
			addThumbnail();
		}); // end each


		postarea += '</div>'; // close postarea
		$('#ajax').html(postarea);
	} // end callback

	$.getJSON(url, callback);
}); // end ready