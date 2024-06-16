const admin = require('firebase-admin');
const serviceAccount = require('../firebase/serviceAccountKey');
const data = require('../firebase/student_list.json'); // Asegúrate de que la ruta sea correcta
const collectionKey = "studentList";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true }; // Cambiar `timestampsInSnapshot` a `timestampsInSnapshots`
firestore.settings(settings);

if (data && typeof data === 'object') {
    Object.keys(data).forEach(docKey => {
        firestore.collection(collectionKey).doc(docKey).set(data[docKey])
            .then(() => {
                console.log("Document " + docKey + " successfully written!");
            })
            .catch((err) => {
                console.error("Error writing document: ", err);
            });
    });
} else {
    console.error("Invalid data format. Data should be an object.");
}
