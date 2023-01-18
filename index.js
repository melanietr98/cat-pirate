class Cat {
  //constructor will create our properties
  constructor(color, name, gender) {
    this.color = color;
    this.name = name;
    this.gender = gender;
  }
  //method 1
  sleep() {
    console.log(`${this.name} likes to sleep a lot`);
  }
  //method 2
  play() {
    console.log(`${this.name} likes to play a lot`);
  }
  //method 3
  catInfo() {
    console.log(`The cat's name is ${this.name} and is ${this.color} and is a ${this.gender}`);
  }

} // end of our class

const Cat1 = new Cat('orange', 'Garfield', 'Male');
const Cat2 = new Cat('gray', 'Tin Tin', 'Female');

// console.log(Cat1, Cat2);

// Cat1.sleep();
// Cat1.play();
// Cat1.catInfo();


// Cat2.sleep();
// Cat2.play();
// Cat2.catInfo();

//EXCERSIZE 2
class Pirate {
  //constructor to create the properties
  constructor(name, bounty, catchPhrase, duty) {
    this.name = name;
    this.bounty = bounty;
    this.catchPhrase = catchPhrase;
    this.duty = duty;
  }
  //method 1
  pirateInfo() {
    console.log(`The Pirate's name is ${this.name} and like to say ${this.catchPhrase} and has a bounty of ${this.bounty} gold shillings`);
  }
  //method2
  steal() {
    console.log(`${this.name} the Pirate likes to steal gold`);
  }
//method3
  work() {
    console.log(`${this.name} the Pirate is the ${this.duty}`); 
  }
}

//create 3 Pirate objects from the Pirate class
const Pirate1 = new Pirate('Gold Roger', 1000000000,'Aaarrrggghhh','captian');
const Pirate2 = new Pirate('Jack Sparrow',5, 'Yaaaayyyy','cleaning');
const Pirate3 = new Pirate('Luffy',5000000000,'Im going to be King of the pirates','1st mate');

//create 1 array for a ship
const jollyRoger = [Pirate1,Pirate2,Pirate3];
const blackPearl = [Pirate1,Pirate2,Pirate3];

//jollyRoger.forEach((object) => {
  // value = this.name;
 // console.log(object.name)
//});

console.log(jollyRoger);
console.log(blackPearl)


