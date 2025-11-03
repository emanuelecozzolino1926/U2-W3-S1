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

//FORM
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    if (this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}

const pets = [];

const form = document.getElementById("petForm");
const petList = document.getElementById("petList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  const li = document.createElement("li");
  li.innerText = `${newPet.petName} (${newPet.species}, ${newPet.breed}) - proprietario ${newPet.ownerName}`;
  petList.appendChild(li);

  pets.forEach((p) => {
    if (p !== newPet && p.hasSameOwner(newPet)) {
      console.log(
        `${p.petName} e ${newPet.petName} hanno lo stesso proprietario ${newPet.ownerName}`
      );
    }
  });

  form.reset();
});
