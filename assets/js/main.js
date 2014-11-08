$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback(rD) {
		var postarea;
		var r;
		var d;

		// opening div for reddit post area
		postarea = '<div class="postarea">';

		$.each(rD.data.children, function(i, redditFeed) {
			r = redditFeed.data;

			// converts epoch to UTC
			d = new Date(r.created * 1000);

			// checks if thunbnail is self or nsfw and places an image accordingly
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

			// add title link
			postarea += '<a class="titleLink" href="#">';
			postarea += r.title;
			postarea += '</a> ';
			postarea += '<span>';
			postarea += r.domain;
			postarea += '</span>';

			// add submission info
			postarea += '<div class="submitInfo">';
			postarea += '<p>submitted ';
			postarea += '<a class="postTime" href="#">' + d + '</a> ago by ';
			postarea += '<a class="postBy" href="#">' + r.author + '</a> to ';
			postarea += '<a class="postSub" href="#">' + r.subreddit + '</a>';
			postarea += '</p>';
			postarea+= '</div>';

			// share, save, etc list items
			postarea += '<ul class="list">';
			postarea += '<li class="listItem"><a href="#">' + r.num_comments + ' comments</a></li>';
			postarea += '<li class="listItem"><a href="#">share</a></li>';
			postarea += '<li class="listItem"><a href="#">save</a></li>';
			postarea += '<li class="listItem"><a href="#">hide</a></li>';
			postarea += '<li class="listItem"><a href="#">report</a></li>';
			postarea += '</ul>'

		}); // end each


		postarea += '</div>'; // close postarea
		$('#ajax').html(postarea);
	} // end callback

	//$.getJSON(url, callback);

	var source = $('#reddit-feed').html();
	var template = Handlebars.compile(source);

	var reddit = {
		score: 10,
		title: 'My Title',
		domain: 'reddit dot com',
		d: 'Today',
		author: 'john doe',
		subreddit: 'le sub',
		num_comments: 5
	};

	$('body').append(template(reddit));

}); // end ready