import { getBusinessHours } from "../../../controllers/company.controller"

export const GET = async (req, res) => {
  return await getBusinessHours(req, res)
}