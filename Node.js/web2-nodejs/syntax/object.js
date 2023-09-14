var members = ['hehe', 'hihi', 'hoho'];
// console.log(members[1]);

var roles = {
    'programmer': 'hehe',
    'designer' : 'hihi',
    'manager' : 'hoho'
}
// console.log(roles.programmer);
// console.log(roles['designer']);

// var i = 0;
// while (i < members.length) {
//     console.log('array loop', members[i]);
//     i = i + 1;
// }

for(var Name in roles) {
    console.log('object =>', Name, 'value=>', roles[Name]);
}