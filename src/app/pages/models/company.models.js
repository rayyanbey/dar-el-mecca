import mongoose from "mongoose";

//business hours
const businessHoursSchema = new mongoose.Schema({
    monday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    },
    tuesday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    },
    wednesday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    },
    thursday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    },
    friday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    },
    saturday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    },
    sunday:{
        open:{
            type:Boolean,
            required:true
        },
        openingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        },
        closingTime:{
            type:String,
            required:function(){
                return this.open;
            }
        }
    }
},{timestamps:true});

//contact information
const contactInformationSchema = new mongoose.Schema({
    phoneNumbers:{
        type:[String],
        required:true
    },
    email:{
        type:[String],
        required:true
    },
    faxNumbers:{
        type:[String],
        required:true
    }
})


const companySchema = new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    documentAddress:{
        type:String,
        required:true
    },
    whatsapp:{
        type:String,
        required:true
    },
    contactInformation:{
        type:contactInformationSchema,
        required:true
    },
    businessHours:{
        type:businessHoursSchema,
        required:true
    }
},{timestamps:true});


const Company = mongoose.model('Company',companySchema);
export default Company;