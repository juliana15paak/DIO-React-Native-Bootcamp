export default function generatePass(){
    let password:string = "";
    let characters:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_"
    let passwordLength:number = 10;
    for(let i = 0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password
}