(function() {
	var app = angular.module('testApp', ['ui.sortable']);

	app.controller('TestCtrl', ['$scope', function($scope) {

		$scope.people = [
			{firstName: 'Lisa', lastName: 'Wells', likes: 0},
			{firstName: 'Sheri', lastName: 'Grossman', likes: 0},
			{firstName: 'Thomas', lastName: 'Lutazi', likes: 0},
			{firstName: 'Michael', lastName: 'Trollan', likes: 0},
			{firstName: 'Ben', lastName: 'Sayeg', likes: 0},
			{firstName: 'Alisha', lastName: 'Kassam', likes: 0}
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

		$scope.removePerson = function() {
			var index = $scope.people.indexOf(this.person);
			$scope.people.splice(index, 1);
		};

		$scope.addLike = function() {
			this.person.likes++;
		};

		// a user should be able to click a button that
		// will store up and down votes

		//add an upvote counter and button
			//add html for up counts
			//add upvote button

			//add handlers for up vote clicks
			//add model for up votes
			

	}]);
})();