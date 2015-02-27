newspaper.controller("BeatsCtrl", function($scope, BeatsFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});
