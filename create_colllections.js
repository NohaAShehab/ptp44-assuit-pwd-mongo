

// 
use pwd44

db.createCollection("instructors")


// list all documents in a collection 
db.instructors.find()

// list all collections
show collections

// create collection (method 2)
db.courses.insertOne({name: "mongodb"})


// list all courses
db.courses.find()

db.courses.insertOne({coursename: "c#"})



db.courses.insertOne({_id:1 , cname: "mvc", duration :27 })

db.courses.insertOne({id:1 , cname: "mvc", duration :27 })

// populate instructors collections

let instructorsArray = [
    {
        _id: 6, firstName: "noha", lastName: "hesham",
        age: 21, salary: 3500,
        address: { city: "cairo", street: 10, building: 8 }, /// embedded object
        courses: ["js", "mvc", "signalR", "expressjs"]
    },

    {
        _id: 7, firstName: "mona", lastName: "ahmed",
        age: 21, salary: 3600,
        address: { city: "cairo", street: 20, building: 8 },
        courses: ["es6", "mvc", "signalR", "expressjs"]
    },

    {
        _id: 8, firstName: "mazen", lastName: "mohammed",
        age: 21, salary: 7040,
        address: { city: "Ismailia", street: 10, building: 8 },
        courses: ["asp.net", "mvc", "EF"]
    },

    {
        _id: 9, firstName: "ebtesam", lastName: "hesham",
        age: 21, salary: 7500,
        address: { city: "mansoura", street: 14, building: 3 },
        courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
    }

    , {
        "_id": 10,
        "firstName": "badr",
        "lastName": "ahmed",
        "age": 22.0,
        "salary": 5550.0,
        "address": {
            "city": "cairo",
            "street": 10.0,
            "building": 8.0
        },
        "courses": [
            "sqlserver",
            "mvc",
            "signalR",
            "asp.net"
        ]
    },
    {
        "_id": 2,
        "firstName": "mona",
        "lastName": "mohammed",
        "age": 21.0,
        "salary": 3600.0,
        "address": {
            "city": "mansoura",
            "street": 20.0,
            "building": 18.0
        },
        "courses": [
            "es6",
            "js",
            "mongodb",
            "expressjs"
        ]
    },
    {
        "_id": 3,
        "firstName": "mazen",
        "lastName": "ali",
        "age": 30.0,
        "salary": 7010.0,
        "address": {
            "city": "cairo",
            "street": 10.0,
            "building": 5.0
        },
        "courses": [
            "asp.net",
            "mvc",
            "EF"
        ]
    },
    {
        "_id": 4,
        "firstName": "ebtesam",
        "lastName": "ahmed",
        "age": 28.0,
        "salary": 6200.0,
        "address": {
            "city": "mansoura",
            "street": 14.0,
            "building": 7.0
        },
        "courses": [
            "js",
            "html5",
            "signalR",
            "expressjs",
            "bootstrap",
            "es6"
        ]
    }];











// insert all instructor in the instructors collection 
    
    db.instructors.insertMany(instructorsArray)


/// view all documents 
    db.instructors.find()




db.instructors.insertOne({
    name:"noha", track: "pws"
    
    })


// select * from instructors;
db.instructors.find()
    
    
// select firstName , lastName from instructors ; 

db.instructors.find(
    {} ,// represent condition
    {firstName:1 , lastName:1, _id:0} // projection --> fields i need to display 
 )

// select firstName , lastName from instructors where id = 6
    
db.instructors.find(
    {_id:6} ,// represent condition
    {firstName:1 , lastName:1} // projection --> fields i need to display 
 )





count= 0
db.instructors.find().forEach((document)=> {
    print(document.firstName)
    count +=1
    })
    
 print(count)






























