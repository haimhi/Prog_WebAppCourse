// bs'd

// Object containing all person data
const person = {
  name: "Bob Smith",
  dOB: "Sept. 1, 1984",
  freeText: ' ',
  // memberType can be one of the following: 'regular', 'premium', 'editor', 'admin'
  memberType: "editor",
  paid: true
};

// Loop output = person data types
for (const [key, value] of Object.entries(person)) {

  console.log(key, value, typeof value);
}

// Print membership type
console.log('Your membership type is: ', person.memberType);

// Output strings for 'editor' and 'admin'
switch (person.memberType) {
  case 'editor':
    console.log('הנך יכול לערוך תכנים באתר');
    break;
  case 'admin':
    console.log('אתה מנהל האתר');
}

// Check if membership is paid and output string
if (person.paid) {
  console.log('יש לך מנוי בתשלום, אתה יכול לפרסם מודעות באתר')
}
else {
  console.log('מעוניין לפרסם מודעות באתר? פנה אלינו לקבלת הצעה')
}