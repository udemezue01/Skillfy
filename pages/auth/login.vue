<template>
  <div class="min-h-screen bg-gray-50 font-body flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
    
    <!-- Brand Header -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
      <NuxtLink to="/" class="inline-flex items-center gap-2.5 text-gray-900 hover:opacity-90 transition-opacity">
        <div class="p-2 bg-red-50 rounded-xl text-red-600 border border-red-100">
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

      <h2 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        Sign in to your account
      </h2>
      <p class="text-sm text-gray-500">
        Welcome back! Please enter your details to continue.
      </p>
    </div>

    <!-- Auth Card -->
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-6 sm:px-10 shadow-xl shadow-gray-200/50 rounded-2xl border border-gray-100 space-y-6">
        
        <!-- Google Sign-In Button -->
        <button 
          @click="handleGoogleLogin"
          type="button"
          class="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-2xs"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <!-- Divider -->
        <div class="relative flex items-center justify-center">
          <div class="w-full border-t border-gray-200"></div>
          <span class="absolute bg-white px-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
            Or with email
          </span>
        </div>

        <!-- Email & Password Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          
          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1.5">
              <input 
                v-model="email" 
                type="email" 
                id="email" 
                autocomplete="email" 
                required 
                placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1.5 relative">
              <input 
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
                autocomplete="current-password" 
                required 
                placeholder="••••••••"
                class="w-full pl-4 pr-10 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
              <button 
                type="button" 
                @click="showPassword = !showPassword" 
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Toggle password visibility"
              >
                <!-- Eye Icon -->
                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <!-- Eye Off Icon -->
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.04 10.04 0 012.122-.363c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21M3 3l18 18" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input 
                v-model="rememberMe" 
                id="remember-me" 
                type="checkbox" 
                class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded cursor-pointer" 
              />
              <label for="remember-me" class="ml-2 block text-xs font-medium text-gray-700 cursor-pointer">
                Remember me
              </label>
            </div>

            <NuxtLink to="/auth/forgot-password" class="text-xs font-semibold text-red-600 hover:text-red-700 transition-colors">
              Forgot password?
            </NuxtLink>
          </div>

          <!-- Error Alert Banner -->
          <div v-if="error" class="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-medium text-red-600">
            {{ error }}
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 transition-all shadow-md shadow-red-600/20 cursor-pointer"
          >
            <span v-if="!isLoading">Sign in</span>
            <span v-else class="flex items-center gap-2">
              <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
          </button>
        </form>

      </div>

      <!-- Registration Footer -->
      <p class="mt-6 text-center text-sm text-gray-500">
        Don't have an account?
        <NuxtLink to="/auth/register" class="font-semibold text-red-600 hover:text-red-700 transition-colors">
          Create an account
        </NuxtLink>
      </p>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const rememberMe = ref(false)
const showPassword = ref(false)
const isLoading = ref(false)
const error = ref(null)

const handleLogin = async () => {
  error.value = null
  isLoading.value = true
  
  try {
    // Authentication Logic Here
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API latency
    navigateTo('/')
  } catch (err) {
    error.value = err.message || "Invalid email or password. Please try again."
  } finally {
    isLoading.value = false
  }
}

const handleGoogleLogin = () => {
  // Trigger Google OAuth Redirect / Provider Sign-In
  console.log("Redirecting to Google OAuth...")
}
</script>