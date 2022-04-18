export class Model { }

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

export class User {
    "user_name": String;
    "email": String;
    "password": String;
    "status": Boolean;
    "dateOfBirth": Date;
    "role": String;
    "courses": Array<any>;
}

export const EndPoint = {
    "user": {
        "register": "/API/user/client-register",
        "signIn": "/API/user/client-signIn"
    },
    "course": {
        "common": "/API/course/course"
    },
    "unit": {

    },
    "lesson": {

    }

}

export const Errors = {
    "dateOfBirth": {
        "invalid": "Tuổi người dùng không hợp lệ",
        "minAge": "Tuổi người dùng phải lớn hơn",
        "maxAge": "Tuổi người dùng phải nhỏ hơn",
    },
    "email": {
        "invalid": "Email không hợp lệ",
    },
    "input" : {
        "required": "Trường này không được trống",
        "minLength": "Độ dài nội dung phải lớn hơn",
        "maxLength": "Độ dài nội dung phải nhỏ hơn"
    },
    "responsed": {
        "userNotFound": "Tài khoản không hợp lệ"
    },
    "password": {
        "invalid": "Mật khẩu phải chứa ký tự 'A-Za-z','#?!@$%^&*' hoặc '0-9'",
    }
}
