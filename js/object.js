var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['Java', 'HTML', 'CSS']
};

//In a for loop you have to use bracket notation
for (var prop in person) {
  console.log(prop, ': ', person[prop]);
}


























// The code below is a function and messgaes that print out ot the screen

/* function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}


var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was ' + person.name + '</p>'
message += '<p> My age is ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>';
print(message);

*/
