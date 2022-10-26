import {
	collection,
	addDoc,
	Timestamp,
	getFirestore,
} from 'firebase/firestore';
// firebase
import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/**
 *
 * @param {string} name
 * @param {string} email
 * @param {string} message
 */
export const PostFormData = async (name, email, message) => {
	await addDoc(collection(db, 'contactform'), {
		name: name,
		email: email,
		message: message,
		date: Timestamp.now(),
	});
};
