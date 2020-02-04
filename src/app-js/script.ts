// import * as angular from "angular";
// export const baseapp = angular.module('RoutingApp', ['ngRoute'])
// 	.config( ['$routeProvider', function($routeProvider) {
// 		$routeProvider
// 			.when('/a1/first', {
// 				template: '<h2>AngularJS Routing Example template 1 : {{msg}}</h2>',
// 				controller : "londonCtrl"
// 			})
// 			.when('/a1/second', {
// 				template: '<h2>AngularJS Routing Example template 2: <br/>The hexadecimal value of 255 is: {{hex}}</h2>',
// 				controller : "convertorController"
// 			})
// 			.otherwise({
// 				redirectTo: '/'
// 			});
// 	}]	
// 	);
	import * as angular from 'angular';
	import 'angular-route';
	import { $locationShim } from '@angular/common/upgrade';
    import { downgradeInjectable } from '@angular/upgrade/static';

	const appName = 'RoutingApp';
	
	export const baseapp = angular.module(appName, [
	  'ngRoute'
	])
	.config(['$routeProvider', '$locationProvider',
	  function config($routeProvider, $locationProvider) {
		//$locationProvider.html5Mode(true);
	
		$routeProvider.
		when('/a1/first', {
							template: '<h2>AngularJS Routing Example template 1 : {{msg}}</h2>',
							controller : "londonCtrl"
						})
						.when('/a1/second', {
							template: '<h2>AngularJS Routing Example template 2: <br/>The hexadecimal value of 255 is: {{hex}}</h2>',
							controller : "convertorController"
						}).
		  otherwise({
			template: 'Cant route'
		  });
	  }])
	// ).run( function($rootScope, $location) {

	// 	// register listener to watch route changes
	// 	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
	// 	//   if ( $rootScope.loggedUser == null ) {
	// 	// 	// no logged user, we should be going to #login
	// 	// 	if ( next.templateUrl != "partials/login.html" ) {
	// 	// 	  // not going to #login, we should redirect now
	// 	// 	  $location.path( "/login" );
	// 	// 	}
	// 	//   }  
	// 	console.log("log "+event);       
	// 	})
	// })
	.factory('$location', downgradeInjectable($locationShim));
	
	export function bootstrap(el: HTMLElement) {
	  return angular.bootstrap(el,  [appName]);
	}