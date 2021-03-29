/* 
  POLYMORPHISM - Arv mellan klasser
*/

class Monster {
  constructor(name) {
    this.name = name
  }

  attack() {
    console.log(`The monster ${this.name} is hitting you!`)
  }
}

// const monster = new Monster('monster');

// monster.attack()


class FireMonster extends Monster {
  constructor(name) {
    super(name);
  }

  attack() {
    super.attack()
    console.log(`${this.name} is also throwing a fireball at you.`)
  }
}

class WaterMonster extends Monster{
  constructor(name) {
    super(name)
  }

  attack2() {
    console.log(`The monster ${this.name} is sending a large wave of water right at you`)
    super.attack()
  }
}

class StoneMonster extends Monster {}


const fm = new FireMonster('Blazor');
const wm = new WaterMonster('Wateruz');
const sm = new StoneMonster('Stoneface');

// fm.attack()
// wm.attack()
// sm.attack()

wm.attack()
wm.attack2()