const employee1 = {
  name: "Chad",
  lastName: "Smith",
  age: 28,
  experience: ["Google", "Facebook", "Uber", "Starbucks"],
};

const employee2 = {
  name: "James",
  lastName: "Bond",
  age: 32,
  experience: ["Tesla", "Twitter", "Pinterest", "Instagram", "Starbucks"],
};

function getDetails(employee_object) {
  let result =
    "Employee Name: " +
    employee_object.name +
    " " +
    employee_object.lastName +
    ", " +
    employee_object.age +
    " years old. " + "Work experience: " + employee_object.experience ;
  return result;
}

console.log(getDetails(employee1));
console.log(getDetails(employee2));

function compareEmployees(employee1, employee2) {
  if (employee1.experience.length > employee2.experience.length) {
    console.log(employee1.name + " has worked for more companies.");
  } else if (employee1.experience.length < employee2.experience.length) {
    console.log(employee2.name + " has worked for more companies.");
  } else {
    console.log(
      employee1.name +
        " and " +
        employee2.name +
        " have worked for the same number of companies."
    );
  }
}

compareEmployees(employee1, employee2);

