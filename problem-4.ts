// problem - 4
class Person {
    constructor(private name: string,
        private age: number) {
            
    }
    
    getDetails(): string {
        return `The person name is: ${this.name} age is: ${this.age}`;
    }
};

const personInfo = new Person("Johny", 209);

console.log(personInfo);

personInfo.getDetails

// extended class
class Student extends Person {
    constructor(name: string, age: number,private grade: number,) {
        super(name, age);
    }

    getGrade(){
        return this.grade;
    }
}

const student1 = new Student("john", 20, 5.5);
console.log(student1.getGrade())