import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Copy config here to avoid importing TS file
const firebaseConfig = {
    apiKey: "AIzaSyCCLt4nvUBrbwFB_Q8opzjldVs6fpG0RNI",
    authDomain: "malaysia-trip-8d7n.firebaseapp.com",
    databaseURL: "https://malaysia-trip-8d7n-default-rtdb.firebaseio.com",
    projectId: "malaysia-trip-8d7n",
    storageBucket: "malaysia-trip-8d7n.firebasestorage.app",
    messagingSenderId: "703678337660",
    appId: "1:703678337660:web:73781a7aecfb777e6feff9",
    measurementId: "G-GL4531SSC5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Valid for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// The json is in src/data/itinerary.json, relative to scripts/ is ../src/data/itinerary.json
const jsonPath = path.resolve(__dirname, '../src/data/itinerary.json');

const migrateData = async () => {
    try {
        console.log("Reading local data from " + jsonPath);
        const rawData = fs.readFileSync(jsonPath, 'utf-8');
        const data = JSON.parse(rawData);

        console.log("Uploading to Firebase...");
        await set(ref(db, "itinerary"), data);
        console.log("Migration successful! Data uploaded to 'itinerary' node.");
        process.exit(0);
    } catch (error) {
        console.error("Migration failed:", error);
        process.exit(1);
    }
};

migrateData();
