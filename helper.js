function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email= email;
  this.friends = [];
  this.activity = [];
  this.country = 'AM';
  this.hobbies = [];
  this.getPerson = function() {
    console.log(this.name, this.age, this.email, this.country, this.friends, this.activity);
  },
  this.getActivity = function() {
    let count = 0;
    for(let i = 0; i < this.activity.length; ++i) {
      count += this.activity[i];
    }

    if(count) {
      console.log(count / this.activity.length);
    }
    console.log(count);
  },
  this.setHobbies = function(hobbi) {
    this.hobbies.push(hobbi);
  },
  this.getHobbies = function() {
    console.log(this.hobbies.join(','));
  }
}

module.exports = Person;