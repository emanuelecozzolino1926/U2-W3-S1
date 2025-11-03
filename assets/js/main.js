class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più grande di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più piccolo di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}
const user1 = new User("Emanuele", "Cozzolino", 23, "Napoli");
const user2 = new User("Antonio", "Ascione", 19, "Torino");
const user3 = new User("Michele", "Basile", 23, "Roma");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user3));
