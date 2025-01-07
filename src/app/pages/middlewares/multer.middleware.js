import multer from 'multer'
import path from 'path'

//storage setup
const storage = multer.diskstorage({
    destination: function (req,file,cb){
        cb(null,'uplaods/')
    },
    file:function(req,file,cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

//file filtering
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"), false);
    }
};

//uplaoding setup
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
});


export {
    upload
}