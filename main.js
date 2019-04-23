let hotel = {
    name : 'abcd',
    rooms : 120,
    booked : 77,
    
    checkAvaility : function(){
        var currentRoom = this.rooms - this.booked;
        return currentRoom;
    }
};  

let text = document.getElementById('name');
text.textContent = hotel.checkAvaility();

var hotel2 = new Object();
hotel2.name = 'HiDave';
hotel2.rooms = 130;
hotel2.booked = 100; 

let text2 = document.getElementById('name2');
text2.textContent = hotel2.name;