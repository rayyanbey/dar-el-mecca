import { NextResponse } from "next/server";
import { createReview } from "../../../controllers/review.controller";
import { upload } from "../../../middlewares/multer.middleware";
export const POST = async (req, res) => {

    upload.single('image')(req, res, async (err) => {
        if (err) {
            return NextResponse.json({
                status: 500,
                message: "An error occured while uploading image",
                error: err
            })
        }
        return await createReview(req, res);
    })
}