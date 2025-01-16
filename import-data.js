const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const data = require("."); 
async function uploadData() {
  const posts = data.posts; 
  const batch = firestore.batch();

  for (const key in posts) {
    const postRef = firestore.collection("posts").doc(key); 
    batch.set(postRef, posts[key]);
  }

  await batch.commit();
  console.log("Datos importados exitosamente!");
}

uploadData().catch(console.error);
