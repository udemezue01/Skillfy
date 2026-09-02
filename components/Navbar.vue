<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
      <div class="flex items-center justify-between h-16 md:h-20">
        
        <!-- Brand Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center gap-2.5 text-gray-900 hover:opacity-90 transition-opacity">
            <div class="p-2 bg-red-50 rounded-lg text-red-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-6 w-6 stroke-current" 
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
            <span class="font-extrabold text-xl tracking-tight text-gray-900">Skillfy</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 transition-colors"
            active-class="text-red-600 font-semibold bg-red-50/80 hover:bg-red-50 hover:text-red-600"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Desktop Action Buttons -->
        <div class="hidden lg:flex items-center space-x-3">
          <NuxtLink
            to="/auth/login"
            class="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            to="/auth/register"
            class="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-sm hover:shadow transition-all"
          >
            Post a Job
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex lg:hidden">
          <button
            @click="toggleDropDown"
            type="button"
            class="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors"
            :aria-expanded="isDropDown"
            aria-label="Toggle Navigation Menu"
          >
            <!-- Hamburger Icon (Closed State) -->
            <svg v-if="!isDropDown" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Close Icon (Open State) -->
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isDropDown" class="lg:hidden border-t border-gray-100 bg-white shadow-lg">
        <div class="px-4 pt-3 pb-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="isDropDown = false"
            class="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            active-class="text-red-600 font-semibold bg-red-50"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Action Buttons -->
        <div class="pt-3 pb-4 border-t border-gray-100 px-4 space-y-2">
          <NuxtLink
            to="/auth/login"
            @click="isDropDown = false"
            class="block w-full text-center px-4 py-2.5 rounded-lg text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            to="/auth/register"
            @click="isDropDown = false"
            class="block w-full text-center px-4 py-2.5 rounded-lg text-base font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
          >
            Post a Job
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isDropDown = ref(false)

const toggleDropDown = () => {
  isDropDown.value = !isDropDown.value
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Frontend', path: '/frontend' },
  { label: 'Backend', path: '/backend' },
  { label: 'Marketing', path: '/marketing' }
]
</script>