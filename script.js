const generateBtn = document.getElementById('generate-btn');
const passwordInput = document.getElementById('password');

function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

generateBtn.addEventListener('click', function() {
    const generatedPassword = generatePassword(12); // Change the length as needed
    passwordInput.value = generatedPassword;
});
