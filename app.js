import {
  collection,
  addDoc,
  getFirestore,
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
