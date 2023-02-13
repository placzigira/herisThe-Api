const multer= require('multer')

const Storage= multer.diskStorage({
    Destination: (req,file,cb)=>{
        cb(null, './uploads')
    },
    Filename: (req,file,cb)=>{
        cb(null, `${new date().toISOString} - ${file.originalname}`)
    }
})

const fileFilter= (req,file,cb)=>{
    if(file.mimetype=== 'image/jpg' || file.mimetype=== 'image/jpeg' ||file.mimetype=== 'image/png'){
        cb(null,true)
    }else{
        cb({Message:"Unsupported File Format"}, false)
    }
}
const upload= multer({
    storage:Storage,
    limits:{fileSize:1024*1024},
    fileFilter:fileFilter
})
module.exports= upload