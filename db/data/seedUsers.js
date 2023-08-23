const seedUsers = [
  {
    "name": "Easy Mahaffey",
    "email": "easy@easy.com",
    "password": "password",
    "loggedIn": false,
    "city": "Tucson",
    "state": "AZ",
    "zipcode": "85734",
    "privacy": "Show",
    "admin_role": "Program Manager",
    "userLevel": "Programmer",
  },
  {
    "name": "Easy1 Mahaffey",
    "email": "easy1@easy.com",
    "password": "password",
    "loggedIn": false,
    "city": "Tucson",
    "state": "AZ",
    "zipcode": "85734",
    "privacy": "Show",
    "admin_role": "Local Administrator",
    "userLevel": "Local Administrator",
  }
]

const test = [
  {
    // "_id" : ObjectId("6230dcdd8e42a62fb0a395f6"),
    "name": "Easy Mahaffey",
    "email": "easy@easy.com",
    "password": "$2a$10$QMtOxX.ZlJeySZL/RiV.3.qaslWeLODQ6pehcr2yB/BWum2E4tH4e",
    // "date" : ISODate("2022-03-15T18:36:58.032Z"),
    "loggedIn": false,
    "city": "Tucson",
    "state": "AZ",
    "zipcode": "85734",
    "privacy": "Show",
    "userLevel": "Programmer",
  },
  {
    // "_id" : ObjectId("6230dcdd8e42a62fb0a395f7"),
    "name": "Easy1 Mahaffey",
    "email": "easy1@easy.com",
    "password": "$2a$10$FHnXvn8Ifs8TSR37gSVCFux75FTL/APdmXeoG1LYkxjFWwu8w4bXK",
    // "date" : ISODate("2022-03-15T18:36:58.032Z"),
    "loggedIn": false,
    "city": "Tucson",
    "state": "AZ",
    "zipcode": "85734",
    "privacy": "Show",
    "userLevel": "Local Administrator",
  }
]

module.exports = seedUsers


