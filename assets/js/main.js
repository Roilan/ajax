$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback(rD) {
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

	$.getJSON(url, callback);
}); // end ready