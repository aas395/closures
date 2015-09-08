(function() {
	var app = angular.module('testApp', ['ui.sortable']);

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
			firstName: '',
			lastName: ''
		};

		$scope.addPerson = function() {
			$scope.people.push({
				firstName: $scope.person.firstName,
				lastName: $scope.person.lastName
			});

			$scope.person.firstName = '';
			$scope.person.lastName = '';
		};

		$scope.removePerson = function(person) {
			var index = $scope.people.indexOf(person);
			$scope.people.splice(index, 1);
		};
		
	}]);
})();