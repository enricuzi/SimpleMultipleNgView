angular.module('myapp', ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/view1");

        $stateProvider
            .state('view1', {
                url: "/view1",
                views: {
                    viewTop: {
                        templateUrl: "partials/view1/view1.html"
                    },
                    viewBottom: {
                        templateUrl: "partials/view1/view1.list.html",
                        controller: function($scope){
                            $scope.items = ["A", "List", "Of", "Items"];
                        }
                    }
                }
            })
            .state('view2', {
                url: "/view2",
                views: {
                    viewTop: {
                        templateUrl: "partials/view2/view2.html"
                    },
                    viewBottom: {
                        templateUrl: "partials/view2/view2.list.html",
                        controller: function($scope){
                            $scope.things = ["A", "Set", "Of", "Things"];
                        }
                    }
                }
            });
    });