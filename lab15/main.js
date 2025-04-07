class Person {
    constructor(name) {
      this.name = name;
    }
  
    getInfo() {
      return `Ім'я: ${this.name}`;
    }
  
    logToOutput(message) {
      const outputDiv = document.getElementById('output');
      const p = document.createElement('p');
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  }
  
  class Course {
    constructor(name) {
      this.name = name;
      this.students = [];
    }
  
    addStudent(student) {
      this.students.push(student);
      // Тепер використовуємо метод logToOutput, успадкований від Person (через Student)
      student.logToOutput(`${student.getInfo()} додано до курсу "${this.name}".`);
    }
  
    logToOutput(message) {
      const outputDiv = document.getElementById('output');
      const p = document.createElement('p');
      p.textContent = message;
      outputDiv.appendChild(p);
    }
  }
  
  class Teacher extends Person {
    constructor(name) {
      super(name);
      this.courses = [];
    }
  
    addCourse(course) {
      this.courses.push(course);
      // Тепер використовуємо метод logToOutput, успадкований від Person
      this.logToOutput(`${this.getInfo()} веде курс "${course.name}".`);
    }
  }
  
  class Student extends Person {
    constructor(name) {
      super(name);
      this.courses = [];
    }
  
    enrollCourse(course) {
      this.courses.push(course);
      course.addStudent(this);
    }
  
    viewCourses() {
      if (this.courses.length > 0) {
        this.logToOutput(`${this.getInfo()} навчається на курсах: ${this.courses.map(course => `"${course.name}"`).join(', ')}.`);
      } else {
        this.logToOutput(`${this.getInfo()} не записаний на жоден курс.`);
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const outputDiv = document.getElementById('output');
      const h2 = document.createElement('h2');
      h2.textContent = "Демонстрація роботи системи управління курсами";
      outputDiv.appendChild(h2);
  
      // Створення тестових об'єктів
      const teacher1 = new Teacher("Іван Петренко");
      const student1 = new Student("Марія Сидоренко");
      const student2 = new Student("Петро Іванов");
      const course1 = new Course("Основи програмування на JavaScript");
      const course2 = new Course("Алгоритми та структури даних");
  
      // Виведення інформації про об'єкти
      teacher1.logToOutput(teacher1.getInfo());
      student1.logToOutput(student1.getInfo());
  
      // Додавання курсів викладачу
      teacher1.addCourse(course1);
      teacher1.addCourse(course2);
  
      // Запис студентів на курси
      student1.enrollCourse(course1);
      student1.enrollCourse(course2);
      student2.enrollCourse(course1);
  
      // Перегляд курсів студентами
      student1.viewCourses();
      student2.viewCourses();
  
      // Додаткова інформація (список студентів на курсі)
      const h3_1 = document.createElement('h3');
      h3_1.textContent = `Студенти курсу "${course1.name}":`;
      outputDiv.appendChild(h3_1);
      course1.students.forEach(student => {
          student.logToOutput(`- ${student.getInfo()}`);
      });
  
      const h3_2 = document.createElement('h3');
      h3_2.textContent = `Студенти курсу "${course2.name}":`;
      outputDiv.appendChild(h3_2);
      course2.students.forEach(student => {
          student.logToOutput(`- ${student.getInfo()}`);
      });
  });