angular.module('controller',[])
        .controller('main',['$scope','constValue','$timeout','value','$http',function($scope,constValue,$timeout,value,$http){
            console.log('controller')
            $scope.constValue = constValue
            $scope.bbb = value
            
            $timeout(function(){
                value.userName = 'lisi'
            },3000)
            
        }])