'use strict';

(function () {
	/**
  * @ngdoc controller
  * @name app.controller:generalController
  * @description
  * A It contains by default the active tab view and the language selected
  */
	app.controller('generalController', function ($rootScope, $scope, $location, $state, $translate, langFactory) {
		/**
  * @ngdoc method
  * @name isActive
  * @methodOf app.controller:generalController
  * @description
  * Return the location url of the open tab .
  * @returns {Object} return the location path of the active tab
  */
		$scope.isActive = function (viewLocation) {
			return $location.path().indexOf(viewLocation) > -1;
		};

		/**
  * @ngdoc method
  * @name changeLanguageTo
  * @methodOf app.controller:generalController
  * @description
  * Set the language in function of the lang
  * @param {string} lang language
  */
		$scope.changeLanguageTo = function (lang) {
			$translate.use(lang);

			langFactory.setLang(lang);

			$scope.navCollapsed = !$scope.navCollapsed;
		};

		/**
  * @ngdoc method
  * @name getLanguage
  * @methodOf app.controller:generalController
  * @description
  * Get the language
  * @returns {string} lang
  */
		$scope.getLanguage = function () {
			return $translate.use();
		};

		// when was the site created
		$scope.startYear = 2016;

		// which year is it ?
		// http://knowyourmeme.com/memes/what-year-is-it
		$scope.whatYearIsIt = function () {
			return new Date().getFullYear();
		};

		$scope.translateReady = false;

		$rootScope.$on('$translateChangeSuccess', function () {
			$scope.translateReady = true;
		});
	});
})();