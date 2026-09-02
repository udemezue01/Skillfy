<template>
  <footer class="bg-gray-900 text-gray-300 font-body border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      
      <!-- Top Brand & Newsletter Banner -->
      <div class="pb-12 border-b border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <!-- Brand Summary -->
        <div class="lg:col-span-6 space-y-3">
          <NuxtLink to="/" class="inline-flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity">
            <div class="p-2 bg-red-600/10 rounded-lg text-red-500 border border-red-500/20">
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
            <span class="font-extrabold text-2xl tracking-tight text-white">Skillfy</span>
          </NuxtLink>
          <p class="text-sm text-gray-400 max-w-md leading-relaxed">
            Connecting talented professionals with top remote opportunities worldwide. Find your dream job or hire exceptional global talent today.
          </p>
        </div>

        <!-- Newsletter Subscription Box -->
        <div class="lg:col-span-6">
          <div class="bg-gray-800/60 border border-gray-700/60 p-4 sm:p-5 rounded-2xl space-y-3">
            <h3 class="text-sm font-semibold text-white tracking-wide">Subscribe to Remote Job Alerts</h3>
            <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-2">
              <input 
                v-model="email"
                type="email" 
                required
                placeholder="Enter your email address" 
                class="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                aria-label="Email address for job alerts"
              />
              <button 
                type="submit" 
                class="px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p v-if="subscribed" class="text-xs text-green-400 font-medium">✓ You have been subscribed to daily remote job alerts!</p>
          </div>
        </div>
      </div>

      <!-- Main Navigation Columns -->
      <div class="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        <!-- Column 1: Company -->
        <div class="space-y-4">
          <h2 class="text-xs font-bold text-white uppercase tracking-wider">Company</h2>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink to="/company/about" class="hover:text-red-400 transition-colors">About Us</NuxtLink></li>
            <li><NuxtLink to="/company/newsletter" class="hover:text-red-400 transition-colors">Newsletter</NuxtLink></li>
            <li><NuxtLink to="/company/contact" class="hover:text-red-400 transition-colors">Get In Touch</NuxtLink></li>
            <li>
              <NuxtLink to="/company/careers" class="inline-flex items-center gap-1.5 hover:text-red-400 transition-colors">
                Careers 
                <span class="px-1.5 py-0.2 text-[10px] font-bold bg-red-500/10 text-red-400 rounded">Hiring</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 2: Categories -->
        <div class="space-y-4">
          <h2 class="text-xs font-bold text-white uppercase tracking-wider">Categories</h2>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink to="/frontend" class="hover:text-red-400 transition-colors">Frontend Jobs</NuxtLink></li>
            <li><NuxtLink to="/backend" class="hover:text-red-400 transition-colors">Backend Jobs</NuxtLink></li>
            <li><NuxtLink to="/marketing" class="hover:text-red-400 transition-colors">Marketing Jobs</NuxtLink></li>
            <li><NuxtLink to="/design" class="hover:text-red-400 transition-colors">Design Jobs</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 3: Support -->
        <div class="space-y-4">
          <h2 class="text-xs font-bold text-white uppercase tracking-wider">Support</h2>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink to="/company/help" class="hover:text-red-400 transition-colors">Help & Support</NuxtLink></li>
            <li><NuxtLink to="/company/faq" class="hover:text-red-400 transition-colors">FAQ</NuxtLink></li>
            <li><NuxtLink to="/company/report" class="hover:text-red-400 transition-colors">Report a Problem</NuxtLink></li>
            <li><NuxtLink to="/company/blog" class="hover:text-red-400 transition-colors">Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 4: Legal -->
        <div class="space-y-4">
          <h2 class="text-xs font-bold text-white uppercase tracking-wider">Legal</h2>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink to="/company/privacy-policy" class="hover:text-red-400 transition-colors">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/company/terms-of-service" class="hover:text-red-400 transition-colors">Terms of Service</NuxtLink></li>
            <li><NuxtLink to="/company/cookie-policy" class="hover:text-red-400 transition-colors">Cookie Policy</NuxtLink></li>
            <li><NuxtLink to="/company/accessibility" class="hover:text-red-400 transition-colors">Accessibility Statement</NuxtLink></li>
          </ul>
        </div>

        <!-- Column 5: Connect -->
        <div class="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
          <h2 class="text-xs font-bold text-white uppercase tracking-wider">Contact Us</h2>
          <ul class="space-y-2.5 text-sm">
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:support@skillfy.com" class="hover:text-red-400 transition-colors">support@skillfy.com</a>
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-400">100% Remote Global</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar: Copyright & Social Links -->
      <div class="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-gray-400">
          © {{ currentYear }} Skillfy, Inc. All rights reserved.
        </p>

        <!-- Social Media Icons -->
        <div class="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all" aria-label="Facebook">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all" aria-label="X (Twitter)">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all" aria-label="Instagram">
            <svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all" aria-label="LinkedIn">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)
const currentYear = new Date().getFullYear()

const handleSubscribe = () => {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 4000)
  }
}
</script>