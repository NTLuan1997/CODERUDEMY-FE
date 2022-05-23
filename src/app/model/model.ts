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
    "Func": String;
    "Password": String;
    "ConformPassword": String;
    "Gender": String;
    "DateOfBirth": Date;
    "Phone": String;
    "Address": String;
    "Type": String;
    "Thumbnail": String;
    "RegisterCourse": []

    constructor() { }

    public setInfor(model: any) {
        Object.assign(this, model);
    }

    public getInfor() {
        return {
            "Name": this.Name,
            "Email": this.Email,
            "Func": this.Func,
            "Gender": this.Gender,
            "DateOfBirth": this.DateOfBirth,
            "Phone": this.Phone,
            "Address": this.Address,
            "Type": this.Type
        }
    }

    public getThumbnail() {
        return {
            "Func": this.Func,
            "Type": this.Type,
            "Thumbnail": this.Thumbnail,
        }
    }

    public getRegisterCourse() {
        return {
            "Func": this.Func,
            "Type": this.Type,
            "RegisterCourse": this.RegisterCourse,
        }
    }

    public getPassword() {
        return {
            "Func": this.Func,
            "Type": this.Type,
            "Password": this.Password,
        }
    }
}

export const commons = {
    "gender": ["Nam", "Nữ", "Khác"],
    "file": ["jpg", "jpeg", "png", "pdf"]
}

export const EndPoint = {
    // "priture": "http://localhost/www/CODERUDEMY-IMG/", // => run localhost
    "priture": "https://nguyenphuongduy.000webhostapp.com/",
    "client": {
        "common": "/API/client/client",
        "authen": "/API/authen/client"
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
        "exists": "Email đã được đăng ký",
        "passwordIncorrect": "Mật khẩu không chính xác",
        "unregister": "Tài khoản chưa đăng ký",
    },
    "dateOfBirth": {
        "invalid": "Tuổi người dùng không hợp lệ",
        "minAge": "Tuổi người dùng phải lớn hơn",
        "maxAge": "Tuổi người dùng phải nhỏ hơn",
    },
    "email": {
        "invalid": "Email không hợp lệ",
    },
    "file": {
        "size": "Kích thước file không hợp lệ",
        "type": "Loại file không hợp lệ"
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
