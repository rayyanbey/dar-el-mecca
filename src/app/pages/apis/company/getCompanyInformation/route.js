import { getCompanyInformation } from "../../../controllers/company.controller"
export const GET = async () => {
    return await getCompanyInformation();
}