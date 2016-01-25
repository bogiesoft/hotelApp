// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(['$urlMatcherFactoryProvider', function ($urlMatcherFactory) {

    $urlMatcherFactory.type('room',
    {
        name: 'room',
        decode: function (val) { return typeof (val) === "string" ? JSON.parse(val) : val; },
        encode: function (val) { return JSON.stringify(val); },
        equals: function (a, b) {
            return this.is(a) && this.is(b)
                && a.status === b.status && a.type == b.type
        },
        is: function (val) {
            return angular.isObject(val)
                && "status" in val && "type" in val
        },
    })

}]);

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login',{
      url:'/login',
      templateUrl:'templates/login.html',
      controller:'LoginController'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'DashCtrl'
      }
    }
  })

      .state('home', {
          url: "/home",
          parent: "tab",
          views: {
              'home-tab': {
                  templateUrl: 'templates/tab-home.html',
                  controller: 'DashCtrl'
              }
          }
      })

    .state('home.facts', {
        url: "/facts/:roomNum",
        views: {
            'tab-home@tab': {
                templateUrl: "templates/tab-roomdetail.html",
                controller:"RoomDetailController"
            }
        }
    })

  .state('chats', {
      url: '/chats',
      parent: "tab",
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
  })

    .state('tab.occupied-detail', {
        url: "/occupieddetail/:roomNum?room",
        params:{
            room: {
                array:true
            }
        },
        views: {
            'tab-chats@tab': {
                templateUrl: "templates/room-occupieddetail.html",
                controller: "RoomOccupiedController"
            }
        }
    })



  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');

});
