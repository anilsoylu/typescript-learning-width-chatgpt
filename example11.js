var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Person.prototype.sendEmail = function () {
        console.log("Email sent to ".concat(this.email));
    };
    return Person;
}());
var person = new Person("Anıl SOYLU", 29, "business@anilsoylu.com");
person.sendEmail();
