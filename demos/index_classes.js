class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;

        this.getFullName = this.getFullName.bind(this);
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    static create(fullName) {

        const nameParts = fullName.split(' ');
        return new Person(nameParts[0], nameParts[1]);

    }

    getFullName() {

        return `${this.firstName} ${this.lastName}`;
    }

}

class Student extends Person {

    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }

    getRecordInfo() {
        return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
    }

    getFullName() {
        return super.getFullName().toUpperCase();
    }

}

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.create = function(name) {
//     const nameParts = name.split(' ');
//     return new Person(nameParts[0], nameParts[1]);
// };

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName;
// };

// function Student(studentId, firstName, lastName) {
//     this._super.call(this, firstName, lastName);
//     this.studentId = studentId;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype._super = Person;

// Student.prototype.getRecordInfo = function() {
//     return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
// };


const s = new Student(1, 'Bob', 'Smith');
console.log(s.getRecordInfo());
console.log(s.getFullName());

const p = Person.create('Jenny Smith');
console.log(p.getFullName());


