class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.hypoAllergenic = false
    }

    updateHypo(){
        this.hypoAllergenic = true
    }

    greeting(){
        console.log("HI, my name is ${this.name} and I am an ${this.age} year old ${this.breed}")
    }
}

const dog1 = new Dog('Buddy', 'golden retriever', 5)
const dog2 = new Dog('Alaska', 'Cockapoo', 3)
dog2.updateHypo()

//console.log(dog1)
//console.log(dog2)

dog1.greeting()

class Puppy extends Dog {
    constructor(name, breed, age, color){
        super(name, breed, age)

        this.color = color;
        this.trainingLevel = 0
    }

    updateTraining(num){
        this.trainingLevel += num
    }
}

const puppers = new Puppy('Kevin', 'York Shire Terrior', .6, 'brown/black')
const bubs = new Puppy('Wanda', 'Irish Setter', 1, 'golden/brown')

puppers.updateHypo()

bubs.updateTraining(1)

console.log(puppers)
puppers.greeting()

console.log(bubs)
bubs.greeting()
