// without default function arguments
function makeAjaxRequest(url, method){
  if (!method) {
    method = 'GET';
  }
}
makeAjaxRequest('google.com', 'GET');
// with default function arguments
// NOTE: The default is now set to "GET", if the method is specified it will take that,
// but by default it was be a "GET" request
function makeAjaxRequest(url, method = 'GET'){
  return method
}

makeAjaxRequest('google.com', 'POST');
makeAjaxRequest('google.com');

// NOTE: if you pass in "null" it will not use the default argument, but if you
// pass in undefined it will default

// example
function User() {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user) {
    user.admin = true;

    return user;
}
