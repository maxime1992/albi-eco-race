app.controller('homeController', ['$scope', function($scope) {
	// function to load tweets 'albiecorace'
	var twitter = function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
		p = /^http:/.test(d.location) ? 'http' : 'https';
		if ($(id)) {
			$(id).remove();
		}

		js = d.createElement(s);
		js.id = id;
		js.src = p + "://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);
	};

	// when scope is created, create twitter element
	twitter(document, "script", "twitter-wjs");

	// when scope is destroyed, remove twitter element
	$scope.$on('$destroy', function() {
		if ($('#twitter-wjs')) {
			$('#twitter-wjs').remove();
		}
	});
}]);
