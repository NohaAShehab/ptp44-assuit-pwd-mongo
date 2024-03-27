/// not only sql 


summ=0

db.instructors.find().forEach((document)=>{
    
        print(document.salary)
    summ +=document.salary
    })


print(summ)
    
    /// restrict ---> documents contains 
    
//     firstName , lastName, salary ... mandatory --> 
    
    /// check if collection ===> have schema or not 
    
  db.getCollectionInfos({name:"instructors"})  
  
    
    ///// when you create collection ---> add schema 
  
  db.createCollection("employees", 
  
  {
      
      validator: {
          
          $jsonSchema: {
              bsonType:"object",               
              
              }
          
          
          }// validator
      
   } // creation options 
  
  )
  
  
 db.employees.insertOne({firstName:1 , lastName:1})
    
  /// after creating collection you can update the schema
    
 // 1- add restriction firstName: string , lastName string 
 
 db.employees.runCommand("collMod", 
 {
     validator: {
         $jsonSchema: {
             bsonType: "object",
             properties: {
                 firstName: {bsonType: "string"},
                 lastName: {bsonType: "string"}
                 
                 }
 
             }
         }

  }
 )
//      db.employees.insertOne({firstName:1 , lastName:1})
    
     db.employees.insertOne({firstName:"iti" , lastName:"iti"})
     db.employees.insertOne({})
     db.employees.insertOne({email:"3234"})
     
     
  /////////////// firstName , lastName , email required 
    
     db.employees.runCommand("collMod", 
 {
     validator: {
         $jsonSchema: {
             bsonType: "object",
             required: ["firstName", "lastName", "email"],
             properties: {
                 firstName: {bsonType: "string"},
                 lastName: {bsonType: "string"}
                 
                 }
 
             }
         }

  }
 )
    
    
     db.employees.insertOne({}) 
  db.employees.insertOne({firstName:"we",lastName:"fdf", email:55})
    
      db.employees.insertOne({firstName:"we",lastName:33, email:55})

    
 db.employees.insertOne({firstName:"we",lastName:"fdf", email:55,
     city: "df"})

    
     
     ///
     
////*************** prevent adding extra fields 
    
  
     db.employees.runCommand("collMod", 
 {
     validator: {
         $jsonSchema: {
             bsonType: "object",
             required: ["firstName", "lastName", "email"],
             additionalProperties:false,
             properties: {
                 firstName: {bsonType: "string"},
                 lastName: {bsonType: "string"}
                 
                 }
 
             }
         }

  }
 )
        
     db.employees.insertOne({firstName:"we",lastName:"fdf", email:55,
     city: "df"})
 
  db.employees.insertOne({firstName:"we",lastName:"fdf", email:55
   })

    /// if you are using additional properties : false
  
//   You must add the id  to the properities
   
   
   
       db.employees.runCommand("collMod", 
 {
     validator: {
         $jsonSchema: {
             bsonType: "object",
             required: ["firstName", "lastName", "email"],
             additionalProperties:false,
             properties: {
                 _id: {},/// bsonType: object 
                 firstName: {bsonType: "string"},
                 lastName: {bsonType: "string"}, 
                 email: {bsonType: "string"}
                 
                 }
 
             }
         }

  }
 )
     
   
  db.employees.insertOne({firstName:"we",lastName:"fdf", email:"dff"
   })
   
   
   
   
   /// modify type of primary key 
   
      
       db.employees.runCommand("collMod", 
 {
     validator: {
         $jsonSchema: {
             bsonType: "object",
             required: ["firstName", "lastName", "email"],
             additionalProperties:false,
             properties: {
                 _id: {bsonType: "number"},/// bsonType: object 
                 firstName: {bsonType: "string"},
                 lastName: {bsonType: "string"}, 
                 email: {bsonType: "string"}
                 
                 }
 
             }
         }

  }
 )
   
    db.employees.insertOne({firstName:"we",lastName:"fdf", email:"dff"
   })
    
     db.employees.insertOne({_id:10,firstName:"we",lastName:"fdf", email:"dff"
   })
   
   
   
   
   /// validation validate document architecture
   
   /// no validation in monogo=== on primary key 
   // node --> do this 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     