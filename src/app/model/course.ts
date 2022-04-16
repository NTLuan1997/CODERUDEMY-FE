export class Course {
    "_id": String;
    "courseName": String;
    "author": String;
    "type": String;
    "unit": Number;
    "createDate": Date;
    "updateDate": Date;
    "description": String;
    "thumbnail": String
}

class CourseInformation {
    course: Course = new Course();

    constructor() { }

    getCourse() {
        return this.course;
    }

    setCourse(course: Course) {
        localStorage.setItem("courseCurrent", JSON.stringify(course));
        this.course = course;
    }
}

export const courseInformation = new CourseInformation();