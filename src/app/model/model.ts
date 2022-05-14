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
    "Code": String;
    "Name": String;
    "Email": String;
    "Password": String;
    "Gender": String;
    "DateOfBirth": Date;
    "Phone": String;
    "Address": String;
    "Type": String;
    "Thumbnail": String;
    "registerCourse": []
}

export const commons = {
    "gender": ["Nam", "Nữ", "Khác"]
}

export const EndPoint = {
    "user": {
        "register": "/API/client/client",
        "signIn": "/API/user/client-signIn"
    },
    "course": {
        "course-common": "/API/course/course",
        "course-detail": "/API/course/course-detail"
    },
    "unit": {

    },
    "lesson": {

    }

}

export const Errors = {
    "account": {
        "exists": "Email đã được đăng ký"
    },
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
        "conformPassword": "Password nhập lại không hợp lệ"
    },
    "phone": {
        "invalid": "Số điện thoại không hợp lệ"
    }
}
