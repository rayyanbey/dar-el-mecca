"use server"

import connectDB from "../config/dbConfig"
import Event from "../models/event.models";

async function getUmrahData(title){
   await connectDB();

   try{
    const umrahs =  await Event.find({type:'U',title:title});
    if(umrahs.length === 0){
        console.log(`No umrah found for ${title}`);
    }
    console.log(`Data Found`);
    return umrahs;
   }
   catch(error){
    console.log("Error in finding data", error.message)
   }
}

async function getHajjData(title){
    await connectDB();

    try{
        const hajjs =  await Event.find({type:'H',title:title});
        if(hajjs.length === 0){
            console.log(`No hajj found for ${title}`);
        }
        console.log(`Data Found`);
        return hajjs;
       }
       catch(error){
        console.log("Error in finding data", error.message)
        return null
       }
}

async function getTourData(title){
    await connectDB();

    try{
        const tours =  await Event.find({type:'T',title:title});
        if(tours.length === 0){
            console.log(`No tour found for ${title}`);
        }
        console.log(`Data Found`);
        return tours;
       }
       catch(error){
        console.log("Error in finding data", error.message)
        return null
       }
}



export{
    getUmrahData,
    getHajjData,
    getTourData
}