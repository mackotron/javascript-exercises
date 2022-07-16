const findTheOldest = function(people) {

    let ageByIndex = [];
    let currentYear = 2022;

    people.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            ageByIndex.push(currentYear - person.yearOfBirth)
        }
        else ageByIndex.push(person.yearOfDeath - person.yearOfBirth);
    });

    return people[ageByIndex.indexOf(Math.max(...ageByIndex))];
};

// Do not edit below this line
module.exports = findTheOldest;
