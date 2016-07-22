var myodule=angular.module('MyCssModule',[]);
myodule.controller('CSSCtrl',['$scope',
    function ($scope) {
        $scope.color="red";
        $scope.setGreen=function(){
            $scope.color="green";
        }
    }
])