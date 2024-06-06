import { addDoc, collection, doc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export const addReading = async (dayId, readingData) => {

    try {
        // Add reading to specific day
        //1. specify where we want the data to be added
        const dayRef = doc(db, "days", dayId) //specific doc's ID
        //2. specify the subcollection in this document
        const readingRef = collection(dayRef, "readings")

        //3. add document into this subcollection that we have
        const docRef = await addDoc(readingRef, readingData)

        console.log("Success adding doc with id: " + docRef.id)

        return true //success

    } catch(e) {
        console.log("Something went wrong adding reading document: "+ e)
        return false //failed

    }
    
} 

//9iY6SzqaYbeEO9zgVwgn  =>  {"icon": "sun", "name": "Thursday"}
//lTVuR3l4rfTVoKgDrSKv  =>  {"icon": "cloud", "name": "Friday"}


export const getAllDays = async () => {

    try {
         //1. specify where we want to get the data from
        const collectionRef = collection(db, "days");

        //bonus: order by a field in my documents
        const q = query(collectionRef, orderBy("dayOfWeek", "asc"))

        //2. specify what it is that we want to do with this collection
        const querySnapshot = await getDocs(q);

        //3. process my data to be managable
        var daysData = [] //<- What I want to return

        //loop through each document
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        
            var theDay = {...doc.data(), id: doc.id}
            daysData.push(theDay)
        });

        return daysData

    } catch (e) { //<- catchning the break of our app, so that it doesn' happen

        console.log("Something went wrong getting our days: " + e)
        return []

    }
   
}