$('document').ready(function() {
	var url = 'http://www.reddit.com/.json?jsonp=';

	function callback(rD) {
		var addHTML = '<div>';

		$.each(rD.data.children, function(i, redditFeed) {
			addHTML += '<div>' 
			addHTML += '<p>'
			addHTML += redditFeed.data.title 
			addHTML += '</p>'
			addHTML += '</div>'
		});

		addHTML += '</div>';
		$('#front').html(addHTML);
	}

	function callback2(rD) {
		var addHTML = '<div>';

		$.each(rD.data.children, function(i, redditFeed) {
			function checkThumbnail() {
				if (redditFeed.data.thumbnail == "") {
					addHTML += '<img src="assets/img/empty.png">'
					} else if (redditFeed.data.thumbnail == "self") {
						addHTML += '<img src="assets/img/self.png">'
					} else {
						addHTML += '<img src="' + redditFeed.data.thumbnail + '">'
				}
			}
			
			addHTML += '<div>' 
			checkThumbnail()
			addHTML += '</img>'
			addHTML += '</div>'
		});

		addHTML += '</div>';
		$('#front').html(addHTML);
	}
	$.getJSON(url, callback2);
}); // end ready