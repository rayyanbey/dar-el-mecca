import { getBusinessHoursController, getBusinessHoursSummary } from "../../../controllers/company.controller"
export const GET = async () => {
    return await getBusinessHoursSummary();
}