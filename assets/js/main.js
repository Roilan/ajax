$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback2(rD) {
		var addHTML = '<div>';

		$.each(rD.data.children, function(i, redditFeed) {
			function checkThumbnail() {
				var r = redditFeed.data.thumbnail;

				if (r == "") {
					addHTML += '<img src="assets/img/empty.png">'
					} else if (r == "self") {
						addHTML += '<img src="assets/img/self.png">'
					} else if (r == "nsfw") {
						addHTML += '<img src="assets/img/nsfw.png">'
					} else {
						addHTML += '<img src="' + r + '">'
				}

				addHTML += '</img>'
			}

			addHTML += '<div>' 
			checkThumbnail()
			addHTML += '</div>'
		});

		addHTML += '</div>';
		$('#front').html(addHTML);
	}

	function callback(rD) {
		var postarea;
		var r;

		// opening div for reddit post area
		postarea = '<div class="postarea">';

		$.each(rD.data.children, function(i, redditFeed) {
			r = redditFeed.data;

			// add up/down vote arrows and score
			postarea += '<div class="vote">';
			postarea += '<div class="arrow arrow-up"></div>';

			postarea += '<div class="upvoteAmt"><span>';
			postarea += r.score;
			postarea += '</span></div>'; // close upvote amt

			postarea += '<div class="arrow arrow-down"></div>'
			postarea += '</div>'; // close vote


		}); // end each


		postarea += '</div>'; // close postarea
		$('#ajax').html(postarea);
	} // end callback

	$.getJSON(url, callback);
}); // end ready