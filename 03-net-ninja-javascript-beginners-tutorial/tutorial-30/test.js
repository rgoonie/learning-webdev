/*
    I don't think this works... Keep getting errors...
*/

var Car = funciton(maxSpeed, driver) {

    this.maxSpeed = maxSpeed,
    this.driver = driver,
    this.drive = funciton(speed, time){
        console.log("the distance driven was " + (speed * time));
    },
    this.logDriver = function(){
        console.log(this.driver);
    }
}

var myCar = new Car(20, "Rajeev");
myCar.logDriver();