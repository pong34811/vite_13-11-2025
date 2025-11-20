import { getDatabase, ref, get, child } from "firebase/database";

export async function getTransactions() {
  try {
    const db = getDatabase();
    const dbRef = ref(db);

    const snapshot = await get(child(dbRef, "transactions"));

    if (snapshot.exists()) {
      const data = snapshot.val();

      // แปลง object → array
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key]
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error getting transactions:", error);
    return [];
  }
}
