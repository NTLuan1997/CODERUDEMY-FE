export class Model { }

export const Handlle = {
    "InputError" : {
        "email": "Email không hợp lệ",
        "required": "Trường này không được trống",
        "minLength": "Độ dài nội dung phải lớn hơn",
        "maxLength": "Độ dài nội dung phải nhỏ hơn",
    }
}

export const User = {
    "user_name": '',
    "email": '',
    "password": '',
    "status": false,
    "dateOfBirth": new Date(),
    "role": 'Member',
    "courses": []
}
