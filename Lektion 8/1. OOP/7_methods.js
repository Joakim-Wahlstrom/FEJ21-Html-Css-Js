class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
    this.gearbox = 0;
  }

  gearUp() {
    this.gearbox ++
    console.log(`Shifted gear to ${this.gearbox}`);
    return this;
  }

  gearDown() {
    this.gearbox --
    console.log(`Shifted gear to ${this.gearbox}`);
    return this;
  }

}


const fiat = new Car('punto', 'pink');

fiat.gearUp().gearUp().gearUp().gearDown()


// const test = fiat.gearUp();
// console.log(test);