const person = {
    firstname: 'Dave', 
    lastname: 'Abbott', 
    age: 25, 
    sayHello(){
        console.log(`Hello, my name is ${this.firstname}.`);
    }
}

person.sayHello();