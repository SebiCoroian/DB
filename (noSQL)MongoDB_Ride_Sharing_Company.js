/* creation of DB and collections */

use zoomer
db.createCollection("Clients" ,autoIndexId = true)
db.createCollection("Drivers" ,autoIndexId = true)
db.createCollection("Operators" ,autoIndexId = true)
db.createCollection("Rides" ,autoIndexId = true)

/* populating the collection with document records */

db.Operators.insertOne(
{
   "name": {
       "first_name": "Aurel",
       "last_name": "Ros"
   },
   "salary": {
       "price": 2900,
       "currency": "RON"
   },
   "shift":
   {
     "first_shift":false,
     "second_shift":true,
     "third_shift": false
   },
});

db.Operators.insertOne(
{
   "name": {
       "first_name": "Maria",
       "last_name": "Ceteras"
   },
   "salary": {
       "price": 3500,
       "currency": "RON"
   },
   "shift":
   {
     "first_shift":true,
     "second_shift":false,
     "third_shift": false
   },
});

db.Operators.insertOne(
{
   "name": {
       "first_name": "Gavin",
       "last_name": "Cortez"
   },
   "salary": {
       "price": 3000,
       "currency": "RON"
   },
   "shift":
   {
     "first_shift":false,
     "second_shift":true,
     "third_shift": false
   },
});

db.Operators.insertOne(
{
   "name": {
       "first_name": "Norbert",
       "last_name": "Nagy"
   },
   "salary": {
       "price": 2300,
       "currency": "RON"
   },
   "shift":
   {
     "first_shift":false,
     "second_shift":false,
     "third_shift": true
   },
});

db.Operators.insertOne(
{
   "name": {
       "first_name": "Vasile",
       "last_name": "Ciolacu"
   },
   "salary": {
       "price": 2500,
       "currency": "RON"
   },
   "shift":
   {
     "first_shift":true,
     "second_shift":false,
     "third_shift": false
   },
});

db.Operators.insertOne(
{
   "name": {
       "first_name": "Gabriel",
       "last_name": "Cozma"
   },
   "salary": {
       "price": 2600,
       "currency": "RON"
   },
   "shift":
   {
     "first_shift":false,
     "second_shift":true,
     "third_shift": false
   },
});

/**************************************************************/

db.Drivers.insertOne(
  {
     "name":
     {
        "first_name":"Lorand",
        "last_name":"Kerekes"
     },
     "phone":"0788455679",
     "email":"lkerekes@zoomer.com",
     "address":
     {
        "street":"Liviu Rebreanu 4",
        "city":"Gilau",
        "postcode":"460101"
     },
     "shift":
     {
        "first_shift":true,
        "second_shift":false,
        "third_shift": false
     },
       "car":
       {
        "registration_number": "CJ38ESP",
         "model": "Honda",
         "year": "2012",
         "lastMot_test": "2017",
         "car_insurance": "CAR1234A",
         "special_features": "Camera marsalier",
       }
  });

db.Drivers.insertOne(
  {
      "name":
      {
        "first_name":"Cezar",
        "last_name":"Manasturean"
      },
      "phone":"0771589623",
      "email":"cmanasturean@zoomer.com",
      "address":
      {
        "street":"Aleea Plopilor 33",
        "city":"Cluj-Napoca",
        "postcode":"400483"
      },
      "shift":
      {
        "first_shift":true,
        "second_shift":true,
        "third_shift": false
      },
       "car":
       {
          "registration_number": "CJ21KGB",
         "model": "Ford",
         "year": "2011",
         "lastMot_test": "2017",
         "car_insurance": "CAR3454A",
         "special_features": "",
       }
  });

db.Drivers.insertOne(
  {
      "name":
      {
        "first_name":"Laura",
        "last_name":"Codrean"
      },
      "phone":"0776436767",
      "email":"lcodrean@zoomer.com",
      "address":
      {
        "street":"Mircea cel Batran 5",
        "city":"Apahida",
        "postcode":"498105"
      },
      "shift":
      {
        "first_shift":false,
        "second_shift":false,
        "third_shift": true
      },
      "car":
      {
          "registration_number": "CJ22KGB",
         "model": "Volkswagen",
         "year": "2009",
         "lastMot_test": "2017",
         "car_insurance": "CAR1234A",
         "special_features": "",
      }
  });

