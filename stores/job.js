import { defineStore } from 'pinia';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useJobStore = defineStore('jobStore', {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async fetchJobs() {
      const querySnapshot = await getDocs(collection(db, "Job"));
      this.jobs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));


    },
    async addJob(job) {
      await addDoc(collection(db, "job"), job);
      this.fetchJobs();
    },
  },
});
