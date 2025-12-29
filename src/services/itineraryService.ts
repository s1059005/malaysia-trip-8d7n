import { ref, get, set, child } from "firebase/database";
import { db } from "../firebase";
import { ItineraryDay } from "../../types";
import { ITINERARY_DATA } from "../../constants";

const DB_PATH = "itinerary";

// Fetch itinerary from Firebase. Falls back to local constants if empty (or handling initial load).
export const fetchItinerary = async (): Promise<ItineraryDay[]> => {
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, DB_PATH));
        if (snapshot.exists()) {
            return snapshot.val() as ItineraryDay[];
        } else {
            console.log("No data available in Firebase, returning local default.");
            return ITINERARY_DATA;
        }
    } catch (error) {
        console.error("Error fetching itinerary:", error);
        throw error;
    }
};

// Save itinerary to Firebase (for Admin)
export const saveItinerary = async (data: ItineraryDay[]): Promise<void> => {
    try {
        await set(ref(db, DB_PATH), data);
        console.log("Itinerary saved to Firebase successfully.");
    } catch (error) {
        console.error("Error saving itinerary to Firebase:", error);
        throw error;
    }
};
