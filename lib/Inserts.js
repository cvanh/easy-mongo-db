const DatabaseCore = new(require("../index.js"))();

class Inserts extends DatabaseCore{
    constructor(){
        console.log("inserts loaded")
    }
    
   one(){
       console.log('inserts one')
   }
}
module.exports = Inserts
