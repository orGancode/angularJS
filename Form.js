var userInfoModule= angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope', function ($scope) {
  $scope.userInfo={
    email:'athigh@163.com',
    password:'12345678',
    atuoLogin:true
  };
  $scope.getFormData=function(){
    console.log($scope.userInfo);
  }
  $scope.setFormData=function(){
    $scope.userInfo={
      email:'an@uiad.com',
      password:'1234123412341',
      autoLogin:false
    }
  }
  $scope.restForm=function(){
    $scope.userInfo={
      email:'',
      password:'',
      autoLogin:false
    }
  }
}])