import { defineStore } from 'pinia';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      const querySnapshot = await getDocs(collection(db, "posts"));
      this.posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async addPost(post) {
      const docRef = await addDoc(collection(db, "posts"), post);
      this.posts.push({ id: docRef.id, ...post });
    },
  },
});
