class School {
    constructor(name, numOfStudents, numOfTeachers) {
        this._name = name;
        this._numOfStudents = numOfStudents;
        this._numOfTeachers = numOfTeachers;
    }
    admitNewStudent() {
        this._numOfStudents++;
    }
}
class MiddleSchool extends School {
    constructor(name, numOfStudents, numOfTeachers, prestige) {
        super(name, numOfStudents, numOfTeachers);
        this._prestige = prestige;
    }
}
class HighSchool extends School {
    constructor(name, numOfStudents, numOfTeachers, isClose) {
        super(name, numOfStudents, numOfTeachers);
        this._isClose = isClose;
    }
    openSchool() {
        if (this._isClose) {
            this._isClose = false;
        } else {
            console.log("School already opened!")
        }
    }
}

//testing
let patriotCharter = new School('Patriot Charter School', 200, 50);
let riverbank = new MiddleSchool('Riverbank Middle School', 300, 60, true);
let winterville = new HighSchool('Winterville High School', 500, 100, true)
console.log(patriotCharter);
console.log(riverbank);
console.log(winterville);

//call the method from the parent class to ensure it works as expected
patriotCharter.admitNewStudent();
riverbank.admitNewStudent();
winterville.admitNewStudent();

//log the objects after calling .admitNewStudent() to verify it worked as intended
console.log(patriotCharter);
console.log(riverbank);
console.log(winterville);

//call .openSchool()
winterville.openSchool()

//check that .openSchool() when _isClose == true works as expected
console.log(winterville);

//check that .openSchool() when _isClose == false works as expected
winterville.openSchool();