const prompt = require("prompt-sync")();

const radius = 5;
const PI= 3.1415;
const areaOfCircle=PI*radius*radius;
console.log(`The Area available for plants to grow : ${areaOfCircle}`);

const spaceForOnePlant = 0.8;
// Initial number of plants - 20 plants 
let noOfPlants =20;

let spaceOccupied = noOfPlants*spaceForOnePlant;

console.log(`Area occupied by 20 plants on day 1 is ${spaceOccupied}`)

let week = prompt("Enter the week number ");

for(let i=0;i<week;i++){
noOfPlants= noOfPlants*2;
}
console.log(`Totatl no of plants after ${week} is ${noOfPlants}`);
// latest space occupied 
spaceOccupied=noOfPlants*spaceForOnePlant;

console.log(`Latest space occupied after ${week} week is ${spaceOccupied}`);

let pruneCutOff = (areaOfCircle * 80) / 100;
console.log(pruneCutOff);

let monitorCutOff = (areaOfCircle*50)/100;
console.log(monitorCutOff);

if(spaceOccupied < monitorCutOff){
    console.log("Plant more !!");
} else if(spaceOccupied > monitorCutOff && spaceOccupied < pruneCutOff){
    console.log("It's time to monitor!!");

}else{
console.log("Time to Prune!!")
}



















