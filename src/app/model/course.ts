import { Course } from "./model";

export class courseCommon {
    constructor() { }
}
class CourseInformation {
    course: Course = new Course();

    constructor() { }

    get() {
        return this.course;
    }

    set(course: Course) {
        localStorage.setItem("courseCurrent", JSON.stringify(course));
        this.course = course;
    }
}

export const courseInfor = new CourseInformation();