/////********************* update operator



// update instructors set firstName='Noha' where _id=6 


/// 1- update instructor ---> set for existing field
db.instructors.updateOne(

    {_id:6}, // condition
    
    {
        $set: {firstName: "Noha"}
        
    } // update operation
)


db.instructors.updateOne(

    {_id:6}, // condition
    
    {
        $set: { lastName:"Shehab", age:31}
        
    } // update operation
)


// update _id=6 add email to the document
    
    db.instructors.updateOne(

    {_id:6}, // condition
    
    {
        $set: {email: "noha@gmail.com"}
        
    } // update operation
)


 db.instructors.updateMany(

    {}, // condition
    
    {
        $set: {email: "noha@gmail.com"}
        
    } // update operation
)


/// update if exists  --> if not insert 
    /// upsert 

 db.instructors.updateOne(

    {_id:105}, // condition
    
    {
        $set: {firstName:"Salwa", lastName: "Hammad"}
        
    }, // update operation
    {
        upsert: 1
        
      } // update options 
)


///*********************************************
/// rename field name ? 
      
       db.instructors.updateOne(

    {_id: 6}, // condition
    
    {
        $rename: {email:"inst_email"}
        
    } // update operation
)



//////////////////**** remove field from document 
    
     
db.instructors.updateOne(

    {_id: 6}, // condition
    
    {
        $unset: {inst_email:""}
        
    } // update operation
)   
    
    
 /////************************* update embedded Object
    
    
    db.instructors.updateOne(
    {_id:6}, 
    
    {
     $set:    {"address.street":20}
        
     }
    
    )
    
    
////************************ increment salary 
     
     db.instructors.updateOne(
    {_id:6}, 
    
    {
     $inc:    {salary:-2000}
        
     }
    
    ) 
     
  //////******************** Array operators
     ///** 1- update courses element at known index 
     
     
       db.instructors.updateOne(
         {_id:6}, 
    
    {        
        $set:    {"courses.0":"javaScript"}
        
     }
    
    )
     
     
// update element in array without knowing the index 
     
     
  db.instructors.updateOne(
    {_id:6, courses:"expressjs"}, 
    
    {
     $set:    {"courses.$":"nodejs"}
        
     }
    
    ) /// mongodb
     
     
     let name=10 /// js
     
     
     
     
     db.instructors.updateMany(
     
     { courses: "mvc"},
     
     {
         
            $set: {"courses.$": "ASP.net"}
      }
     
     
     )
     
//// add courses to the array 


 db.instructors.updateOne(
     
     { _id: 6},
     
     {
         $push : {"courses": "django"} // push element to the array 
           
      }
     
     
     )
     


// add element to the array if not exists 

 db.instructors.updateOne(
     
 { _id: 6},
 
 {
     $addToSet : {"courses": "django"} // push element to the array 
       
  }
 
     
)
     
   db.instructors.updateOne(
     
 { _id: 6},
 
 {
     $addToSet : {"courses": "bigdata"} // push element to the array 
       
  }
 
     
)
   
  
  /// add more one course to the array ?
  
   db.instructors.updateOne(
     
 { _id: 6},
 
 {
      $push : {"courses": ["flask", "db_fund"]}
  }
 
     
)
  
  /// add each element to the array 
  
     db.instructors.updateOne(
     
 { _id: 6},
 
 {
      $push : {"courses": {$each: ["c", "c++"]}}
  }
 
     
)
  
  /// remove course from courses array 
  
  
  
     db.instructors.updateOne(
     
 { _id: 6},
 
 {
      $pop : {"courses":"django"} // error --> expect a number
  }
 
     
)
  
  
  

 
 db.instructors.updateOne(
     
 { _id: 6},
 
 {
      $pop : {"courses":1} 
  }
 
     
)  
  
  
  
  
 
     db.instructors.updateOne(
     
 { _id: 6},
 
 {
      $pop : {"courses":-1} 
  }
 
     
)
  
  
  
  db.instructors.updateOne(
     
 { _id: 6},
 
 {
      $pull : {"courses":"django"} // remove all occurences
  }
 
     
)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  








































      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


























































































