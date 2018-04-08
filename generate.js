module.exports = function(){
    let faker = require('Faker');
    let _ = require("lodash");
    return {
        people: _.times(100, function(n){
            return{
                id: n,
                name: faker.name.firstName(),
                // surname: fakesr.surname.lastName(),
                email: faker.internet.email()
            }
        })
    }
}