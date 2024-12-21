import { defineStore } from "pinia";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "../firebase";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    error: null,
  }),
  actions: {
    async register(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.error = null;
      } catch (error) {
        this.error = error.message;
      }
    },
    async login(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        this.error = null;
      } catch (error) {
        this.error = error.message;
      }
    },
    async logout() {
      await signOut(auth);
      this.user = null;
    },
  },
});
