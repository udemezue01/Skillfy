<template>
  <div class="min-h-screen bg-gray-50 font-body flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    
    <!-- Top Brand Logo & Header -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-900 hover:opacity-90 transition-opacity">
        <div class="p-2.5 bg-red-50 rounded-xl text-red-600 border border-red-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-7 w-7 stroke-current" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
            <path d="M11.683 12.317l5.759 -5.759" />
            <circle cx="5.5" cy="5.5" r="1.5" />
            <circle cx="18.5" cy="5.5" r="1.5" />
            <circle cx="18.5" cy="18.5" r="1.5" />
            <circle cx="8.5" cy="15.5" r="4.5" />
          </svg>
        </div>
        <span class="font-extrabold text-2xl tracking-tight text-gray-900">Skillfy</span>
      </NuxtLink>

      <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
        Create your account
      </h2>
      <p class="text-sm text-gray-500">
        Join thousands of professionals finding remote jobs daily
      </p>
    </div>

    <!-- Auth Card -->
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-6 shadow-xl shadow-gray-200/50 rounded-2xl border border-gray-100 sm:px-10">
        
        <!-- Google Social Login Button -->
        <div>
          <button 
            @click="handleGoogleLogin" 
            type="button" 
            class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-all shadow-2xs"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-white px-3 text-gray-400 font-medium tracking-wider">Or register with email</span>
          </div>
        </div>

        <!-- Email Registration Form -->
        <form @submit.prevent="handleRegister" class="space-y-4">
          
          <!-- First Name & Last Name (Side-by-Side Grid) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-700">First name</label>
              <div class="mt-1.5">
                <input 
                  v-model="firstName" 
                  type="text" 
                  id="first-name" 
                  required 
                  placeholder="Jane"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-700">Last name</label>
              <div class="mt-1.5">
                <input 
                  v-model="lastName" 
                  type="text" 
                  id="last-name" 
                  required 
                  placeholder="Doe"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-sm transition-all"
                />
              </div>
            </div>
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700">Email address</label>
            <div class="mt-1.5">
              <input 
                v-model="email" 
                type="email" 
                id="email" 
                autocomplete="email" 
                required 
                placeholder="you@example.com"
                class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-sm transition-all"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
            </div>
            <div class="mt-1.5">
              <input 
                v-model="password" 
                type="password" 
                id="password" 
                autocomplete="new-password" 
                required 
                placeholder="••••••••"
                class="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 text-sm transition-all"
              />
            </div>
          </div>

          <!-- Error Alert Banner -->
          <div v-if="error" class="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ error }}
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <button 
              type="submit" 
              :disabled="isLoading"
              class="w-full flex justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 transition-all shadow-md shadow-red-600/20"
            >
              <span v-if="!isLoading">Create Account</span>
              <span v-else class="flex items-center gap-2">
                <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            </button>
          </div>

        </form>

        <!-- Footer Link -->
        <p class="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <NuxtLink to="/auth/login" class="font-semibold text-red-600 hover:text-red-700 transition-colors">
            Sign in
          </NuxtLink>
        </p>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive Form Inputs
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const isLoading = ref(false);

const handleRegister = async () => {
  error.value = "";
  isLoading.value = true;

  try {
    // Example handler payload structure
    const payload = {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value
    };

    console.log("Registering user:", payload);
    
    // Simulate API call
    setTimeout(() => {
      isLoading.value = false;
      navigateTo("/auth/login");
    }, 1000);

  } catch (err) {
    isLoading.value = false;
    error.value = err.message || "Failed to create account. Please try again.";
  }
};

const handleGoogleLogin = () => {
  console.log("Initiating Google OAuth login flow...");
};
</script>