//this is the old way
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Dallin' }
]

var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
  }
}

user;
// NOTE: using the for loop keeps going through the array even when
//it's found the specified criteria

// Helper Method Substitute
users.find(function(user) {
  return user.name === 'Alex'
})

//second example

function car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
]

cars.find(function(car){
  return car.model === 'Focus'
})

// third example
var posts = [
  {  id: 1, title: 'New Post' },
  {  id: 2, title: 'Old Post' }
]


var comment = {  postId: 1, content: 'Great Post' }

function postForComment(posts, comment){
  return posts.find(function(post){
    return post.id === comment.postId;
  })
}
