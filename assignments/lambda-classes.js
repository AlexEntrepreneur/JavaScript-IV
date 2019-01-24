// CODE here for your Lambda Classes

class Person {
  constructor({ name, age, location, gender }) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject = 'Cool Stuff') {
    console.log(`Today we are learning about ${subject}!`);
  }
  grade({ student, subject }) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}
