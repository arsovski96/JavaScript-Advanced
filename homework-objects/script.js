console.log('Homework')
// Create 3 object templates. Academy, Student and Subject. The structure should be: Academy
//Academy
// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

//Subject
// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

//Student
// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

let academy = {
    name: 'Academy for programming',
    students:  ['Bob','John','Mia'],
    subjects: ['JS','cSharp','HTML'],
    start: '01.10.2021',
    end: '01/10/2022',
    numberOfClasses: 3*10,
    printStudents: function() {
        return this.students
    },
    printSubject: function(){
        return this.subjects
    }
    
}

console.log(academy)
// console.log(academy.printStudents())
// console.log(academy.printSubject())

let subject = {
    title: 'CSS',
    numberOfClasses: 10,
    isElective: true,
    Academy: academy,
    Students: ['Ana','Tim','Gio'],
    OverrideClasses: function(num){
            if (num >= 3) {
              this.numberOfClasses = num;
            }
            return num
          }
    }
subject.OverrideClasses(25)
console.log(subject)

let student = {
    firstName: 'Ivan',
    lastName: 'Arsovski',
    age: 26,
    completedSubjects: [],
    academy: null,
    currentSubject: null,
    startAcademy: function(){
        student.academy = academy
    },
    startSubject: function(subject){
        if(this.academy){
            if(this.academy.subjects.includes(subject)){
                this.currentSubject = subject
            }else {
                console.log('Subject not found')
            }
        }else {
            console.log('Error: Student does not have an academy')
        }
    }

}

console.log(student)
student.startAcademy()
student.startSubject('JS')

// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

student.startAcademy = () => academy.students.push(student)
student.startAcademy()
//ili dokolku treba samo novo ime da se dodade vo arrayot
// //function newStudent(stud){
//     academy.students.push(stud)
// }
// newStudent('George')

student.startSubject = (newSubject) => {
    subject.Students.push(student)
    student.completedSubjects.push(student.currentSubject)
    student.currentSubject = newSubject
}

student.startSubject('node.JS')
student.startSubject('React')
student.startSubject('Angular')

