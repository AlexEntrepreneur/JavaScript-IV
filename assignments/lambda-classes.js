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
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  changeGrade(student) {
    let random = (Math.floor((Math.random()*2)+1));
    if (random <= 1 && student.grade < 70) {
      student.grade -= 5;
      return `${student.name}'s grade changed to ${student.grade}`;
    }
    else if(random > 1 && student.grade < 70) {
      student.grade += 5;
      return `${student.name}'s grade changed to ${student.grade}`;
    }
    else {
      return `${student.name} has already graduated!`;
    }
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade || 50;
    this.graduated = attributes.graduated || false;
  }
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if (this.grade >= 70) {
      this.graduated = true;
      return `You champion! You've done it, you've graduated!`;
    }
    else {
      return `Keep trying, you're almost there!`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel at handy times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}
