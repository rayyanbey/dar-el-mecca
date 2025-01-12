import { getContactInformation } from "../../../controllers/company.controller"

export const GET = async (req, res) => {
    return await getContactInformation(req, res)
}