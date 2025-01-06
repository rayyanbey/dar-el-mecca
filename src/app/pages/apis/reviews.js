export default async function handler(req,res){

    if(req.method === 'GET'){
        //get all reviews
        try{
            res.status(200).json({message: "Reviews retrieved successfully"});
        }catch(error){
            res.status(500).json({message: "Failed to retrieve reviews"});
        }
    }

}