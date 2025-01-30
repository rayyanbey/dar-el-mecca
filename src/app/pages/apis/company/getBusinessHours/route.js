import { getBusinessHoursController } from "../../../controllers/company.controller"
export const GET = async () => {
    return await getBusinessHoursController();
}