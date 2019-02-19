// template strings or template literals

// old way

function getMessage () {
  const year = new Date().getFullYear();

  //return "the year is " + year <== Old way
  return `The year is ${year}`; // using template literals
}

getMessage();

// second example
// ====== The Old Way ==============================
data = '{"device_id": "' + device_id + '","guid":"' + guid + '","username":"' + username + '", "}';

// ====== ES6 way ==============================
data = `{"device_id" : "${device_id}" , "guid": "${guid}", "username": "${username}", "}`;
