import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const fileUpload=async(localpath)=>{
    try{
        if(!localpath) return null
        const response=await cloudinary.uploader.upload('localpath',{
            resource_type:'auto'
        })
        console.log('file uuploaded successfull on cloudinary',response.url)
        return response
    }
    catch{
        fs.unlinkSync(localpath) //remove temp files in local path since upload is unsuccessfull
        return null;
    }
}
export {}