var person = {
    name: "masoud",
    age: 30,
    role: ["author", 4]
};
console.log(person.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["OPERATOR"] = 2] = "OPERATOR";
})(Role || (Role = {}));
;
console.log(Role.AUTHOR);
