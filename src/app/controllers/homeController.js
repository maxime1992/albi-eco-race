(() => {
	/**
	 * @ngdoc controller
	 * @name app.controller:homeController
	 * @description
	 * Home controller creates a twitter element containing
	 * the feeds about @albiEcoRace and #albiEcoRace
	 */
	app.controller('homeController', ($scope) => {
		// function to load tweets 'albiecorace'
		let twitter = (d, s, id) => {
			let js, fjs = d.getElementsByTagName(s)[0],
			p = /^http:/.test(d.location) ? 'http' : 'https';
			if ($(id)) {
				$(id).remove();
			}

			js = d.createElement(s);
			js.id = id;
			js.src = p + '://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js, fjs);
		};

		// when scope is created, create twitter element
		twitter(document, 'script', 'twitter-wjs');

		// when scope is destroyed, remove twitter element
		$scope.$on('$destroy', () => {
			if ($('#twitter-wjs')) {
				$('#twitter-wjs').remove();
			}
		});
	});
})();
