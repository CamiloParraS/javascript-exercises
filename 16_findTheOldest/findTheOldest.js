const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

function findTheOldest(arr) {
  return arr.reduce((oldest, person) => {
    today = new Date().getFullYear();

    const currentYearOfDeath = person.yearOfDeath ?? today;
    const oldestYearOfDeath = oldest.yearOfDeath ?? today;

    const currentYears = currentYearOfDeath - person.yearOfBirth;
    const oldestYears = oldestYearOfDeath - oldest.yearOfBirth;
    return currentYears > oldestYears ? person : oldest;
  });
}

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
