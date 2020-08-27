
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    speak(){
        console.log(`My name is${this.name},age ${this.age}.`)
    }
}
let li = new Person('李二四',21)
li.speak()
