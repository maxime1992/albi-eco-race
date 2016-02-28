(() => {
	/**
	 * @ngdoc controller
	 * @name app.controller:generalController
	 * @description
	 * A It contains by default the active tab view and the language selected
	 */
	app.controller('generalController', ($rootScope, $scope, $location, $state, $translate, langFactory) => {
		/**
		* @ngdoc method
		* @name isActive
		* @methodOf app.controller:generalController
		* @description
		* Return the location url of the open tab .
		* @returns {Object} return the location path of the active tab
		*/
		$scope.isActive = (viewLocation) => {
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
		$scope.changeLanguageTo = (lang) => {
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
		$scope.getLanguage = () => {
			return $translate.use();
		};

		// when was the site created
		$scope.startYear = 2016;

		// which year is it ?
		// http://knowyourmeme.com/memes/what-year-is-it
		$scope.whatYearIsIt = () => {
			return new Date().getFullYear();
		};

		$scope.translateReady = false;

		$rootScope.$on('$translateChangeSuccess', () => {
			$scope.translateReady = true;
		});
	});
})();
