<template>
    
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-white">
  <body class="h-full">
  ```
-->
<div class="flex h-screen bg-gray-50 flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon items-center justify-center mx-auto icon-tabler icon-tabler-affiliate h-8 w-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
              <path d="M11.683 12.317l5.759 -5.759" />
              <circle cx="5.5" cy="5.5" r="1.5" />
              <circle cx="18.5" cy="5.5" r="1.5" />
              <circle cx="18.5" cy="18.5" r="1.5" />
              <circle cx="8.5" cy="15.5" r="4.5" />
            </svg>
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6">
    <form @submit.prevent="handleRegister" class="space-y-6" action="#" method="POST">

      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="email" type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-purple-600 hover:text-purple-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input v-model="password" type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
      </div>
    </form>

     <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>

    <p class="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      <a href="#" class="font-semibold text-purple-600 hover:text-purple-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>


</template>



<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const handleRegister = async () => {
  await authStore.register(email.value, password.value);
  if (!authStore.error) {
    alert("Registered successfully!");
    window.location.href = "/login";
  }
};
</script>