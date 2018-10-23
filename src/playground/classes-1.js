class Person {
    constructor(name  = 'Anonymous') {
        this.name = name; 
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name + '!'
        return `Hi, I am ${this.name}`
    }

}

const me = new Person('Freddy')
console.log(me.getGreeting()) 

const other = new Person();