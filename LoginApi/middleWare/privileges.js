const User = require('../modules/users');

    const privliges = async(req,res,next)=>{
        let status ={
            admiin:admin,
            gold:Gold,
            silver:Silver,
            bronze:Bronze
        }
        if(status = gold){
            return true
            // try{
            // const user
            // }catch(e){
            //     res.status(400).send(e, 'could not assign a sub type')
            // }
        }

    }
    module.exports = privliges;

























// const canViewProject(user, )

// const User = require('../modules/users')
// //this is going to be a middle ware that will autimaticly assign new users to user status privliges

// //it will be a number system up to 5

// //look into npm user group and rouls

// //this number is important it can be a pass key. people with a 1 key has as full access to the web site can manipulated at will.

// //level 5 is users with no subscription content will be limited.
// const privliges = async(req,res,next)=>{
//     try{
//         const user
//     }catch(e){
//         res.status(400).send(e)
//     }

// }

// module.exports = privliges;