// template strings or template literals

// old way

function getMessage () {
  const year = new Date().getFullYear();

  //return "the year is " + year
  return `The year is ${year}`;
}

getMessage();

// second example
//ES5
data = '{"device_id": "' + device_id + '","guid":"' + guid + '","username":"' + username + '", "}';
//ES6
data = ``{"device_id" : "${device_id}" , "guid": "${guid}", "username": "${username}", "}`;