db.Drivers.insertOne(
  {
      "name":
      {
        "first_name":"Alexandru",
        "last_name":"Gabor"
      },
      "phone":"0755462879",
      "email":"agabor@zoomer.com",
      "address":
      {
        "street":"Erkel Ferenc 21",
        "city":"Cluj-Napoca",
        "postcode":"400495"
      },
      "shift":
      {
        "first_shift":false,
        "second_shift":true,
        "third_shift": false
      },
       "car":
       {
           "registration_number": "CJ66CSC",
           "model": "Volkswagen",
       "year": "2012",
        "lastMot_test": "2016",
        "car_insurance": "CAR1234A",
        "special_features": "Geamuri fumurii anti-glont",
       }
  });

db.Drivers.insertOne(
  {
      "name":
      {
        "first_name":"Aurel",
        "last_name":"Vlaicu"
      },
      "phone":"0775462879",
      "email":"avlaicu@zoomer.com",
      "address":
      {
        "street":"Horea 55C",
        "city":"Cluj-Napoca",
        "postcode":"400100"
      },
      "shift":
      {
        "first_shift":false,
        "second_shift":true,
        "third_shift": false
      },
       "car":
       {
         "registration_number": "CJ98ASC",
         "model": "Toyota",
         "year": "2012",
         "lastMot_test": "2017",
         "car_insurance": "CAR3454A",
         "special_features": ""
       }
  });

db.Drivers.insertOne(
  {
      "name":
      {
        "first_name":"Iulia",
        "last_name":"Puscas"
      },
      "phone":"0769420911",
      "email":"ipuscasu@zoomer.com",
      "address":
      {
        "street":"Principala 163",
        "city":"Bontida",
        "postcode":"430005"
      },
      "shift":
      {
        "first_shift":true,
        "second_shift":false,
        "third_shift": false
      },
       "car":
       {
           "registration_number": "CJ04IMC",
         "model": "Renault",
         "year": "2010",
         "lastMot_test": "2016",
         "car_insurance": "CAR1234A",
         "special_features": "CASCO",
       }
  });

/**************************************************************/

db.Clients.insertOne(
     {
     "client_type":
     {
         "private": false,
         "corporate": true
     },
     "name":"NTT Data",
     "phone":"0747456665",
     "address":
     {
        "street":"Constanta 19",
        "city":"Cluj-Napoca",
        "postcode":"400405"
     },
     "email":"contact@nttdata.com",
  })


db.Clients.insertOne({
   "client_type":
  {
      "private": true,
      "corporate": false
  },
   "name":
    {
       "first_name":"Catalin",
       "last_name":"Popa"
    },
   "phone":"0777568901",
   "address":
     {
       "street":"Calea Baciului 51B",
       "city":"Cluj-Napoca",
       "postcode":"400415"
     },
   "email":"popacata@yahoo.com",
}
)

db.Clients.insertOne({
   "client_type":
  {
      "private": true,
      "corporate": false
  },
   "name":
    {
       "first_name":"Radu",
       "last_name":"Piersic"
    },
   "phone":"0731368901",
   "address":
     {
       "street":"Observatorului 1",
       "city":"Cluj-Napoca",
       "postcode":"400401"
     },
   "email":"raducul@yahoo.com",
}
)
db.Clients.insertOne({
   "client_type":
  {
      "private": true,
      "corporate": false
  },
   "name":
    {
       "first_name":"Amalia",
       "last_name":"Pop"
    },
   "phone":"0791168901",
   "address":
     {
       "street":"Calea Turzii 103",
       "city":"Cluj-Napoca",
       "postcode":"400415"
     },
   "email":"amaama91@gmail.com",
}
)
db.Clients.insertOne({
   "client_type":
  {
      "private": true,
      "corporate": false
  },
   "name":
    {
       "first_name":"Alina",
       "last_name":"Bucur"
    },
   "phone":"0777673901",
   "address":
     {
       "street":"Viilor 52B",
       "city":"Cluj-Napoca",
       "postcode":"400415"
     },
   "email":"alinabucur@gmail.com",
}
)

