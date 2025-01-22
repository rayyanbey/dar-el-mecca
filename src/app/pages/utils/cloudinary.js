import cloudinary from 'cloudinary'


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


export const uploadImageToThirdParty = async(image)=>{
    try{
        const result =  await cloudinary.v2.uploader.upload(image,{
            folder:"reviewsImages"
        })
        if(result){
            return result.secure_url
        }
        else{
            return false
        }
    }catch(error){
        return error
    }
}