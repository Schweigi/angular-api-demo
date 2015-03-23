(function() {
    'use strict';

	var app = angular.module('myapp', ['angular-api', 'plugin-alert']);

	app.controller('MainCtrl', ['$scope', '$log', 'Api', function ($scope, $log, Api) {
		var submitForm = function(message) {
			$log.info($scope.message);
			$scope.api.form.raise.submitted(message);
		};

		var clearForm = function(message) {
			$scope.message = '';
			$scope.api.form.raise.cleared();
		};

		$scope.submit = function($event) {
			submitForm($scope.message);
		};

		$scope.clear = function($event) {
			clearForm();
		};

		$scope.api = new Api(this, $scope.$id);
		$scope.api.registerEvent('form', 'submitted');
		$scope.api.registerMethod('form', 'submit', submitForm);
		$scope.api.registerEvent('form', 'cleared');
		$scope.api.registerMethod('form', 'clear', clearForm);
	}]);
})();