angular.module('starter.services', [])

// .factory('Chats', function() {
//   // Might use a resource here that returns a JSON array
//
//   // Some fake testing data
//   var chats = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'img/ben.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'img/max.png'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'img/adam.jpg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'img/perry.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'img/mike.png'
//   }];
//
//   return {
//     all: function() {
//       return chats;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
//         if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     },
//   };
// })

.factory('HousekeepingData',function(){
  var rooms = [{
    room_number:201,
    room_occupancyStatus:'occupied',
    room_cleaningStatus: 'dirty',
    room_sheetStatus:"Changed Today",
    guest_name:'John',
    guest_checkIn:'10/01/2016',
    guest_checkOut:'22/01/2016',
    room_OutOfService: false,
    room_amenities: {
        beer: 0,
        juice: 0,
        crisp: 0,
        pringles: 0,
        peanuts: 0,
        cashew: 0,
        whiskey: 0,
        vodka:0
    }
  },{
    room_number:202,
    room_occupancyStatus:'occupied',
    room_cleaningStatus: 'clean',
    room_sheetStatus: "dirty",
    guest_name:'Minda',
    guest_checkIn:'11/01/2016',
    guest_checkOut:'22/01/2016',
    room_OutOfService: false,
    room_amenities: {
        beer: 0,
        juice: 0,
        crisp: 0,
        pringles: 0,
        peanuts: 0,
        cashew: 0,
        whiskey: 0,
        vodka: 0
    }
  },{
      room_number: 203,
      room_occupancyStatus: 'unoccupied',
      room_cleaningStatus: 'clean',
      room_sheetStatus: "dirty",
      guest_name: 'Minda',
      guest_checkIn: '11/01/2016',
      guest_checkOut: '22/01/2016',
      room_OutOfService: false,
      room_amenities: {
          beer: 0,
          juice: 0,
          crisp: 0,
          pringles: 0,
          peanuts: 0,
          cashew: 0,
          whiskey: 0,
          vodka: 0
      }
  }];

  return{
    all:function(){
      return rooms;
    },
    get:function(roomNum){
      for(var i=0; i<rooms.length; i++){
        if(rooms[i].room_number == parseInt(roomNum)){
          return rooms[i];
        }
      }
      return null;
    },
    getAllOccupied: function () {
        var occupiedRoomsArray = [];
        for (var i = 0; i < rooms.length; i++) {
            if (rooms[i].room_occupancyStatus === 'occupied') {
                occupiedRoomsArray.push(rooms[i]);
            }
        }
        return occupiedRoomsArray;
    }
  }
})
