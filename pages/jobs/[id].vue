<template>
  <div class="min-h-screen bg-gray-50 font-body py-8 sm:py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      <!-- Breadcrumb Navigation -->
      <nav class="flex items-center text-xs sm:text-sm text-gray-500 gap-2">
        <NuxtLink to="/" class="hover:text-red-600 transition-colors">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/frontend" class="hover:text-red-600 transition-colors">Frontend</NuxtLink>
        <span>/</span>
        <span class="text-gray-900 font-medium truncate">{{ job.title }}</span>
      </nav>

      <!-- Main Job Header Card -->
      <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="flex items-start sm:items-center gap-5">
          <img 
            :src="job.companyLogo" 
            :alt="job.companyName" 
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-gray-200 flex-shrink-0 bg-gray-50"
          />
          <div class="space-y-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-sm font-bold text-gray-600">{{ job.companyName }}</span>
              <span class="px-2.5 py-0.5 text-xs font-semibold text-red-600 bg-red-50 rounded-md border border-red-100">
                {{ job.category }}
              </span>
              <span v-if="job.featured" class="px-2.5 py-0.5 text-xs font-semibold text-amber-700 bg-amber-50 rounded-md border border-amber-100">
                Featured Role
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {{ job.title }}
            </h1>

            <div class="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-500 pt-1">
              <span class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ job.location }}
              </span>

              <span class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ job.type }}
              </span>

              <span class="flex items-center gap-1.5 font-semibold text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ job.salary }}
              </span>
            </div>
          </div>
        </div>

        <!-- Header Actions -->
        <div class="flex items-center gap-3 flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
          <button 
            @click="toggleSave" 
            type="button" 
            class="p-3 rounded-xl border border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all"
            :aria-label="isSaved ? 'Unsave Job' : 'Save Job'"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="w-5 h-5" 
              :fill="isSaved ? 'currentColor' : 'none'" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              stroke-width="2"
              :class="isSaved ? 'text-red-600' : ''"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>

          <a 
            :href="job.applyUrl" 
            target="_blank" 
            class="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-xl transition-all shadow-md shadow-red-600/20 text-base"
          >
            Apply Now
          </a>
        </div>
      </div>

      <!-- Main Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Left Column: Job Overview & Description -->
        <div class="lg:col-span-2 space-y-8">
          
          <!-- Job Description Card -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6">
            <div class="space-y-3">
              <h2 class="text-xl font-extrabold text-gray-900 tracking-tight">About the Role</h2>
              <p class="text-gray-600 leading-relaxed text-base">
                {{ job.description }}
              </p>
            </div>

            <!-- Key Responsibilities -->
            <div class="space-y-4 pt-2">
              <h3 class="text-lg font-bold text-gray-900">Key Responsibilities</h3>
              <ul class="space-y-2.5 text-gray-600">
                <li v-for="(item, idx) in job.responsibilities" :key="idx" class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="p-1 bg-red-50 text-red-600 rounded-md mt-0.5 flex-shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Requirements -->
            <div class="space-y-4 pt-2">
              <h3 class="text-lg font-bold text-gray-900">Requirements & Qualifications</h3>
              <ul class="space-y-2.5 text-gray-600">
                <li v-for="(req, idx) in job.requirements" :key="idx" class="flex items-start gap-3 text-sm sm:text-base">
                  <span class="p-1 bg-red-50 text-red-600 rounded-md mt-0.5 flex-shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{{ req }}</span>
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div class="space-y-4 pt-2">
              <h3 class="text-lg font-bold text-gray-900">Perks & Benefits</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  v-for="(benefit, idx) in job.benefits" 
                  :key="idx"
                  class="p-3.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-3"
                >
                  <div class="p-2 bg-white rounded-lg text-red-600 shadow-2xs">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span class="text-sm font-semibold text-gray-800">{{ benefit }}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- About the Company Card -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-4">
            <h2 class="text-xl font-extrabold text-gray-900">About {{ job.companyName }}</h2>
            <p class="text-gray-600 leading-relaxed text-sm sm:text-base">
              {{ job.aboutCompany }}
            </p>
            <div class="pt-2">
              <a 
                :href="job.companyWebsite" 
                target="_blank" 
                class="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
              >
                Visit official company website
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <!-- Right Column: Sticky Sidebar -->
        <div class="space-y-6">
          
          <!-- Quick Job Overview Sidebar Card -->
          <div class="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-6 sticky top-24">
            <h3 class="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">
              Job Summary
            </h3>

            <div class="space-y-4 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Date Posted</span>
                <span class="font-semibold text-gray-900">{{ job.postedDate }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Experience Level</span>
                <span class="font-semibold text-gray-900">{{ job.experienceLevel }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Employment Type</span>
                <span class="font-semibold text-gray-900">{{ job.type }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Salary Range</span>
                <span class="font-semibold text-gray-900">{{ job.salary }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-500">Company Size</span>
                <span class="font-semibold text-gray-900">{{ job.companySize }}</span>
              </div>
            </div>

            <!-- Apply & Share Buttons -->
            <div class="space-y-3 pt-2">
              <a 
                :href="job.applyUrl" 
                target="_blank" 
                class="w-full inline-flex items-center justify-center px-4 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-xl transition-all shadow-md shadow-red-600/20 text-sm"
              >
                Apply for this Position
              </a>

              <button 
                @click="copyJobLink" 
                type="button" 
                class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {{ linkCopied ? 'Link Copied!' : 'Share Job Opening' }}
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSaved = ref(false)
const linkCopied = ref(false)

const toggleSave = () => {
  isSaved.value = !isSaved.value
}

const copyJobLink = () => {
  if (import.meta.client) {
    navigator.clipboard.writeText(window.location.href)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 3000)
  }
}

// Mock Job Detail Object
const job = ref({
  id: 1,
  title: 'Senior Vue.js / Nuxt 3 Developer',
  companyName: 'Acme Technologies',
  companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=160&auto=format&fit=crop&q=80',
  category: 'Frontend',
  featured: true,
  location: '100% Remote (Worldwide)',
  type: 'Full-Time',
  salary: '$130,000 - $160,000 / yr',
  experienceLevel: 'Senior (4+ Years)',
  companySize: '50 - 200 Employees',
  postedDate: 'September 2, 2026',
  applyUrl: 'https://example.com/careers/apply',
  companyWebsite: 'https://example.com',
  description: 'We are seeking a talented Senior Frontend Developer with deep Vue 3 and Nuxt 3 expertise to join our distributed engineering team. You will lead the development of our customer-facing web application, architect scalable UI components, and optimize web performance for millions of global active users.',
  responsibilities: [
    'Architect, build, and maintain high-performance web applications using Nuxt 3, Vue 3 Composition API, and Tailwind CSS.',
    'Collaborate directly with product managers and UI/UX designers to translate Figma prototypes into pixel-perfect web interfaces.',
    'Optimize frontend bundle sizes, Core Web Vitals, and runtime performance across modern mobile and desktop browsers.',
    'Write clean, unit-tested, and well-documented modular code following Vue/Nuxt best architectural practices.'
  ],
  requirements: [
    '4+ years of professional web development experience using Vue.js (Vue 3, Pinia, Vue Router).',
    'Demonstrated mastery of Nuxt 3, Server-Side Rendering (SSR), and modern REST/GraphQL APIs.',
    'Expert knowledge of Tailwind CSS, HTML5, TypeScript, and state management patterns.',
    'Strong track record of working effectively in asynchronous, remote-first global teams.'
  ],
  benefits: [
    '100% Flexible Remote Work',
    'Unlimited Paid Time Off (PTO)',
    '$3,000 Annual Learning Stipend',
    'Latest M3 MacBook Pro Provided',
    'Comprehensive Health & Dental Coverage',
    '401(k) Matching up to 5%'
  ],
  aboutCompany: 'Acme Technologies is a modern SaaS platform powering real-time workflow automation for remote enterprise teams. Founded in 2021, we operate as a fully remote team spanning 18 different time zones.'
})
</script>