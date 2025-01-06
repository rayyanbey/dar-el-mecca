export default async function handler(req,res){
    if(req.method === 'POST'){
        //adding a service
        try{
            res.status(200).json({message: "Service added successfully"});
        }catch(error){
            res.status(500).json({message: "Failed to add service"});
        }
    }else if(req.method === 'DELETE'){
        //deleting a service
        try{
            res.status(200).json({message: "Service deleted successfully"});
        }catch(error){
            res.status(500).json({message: "Failed to delete service"});
        }
    }else if(req.method === 'PUT'){
        //updating a service
        try{
            res.status(200).json({message: "Service updated successfully"});
        }catch(error){
            res.status(500).json({message: "Failed to update service"});
        }
    }else if(req.method === 'GET'){
        //get all services
        try{
            res.status(200).json({message: "Services retrieved successfully"});
        }catch(error){
            res.status(500).json({message: "Failed to retrieve services"});
        }
    }
}