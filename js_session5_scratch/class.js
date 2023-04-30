class Students{
    constructor(name) {
        this.name = name;
    }

    registerStud() {
        return "Student registered successfully";
    }

    changeNameStud(argName) {
        this.name = argName;
    }

    getNameStud() {
        return this.name;
    }
}

class SpecialStudents extends Students{
    setSpecialStud() {
        
    }
}

let student = new Students("daaaaavid");
console.log(student.getNameStud());
console.log(student.registerStud());
student.changeNameStud("david");
console.log(student.getNameStud());

let student1 = new SpecialStudents("yaaaar");
console.log(student1.getNameStud());
console.log(student1.registerStud());
student.changeNameStud("yaaaaaaaar");
console.log(student1.getNameStud());

// Start of Targil

class Users{
    constructor(name) {
        this.name = name;
    }
    constructor(UserType) {
        this.UserType = type;
    }

    registerUser() {
        return "User registered successfully";
    }

    removeUser() {
        delete this.name;
    }
}