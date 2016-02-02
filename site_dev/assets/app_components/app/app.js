var app = angular.module('albi-eco-race', ['ngMockE2E', 'ngAnimate', 'ui.router', 'ngSanitize', 'ui.bootstrap', 'pascalprecht.translate', 'angular-loading-bar', 'afkl.lazyImage', 'timer', 'angular-parallax', 'anim-in-out']);
var languages = ['en', 'fr'];

// routes configuration
app.config(['$compileProvider', '$httpProvider', '$locationProvider', '$stateProvider', '$provide', '$urlRouterProvider', '$translateProvider', function ($compileProvider, $httpProvider, $locationProvider, $stateProvider, $provide, $urlRouterProvider, $translateProvider) {
	// enable debug for dev, changed to false by grunt when going on production
	$compileProvider.debugInfoEnabled(true);

	// enable http caching
	$httpProvider.defaults.cache = true;

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

	.state('rewards', {
		url: '/rewards',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/rewards.html'}
		}
	})

	.state('rules', {
		url: '/rules',
		views: {
			mainView: {templateUrl: 'assets/app_components/app/views/rules.html'}
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
		url: '',
		controllerProvider: ['$state', function ($state) {
			// go to default state --> 'home'
			$state.go('home');
		}]
	});

	// load languages from json files (when needed)
	$translateProvider.useStaticFilesLoader({
		prefix: 'assets/app_components/app/languages/',
		suffix: '.json'
	});

	// handle multiple locales for one language
	$translateProvider.registerAvailableLanguageKeys(languages, {
		'en_*': 'en',
		'fr_*': 'fr'
	});

	// define sanitize strategy and prefered language
	$translateProvider.useSanitizeValueStrategy(null);

	// $translateProvider.preferredLanguage(defaultLang);
	$translateProvider.determinePreferredLanguage();
}]);

app.run(['$rootScope', '$location', function ($rootScope, $location) {
	// start google analytics only if this is the prod env
	if ($location.host().indexOf('albiecorace') >= 0) {
		// at the run, create the app
		ga('create', 'UA-72750136-1', 'auto');

		// everytime the user change a page
		$rootScope.$on('$stateChangeSuccess', function(){
				// push the page to GA
				ga('send', 'pageview', $location.path());
		});
	}
}]);