db.Clients.insertOne({
   "client_type":
  {
      "private": true,
      "corporate": false
  },
   "name":
    {
       "first_name":"Mihai",
       "last_name":"Eminovici"
    },
   "phone":"0777568901",
   "address":
     {
       "street":"Mihai Eminescu 51",
       "city":"Apahida",
       "postcode":"410199"
     },
   "email":"misuemi@yahoo.com",
}
)
db.Clients.insertOne({
   "client_type":
  {
      "private": true,
      "corporate": false
  },
   "name":
    {
       "first_name":"Miriam",
       "last_name":"Costea"
    },
   "phone":"0777931765",
   "address":
     {
       "street":"Calea Baciului 1",
       "city":"Cluj-Napoca",
       "postcode":"400415"
     },
   "email":"mcostea20@outlook.com",
});

/**************************************************************/
/* populating a collection with a slightly different structure */
/**************************************************************/

travelDate = new ISODate()
driver = db.Drivers.findOne({"email": "ipuscasu@zoomer.com"})
client = db.Clients.findOne({"email": "mcostea20@outlook.com"})


db.Rides.insertOne(
{
   "date": travelDate,
   "observation": "",
   "payment":
   {
       "method":
       {
           "cash":true,
           "card":false,

       },
       "amount": 50,
   },
   "coordinates":
   {
       "latitude": 15.47878,
       "longitude": 75.47010
   },
   "driver_id": driver._id,
   "client_id" : client._id
})

db.Rides.insertOne(
{
   "date": ISODate("2022-01-01T18:50:00"),
   "observation": "Bagaje mari",
   "payment":
   {
       "method":
       {
           "cash":false,
           "card":true,

       },
       "amount": 22,
   },
   "coordinates":
   {
       "latitude": 110.75930,
       "longitude": 94.41510
   },
   "driver_id": ObjectId("61d2ed34b1e1bc4b4d0279b1"),
   "client_id": ObjectId("61d2ed96b1e1bc4b4d0279b6"),

   "review":
   {
       "comments": "a fost ok",
       "grade": 4
   }
})

db.Rides.insertOne(
{
   "date": ISODate("2022-01-01T11:10:00"),
   "observation": "Scaun cu rotile",
   "payment":
   {
       "method":
       {
           "cash":false,
           "card":true,

       },
       "amount": 10,
   },
   "coordinates":
   {
       "latitude": 10.99930,
       "longitude": 120.48900
   },
   "driver_id": ObjectId("61d2ec85b1e1bc4b4d0279a6"),
   "client_id": ObjectId("61d2ec8ab1e1bc4b4d0279ab"),

   "review":
   {
       "comments": "mi-a placut muzica",
       "grade": 5
   }
})

/* deleting a document */

client = db.Clients.findOne({"email": "mcostea20@outlook.com"})
db.getCollection("Clients").deleteOne( {"_id": client._id});

/* updating a field */

db.Operators.updateOne(
 {"name.first_name": "Vasile", "name.last_name": "Ciolacu"},
 {
   $set: {"salary.price": 2900}
 }
);

/* creating a simple index */

db.Operators.createIndex( { "salary.price": 1 } )

/* creating a compound index */

db.Drivers.createIndex( { "shift.first_shift": 1, "car.year": -1 } )

/* examples of queries */

db.getCollection('Drivers').find({"shift.first_shift":true})
db.getCollection('Drivers').find({"shift.second_shift":true})
db.getCollection('Drivers').find({"shift.third_shift":true})
db.getCollection('Operators').find({"salary.price": {$gte:2500}})
db.getCollection('Rides').find({"payment.method.cash": true})
db.getCollection('Drivers').find({"address.city":{$ne:"Cluj-Napoca"}})
db.getCollection('Clients').find({"client_type.corporate":true})
db.getCollection('Rides').find({"payment.amount": {$gt:10}})
db.getCollection('Clients').find({"email": {$regex: "@gmail.com"}})
