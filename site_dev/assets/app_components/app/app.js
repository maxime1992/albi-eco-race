var app = angular.module('albi-eco-race', ['ngMockE2E', 'ui.router', 'angular-loading-bar', 'afkl.lazyImage']);

// routes configuration
app.config(['$compileProvider', '$httpProvider', '$locationProvider', '$stateProvider', '$provide', '$urlRouterProvider', function ($compileProvider, $httpProvider, $locationProvider, $stateProvider, $provide, $urlRouterProvider) {
	// enable debug for dev, changed to false by grunt when going on production
	$compileProvider.debugInfoEnabled(true);

	// enable http caching
	$httpProvider.defaults.cache = true;

	// default redirection :
	// redirect to 'default' state to keep user language
	// and redirect to :lang/home
	$stateProvider
	.state('home', {
		url: '/home',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/home.html'}
		}
	})

	.state('challenge', {
		url: '/challenge',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/challenge.html'}
		}
	})

	.state('technic', {
		url: '/technic',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/technic.html'}
		}
	})

	.state('registration', {
		url: '/registration',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/registration.html'}
		}
	})

	.state('informations', {
		url: '/informations',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/informations.html'}
		}
	})

	.state('contact', {
		url: '/contact',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/contact.html'}
		}
	})

	// default redirection :
	// redirect to home with the current language
	.state('default', {
		url: '/default',
		controllerProvider: ['$state', function ($state) {
			// go to default state --> 'home'
			$state.go('home');
		}]
	});
}]);
