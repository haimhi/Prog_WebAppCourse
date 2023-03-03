/* החלק השני של ש.ב. -
חזרו לש.ב. שעשיתם בשיעור הקודם וצרו את הפונקציות הבאות:
1. פונקציה המקבלת סוג מנוי ומחזירה הודעה בהתאם.
2. פונקציה המקבלת "האם שילם" ומחזירה תשובה בהתאם.
3. פונקציה המקבלת כותרת, טקסט ומחבר ומדפיסה אותם.
4. הפעילו את הפונקציות לעיל עם נתונים שונים ובדקו שהקוד עובד כמו שצריך. */


// clientType can be one of the following: 'regular', 'premium', 'editor', 'admin'
clientType('admin');
isPaid(true);
outputText("Headline", "bla bla bla bla  bla bla bla bla bla bla bla bla bla bla")

function clientType(cType) {

  if (cType === "regular") {
    console.log("You are a regular user of this site");
  } else if (cType === "premium") {
    console.log("You are a premium user of this site");
  } else if (cType === "editor") {
    console.log("You can edit content of this site");
  } else if (cType === "admin") {
    console.log("You are the administrator of this site");
  } else {
    console.log("You are not registered to this site");
  }
}

function isPaid(pay) {
  let payStatus = pay ? "You have paid" : "Payment required";
  console.log(payStatus);
  return pay;
}

function outputText(string1, string2) {
  let titleandText = (string1 + "\n" + string2);
  console.log(titleandText);
}