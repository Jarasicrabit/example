var cars = [
    { type: 'truck',  name: 'f-150' },
    { type: 'sport', name: 'corvette' }
];

var favorite = cars.find(function(car) {
    return car.type === sport;
});

console.log(favorite);