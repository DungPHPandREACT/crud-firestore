import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  deleteDoc,
  doc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

document.getElementById('submit').onclick = async function () {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const author = document.getElementById('author').value;

  if (title.length <= 3) {
    alert('Yêu cầu nhập title phải từ 4 kí tự trở lên');
  } else if (content.length <= 20) {
    alert('Yêu cầu nhập content phải từ 21 kí tự trở lên');
  } else if (author.length < 2) {
    alert('Yêu cầu nhập tên tác giả phải từ 2 kí tự trở lên');
  } else {
    const docRef = await addDoc(collection(db, 'posts'), {
      title,
      content,
      author,
    });
    console.log('Document written with ID: ', docRef.id);
  }
};

let stringHTML = '';

const querySnapshot = await getDocs(collection(db, 'posts'));
querySnapshot.forEach((doc) => {
  stringHTML += `
        <a href='./detail.html?id=${doc.id}'>${doc.data().title}</a>
    `;
});

document.getElementById('content-posts').innerHTML = stringHTML;

document.getElementById('delete').onclick = async function () {
  const response = await deleteDoc(doc(db, 'posts', '23RhSVbLr6GmGHScqj2G'));
  console.log(response);
};

document.getElementById('update').onclick = async function () {
  const postCollection = doc(db, 'posts', '3ebgcbVumNFvpr2dV5Vc');

  const newPost = {
    email: 'testupdate',
    password: 'testupdate',
  };
  // Set the "capital" field of the city 'DC'
  const response = await updateDoc(postCollection, newPost);
  console.log(response);
};
