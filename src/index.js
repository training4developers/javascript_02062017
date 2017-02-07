// class Person {

//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

// }

// class Student extends Person {

//     constructor(studentId, firstName, lastName) {
//         super(firstName, lastName);
//         this.studentId = studentId;
//     }

//     getRecordInfo() {
//         return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
//     }

// }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

function Student(studentId, firstName, lastName) {
    this._super.call(this, firstName, lastName);
    this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getRecordInfo = function() {
    return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
};


const s = new Student(1, 'Bob', 'Smith');
console.log(s.getRecordInfo());
console.log(s.getFullName());


