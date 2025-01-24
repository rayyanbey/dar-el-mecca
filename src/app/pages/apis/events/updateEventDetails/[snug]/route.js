export const PUT = async (req, {params}) => {
    return await updateEventDetails(req,params.id)
}