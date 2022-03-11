
var Users = {
        emirhan :  {
        name : "emirhan",
        userName: "ertan",
        salary : 500 ,
        age : 21,
    },

        Akmal: {
      name: "Akmal",
      userName: "O'ktamov",
      salary: 800,
      age: 27,
    },
    Oybek: {
      name: "Oybek",
      userName: "Sattorov",
      salary:1500,
      age: 36,
    },
    Umid: {
      name: "Umid",
      userName: "Abdushukurov",
      salary: 400,
      age: 21,
    },
  };
  function sumSalary(Users) {
    var salary = 0;

    for (var user in Users) {
      salary += Users[user].salary;
    }

    return salary;
  }

  function averageAge(Users) {
  var age = 0;
    var length = 0;

    for (var user in Users) {
      length++;
      age = age + Users[user].age;
    }

    return age / length;
  }


  console.log(sumSalary(Users));
  console.log(averageAge(Users));