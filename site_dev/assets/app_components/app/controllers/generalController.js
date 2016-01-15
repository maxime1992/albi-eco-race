app.controller('generalController', ['$scope', '$location', '$state', function ($scope, $location, $state, langFactory) {
	// is menu collapsed ?
	$scope.isCollapsed = true;

	// which item is selected in menu ?
	// return true if viewLocation is equal to url
	$scope.isActive = function (viewLocation) {
		return $location.path().indexOf(viewLocation) > -1;
	};
}]);
