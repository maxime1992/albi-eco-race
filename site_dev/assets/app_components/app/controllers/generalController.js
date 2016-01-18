app.controller('generalController', ['$scope', '$location', '$state', '$translate', function ($scope, $location, $state, $translate) {
	// is menu collapsed ?
	$scope.isCollapsed = true;

	// which item is selected in menu ?
	// return true if viewLocation is equal to url
	$scope.isActive = function (viewLocation) {
		return $location.path().indexOf(viewLocation) > -1;
	};

	$scope.changeLanguageTo = function (lang) {
		// change lang on the whole app
		$translate.use(lang);

		// change state to update the lang into URL
		$state.go($state.current.name);
	};

	$scope.getLanguage = function () {
		return $translate.use();
	};

	// when was the site created
	$scope.startYear = 2016;

	// which year is it ?
	// http://knowyourmeme.com/memes/what-year-is-it
	$scope.whatYearIsIt = function() {
		return new Date().getFullYear();
	};
}]);
