newspaper.controller("ReportersCtrl", function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    debugger;
    $scope.beat.reporters.push({ name: $scope.reporterName });
    $scope.reporterName = null;
  }
});
