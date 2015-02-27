var newspaper = angular.module("newspaper", ["ui.router"]);

newspaper.config(function($stateProvider) {
  $stateProvider.state("beats", {
    url: "",
    templateUrl: "partials/beats.html",
    controller: "BeatsCtrl"
  });
  $stateProvider.state("beats.reporters", {
    url: "/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: "ReportersCtrl"
  });
  $stateProvider.state("beats.reporters.info", {
    url: "/:reporterId",
    templateUrl: "partials/beats.reporters.info.html",
    controller: "ReportersCtrl"
  });
});
