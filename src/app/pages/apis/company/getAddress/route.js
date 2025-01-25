import { getAddress } from "../../../controllers/company.controller"

export const GET = async (req, res) => {
    return await getAddress(req, res)
}
