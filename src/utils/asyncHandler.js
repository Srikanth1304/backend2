const asyncHandler=(reqHandler)=>(req,res,next)=>{
    promises.resolve(reqHandler(req,res,next)).catch((err)=>next(err));
}
export {asyncHandler}

// const asyncHandler=(fun)=>(req,res,next)=>{
//     try{
//         await fun(req,res,next);
//     }catch(error){
//         res.status(err.code||500).json{
//             sucess:false;
//             message:err;
//         }
//     }
// }