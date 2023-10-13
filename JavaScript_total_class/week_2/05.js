//일급객체로써의 함수 (2)
const person = {
    name : 'Json',
    age:31,
    sayHello : function(){
        console.log(`Hello, My name is ${this.name}`)
    },
    sayBye:() =>{
        console.log(`Bye ${this.name}`)
    }
}
person.sayHello()