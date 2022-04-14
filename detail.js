import {
  doc,
  getDoc,
  getFirestore,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

import { app } from './config.js';

const db = getFirestore(app);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

const docRef = doc(db, 'posts', id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log('Document data:', docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log('No such document!');
}
