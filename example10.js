function sendEmail(to) {
    console.log("Email sent to ".concat(to.email));
}
var person = {
    name: "Anıl SOYLU",
    age: 29,
    email: "business@anilsoylu.com",
};
sendEmail(person);
