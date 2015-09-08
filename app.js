(function() {
	var app = angular.module('testApp', []);

	app.controller('TestCtrl', ['$scope', function($scope) {

		$scope.people = [
			{firstName: 'Lisa', lastName: 'Wells'},
			{firstName: 'Sheri', lastName: 'Grossman'},
			{firstName: 'Thomas', lastName: 'Lutazi'},
			{firstName: 'Michael', lastName: 'Trollan'},
			{firstName: 'Ben', lastName: 'Sayeg'},
			{firstName: 'Alisha', lastName: 'Kassam'}
		];

		$scope.person = {
			name: 'You'
		};
	}]);
})();