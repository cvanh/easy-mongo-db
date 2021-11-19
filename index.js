require('dotenv').config()
class easyMongoDB{
    database;
    ConnectionSrv

    constructor(database,ConnectionSrv){
        this.database = database;
        this.ConnectionSrv = ConnectionSrv;
    }
    dump(){
        console.log(this.database)
        console.log(this.ConnectionSrv)
    }

    get test(){
        return 0
    }
}
const MongoDB = new easyMongoDB('test',process.env.srv )

MongoDB.dump()
module.exports = easyMongoDB;

// class A{
//     constructor(){
//         console.log('dit is de constructor van klas a')

//     }

//     test(){
//         console.log('aks')
//     }
// }

// class B extends A{
//     constructor(){
//         super()
//         console.log('dit is de constructor van klas b')

//     }
    
// }

// const b = new B()





