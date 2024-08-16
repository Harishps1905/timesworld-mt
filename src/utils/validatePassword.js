export default function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
        console.log("Password is valid.");
        return true;
    } else {
        console.log("Password must be at least 8 characters long, include at least one uppercase letter, one number, and one symbol.");
        return false;
    }
}