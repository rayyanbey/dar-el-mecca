export const UPDATE = async (req, {params}) => {
    return await updateEventDetails(req,params.id)
}