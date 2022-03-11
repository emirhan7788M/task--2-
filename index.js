 var users = {

    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },

    "Oybek": {
         name: "Oybek",
        surname: "sattorov",
        age: 36,
        salary: 1500
    },

    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
   }




   }


    function sumage(users) {

    var allAge =  ( users.Akmal.age  +  users.Oybek.age + users.Umid.age) / 3


    // console.log(akmalage , Oybekage, umdAge , allAge );

    return allAge
}

 console.log( sumage(users));



 function samSalary(users) {

      var akmalSalary = users.Akmal.salary
      var uybeksalary = users.Oybek.salary
      var umidSalary = users.Umid.salary

        var allUsersSalery  =  (akmalSalary + uybeksalary + umidSalary)

   //     console.log(akmalSalary, uybeksalary, umidSalaru, allUsersSelery);

         return allUsersSalery //Bu yerga userlarni o'rtasha yoshini chiqarasiz
   }
        console.log(samSalary(users));


// console'dagi natija
//  console.log(sumSalary(users));
// --> 2700

//  console.log(avarageAge(users));
// --> 28
