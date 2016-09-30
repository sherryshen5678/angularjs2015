var name = "Arun", 
    email = "arun.gopan@marlabs.com",
    location = "India";
    
    
var users = {
  "name":"Arun",
  "email":"arun.gopan@marlabs.com",
  "location":"India"
};

var users2 = new Object();
users2.name = "Arun";
users2.email = "arun.gopan@marlabs.com";
users2.location = "India";


function users_fn(name, email, location) {
  this.name = name;
  this.email = email;
  this.location = location;
}

var user3 = new users_fn('Arun', 'arun.gopan@marlabs.com', 'Canada');


var obj_resp = 'Name = '+user3.name +', location = '+user3.location+', email = '+user3.email;

document.write(obj_resp);


