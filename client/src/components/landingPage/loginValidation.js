export default function validate(values){
    let errors = {};

    // UserName validation
    if(!values.userName){
        errors.userName = "Username required!"
        errors.userNameMargin = {marginBottom: "2px"}
    }

    // Password validation
    if(!values.password){
        errors.password = "Password required!"
        errors.passwordMargin = {marginBottom: "2px"}
    }else if(values.password.length < 6){
        errors.password = "Passwords are at least 6 digits."
        errors.passwordMargin = {marginBottom: "2px"}
    }

    return errors;
}