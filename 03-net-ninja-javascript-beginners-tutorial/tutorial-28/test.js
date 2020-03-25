var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Rajeev"

myCar.drive = function() {
    console.log("The car is driving");
};

myCar.drive();



var myCarTwo = {

    maxSpeed: 70,
    driver: "The Driver",

    drive: function(){
        console.log("The car is now drving");
    }

};