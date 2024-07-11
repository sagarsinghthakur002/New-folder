function generateRandomName() {
    const firstNameOptions = [
      "Emma",
      "Oliver",
      "Ava",
      "William",
      "Sophia",
      "James",
      "Mia",
      "George",
      "Isabella",
      "Benjamin"
    ];
  
    const lastNameOptions = [
      "Smith",
      "Johnson",
      "Williams",
      "Jones",
      "Brown",
      "Davis",
      "Miller",
      "Wilson",
      "Moore",
      "Taylor"
    ];
  
    const randomFirstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
    const randomLastName = lastNameOptions[Math.floor(Math.random() * lastNameOptions.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  }
  
  console.log(generateRandomName());
