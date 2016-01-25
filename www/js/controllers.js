angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, HousekeepingData, $state) {
    $scope.roomsData = HousekeepingData.all();
    console.log($scope.roomsData);
    $scope.gotoRoom = function () {
        $state.go('/roomdetails');
    }
})

.controller('ChatsCtrl', function ($scope, Chats, HousekeepingData) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.roomsData = HousekeepingData.getAllOccupied();

    console.log(HousekeepingData.getAllOccupied());
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope,$state) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.confirmLogout = function () {
        $state.go('login')
    }
})

.controller('LoginController', ['$scope', '$state', '$ionicLoading', '$timeout', function ($scope, $state, $ionicLoading, $timeout) {

    console.log('Login page');
    $scope.checkCredential = function () {
        $ionicLoading.show({
            template: "<p>Please Wait</p>"
        });
        $timeout(function () {
            $ionicLoading.hide();
            $state.go('tab.home');
        })
    }

}])

.controller("RoomDetailController", ["$scope", '$stateParams', 'HousekeepingData', function ($scope, $stateParams, HousekeepingData) {

    var roomNumber = $stateParams.roomNum;
    $scope.roomData = HousekeepingData.get(roomNumber);
    console.log($scope.roomData);

}])

.controller("RoomOccupiedController", ["$scope", '$stateParams', 'HousekeepingData', function ($scope, $stateParams, HousekeepingData) {

    var roomNumber = $stateParams.roomNum;
    $scope.name = 'rajesh';
    $scope.roomData = HousekeepingData.get(roomNumber);
    $scope.roomAmenities = $scope.roomData.room_amenities;

    $scope.increaseAmenity = function (key) {
        $scope.roomAmenities[key] += 1;
        console.log($scope.roomAmenities[key]);
    }

}])
