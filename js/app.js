'use strict';

var app = angular.module('albi-eco-race', ['ngMockE2E', 'ngAnimate', 'ui.router', 'anim-in-out', 'ui.bootstrap', 'ngSanitize', 'pascalprecht.translate', 'angular-loading-bar', 'rx', 'timer']);
var languages = ['en', 'fr'];

(function () {
	app.config(function ($compileProvider, $httpProvider, $locationProvider, $stateProvider, $provide, $urlRouterProvider, $translateProvider) {
		$compileProvider.debugInfoEnabled(true);

		$httpProvider.defaults.cache = true;

		$stateProvider.state('home', {
			url: '/home',
			views: {
				mainView: { templateUrl: './html/views/home.html' }
			}
		}).state('challenge', {
			url: '/challenge',
			views: {
				mainView: { templateUrl: './html/views/challenge.html' }
			}
		}).state('rules', {
			url: '/rules',
			views: {
				mainView: { templateUrl: './html/views/rules.html' }
			}
		}).state('registration', {
			url: '/registration',
			views: {
				mainView: { templateUrl: './html/views/registration.html' }
			}
		}).state('informations', {
			url: '/informations',
			views: {
				mainView: { templateUrl: './html/views/informations.html' }
			}
		}).state('contact', {
			url: '/contact',
			views: {
				mainView: { templateUrl: './html/views/contact.html' }
			}
		});

		$urlRouterProvider.otherwise('/home');

		// load languages from json files (when needed)
		$translateProvider.useStaticFilesLoader({
			prefix: './languages/',
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
	});

	app.run(function ($rootScope, $location) {
		// start google analytics only if this is the prod env
		if ($location.host().indexOf('albiecorace') >= 0) {
			// at the run, create the app
			ga('create', 'UA-72750136-1', 'auto');

			// everytime the user change a page
			$rootScope.$on('$stateChangeSuccess', function () {
				// push the page to GA
				ga('send', 'pageview', $location.path());
			});
		}
	});
})();