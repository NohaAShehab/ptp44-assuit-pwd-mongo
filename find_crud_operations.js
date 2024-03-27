// crud operations 

db.instructors.find()

db.instructors.find({})

// find({},  ===> condition
//{} ---> projection)

db.instructors.find({}, { firstName: 1, lastName: 1 })

db.instructors.find({ firstName: 1, lastName: 1 })


/// 

db.instructors.find().forEach((document) => {
  print(document)
})



db.instructors.find().constructor.name  // DBQuery ,,, Cursor 

// toArray
db.instructors.find().toArray()  // return db result in array of objects 


db.instructors.find().toArray() // this is an array now you can apply ? // any 
// function in javascript works on array 



// mongo knows that you may need using foreach much with the dbquery result // cursor
// mongo created short for forEach

db.instructors.find().forEach((document) => {
  print(document)
})

///////////////////    curd operations /// find 

// select * from instructors where salary = 3500 
/// equality operatior
db.instructors.find(
  { salary: 3600 },

  { firstName: 1, salary: 1 }

)


// salary 3600 and id = 2

db.instructors.find(
  { salary: 3600, _id: 2 },

  { firstName: 1, salary: 1 }

)

/// $eq
db.instructors.find(
  { salary: { $eq: 3600 } },

  { firstName: 1, salary: 1 }

)
// ********** $gt , $gte , $lt , $lte *************************************

// salary > 2000  ... $gt opeator 

db.instructors.find(
  { salary: { $gt: 5000 } },

  { firstName: 1, salary: 1 }

)

//// ************************** $in operator*****************************************

// get instructors age ,, 21 or 22 

db.instructors.find(
  {
    age: { $in: [21, 22] }
  },

  { firstName: 1, age: 1 }

)


///*************************** $or --> top level operator *********************************************


db.instructors.find(
  {
    $or: [{ age: 21 }, { age: 22 }],
    firstName: "mona"
  },

  { firstName: 1, age: 1 }

)


////****************** find data from embedded object ****************************************/    


db.instructors.find(
  {
    address: "cairo"
  },

  { firstName: 1, address: 1 }

)



db.instructors.find(
  {
    address: { city: "cairo" }
  },

  { firstName: 1, address: 1 }

)  // search in documents --> document --> address --> object {city: "cairo"}



//  db.instructors.find(
// {
//    address.city:"cairo"
//  }, 

// {firstName:1 , address:1}

// )  

db.instructors.find(
  {
    "address.city": "cairo"
  },

  { firstName: 1, address: 1 }

)



// address.city in projection 

db.instructors.find(
  {
    "address.city": "cairo"
  },

  { firstName: 1, "address.city": 1 }

)

//////////***********************************Dealing with arrays *************************************

/// get instructor teached js 

db.instructors.find(
  {
    courses: "js" /// mongo --> find document --> courses array contains js
  },

  { firstName: 1, courses: 1 }

)


/// get instructors teach mvc and js ? 

db.instructors.find(
  {
    $and: [{ courses: "mvc" }, { courses: "js" }]
  },

  { firstName: 1, courses: 1 }

)



///

db.instructors.find(
  {
    courses: ["js", "mvc"]  /// courses: exact match ["js", "mvc"]
  },

  { firstName: 1, courses: 1 }

)

/// instructors  --> courses contains js and mvc 

db.instructors.find(
  {
    courses: { $all: ["js", "mvc"] } /// 
  },

  { firstName: 1, courses: 1 }

)


// instructors  js or mvc

db.instructors.find(
  {
    courses: { $in: ["js", "mvc"] } /// 
  },

  { firstName: 1, courses: 1 }

)


///  get instructor teaches only 3 courses 

db.instructors.find().forEach((document) => {
  if (document.courses) {
    print(`firstName: ${document.firstName} , no_of_courses: ${document.courses.length}`)
  }
})




///  get instructor teaches only 3 courses 
db.instructors.find(
  {
    courses: { $size: 3 }
  },

  {}

)


/////////////////////////////////////////////////////////////////////
/// *********************** element operators


db.instructors.find(
  { courses: { $exists: true } }

).forEach((document) => {
  //       if (document.courses){
  print(`firstName: ${document.firstName} , no_of_courses: ${document.courses.length}`)
  //       }
})




db.instructors.insertOne({
  "_id": 100.0,
  "firstName": "badr",
  "lastName": "ahmed",
  "age": 23.0,
  "salary": 5550.0,
  "address": {
    "city": "cairo",
    "street": 10.0,
    "building": 8.0
  },
  "courses": "mongodb"
}

)



db.instructors.find(
  { courses: { $type: "array" } }

).forEach((document) => {
  print(`${document._id} firstName: ${document.firstName}, no_of_courses: ${document.courses.length}`)
})




/// array operators 



db.instructors.insertOne({
  firstName: "ahmed",
  lastName: "Ali",
  subjects: [1, 3, 5, 6],
  _id: 101


})


db.instructors.insertOne({
  firstName: "ahmed",
  lastName: "Ali",
  subjects: [8, 9, 10],
  _id: 102


})

/// get instructors subjects -->


db.instructors.find(
  {
    subjects: { $type: "array" },

    subjects: { $elemMatch: { $lt: 5 } }



  })






db.instructors.find(
  { courses: { $type: "array" } }
  ,
  { _id: 1, firstName: 1, courses: 1 }

).forEach((document) => {
  print(`${document._id} firstName: ${document.firstName}, no_of_courses: ${document.courses.length}`)
})








































































































































































































































































































