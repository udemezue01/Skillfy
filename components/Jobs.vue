<template>
  <div class="bg-gray-100 min-h-screen font-body flex items-center justify-center p-6 sm:p-12 flex-col space-y-6">
    
    <!-- Section Header -->
    <div class="w-full lg:w-4/6 flex items-center justify-between">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Latest Remote Jobs</h1>
        <p class="text-sm text-gray-500 mt-1">Discover recently posted remote positions around the globe</p>
      </div>
      <span class="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100">
        {{ dummyJobs.length }} Active Roles
      </span>
    </div>

    <!-- Jobs Card List Container -->
    <div class="w-full lg:w-4/6 bg-white rounded-2xl shadow-xs border border-gray-200/80 divide-y divide-gray-100 overflow-hidden">
      <ul role="list" class="divide-y divide-gray-100">
        <li 
          v-for="job in paginatedJobs" 
          :key="job.id" 
          class="p-5 sm:p-6 hover:bg-gray-50/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <!-- Left: Company Logo & Details -->
          <div class="flex items-start sm:items-center gap-4 min-w-0">
            <img 
              class="h-12 w-12 flex-none rounded-xl bg-gray-50 object-cover border border-gray-200" 
              :src="job.logo" 
              :alt="job.company_name" 
            />
            
            <div class="min-w-0 flex-1 space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-semibold text-gray-500">{{ job.company_name }}</span>
                <span v-if="job.featured" class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-100 rounded-md">
                  Featured
                </span>
              </div>

              <!-- Job Title -->
              <NuxtLink 
                :to="`/jobs/${job.id}`" 
                class="block text-base font-bold text-gray-900 hover:text-red-600 transition-colors truncate"
              >
                {{ job.title }}
              </NuxtLink>

              <!-- Meta Info Badges -->
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 pt-0.5">
                <!-- Tag / Category -->
                <span class="inline-flex items-center gap-1 font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {{ job.tag }}
                </span>

                <!-- Job Type -->
                <span class="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ job.type }}
                </span>

                <!-- Salary -->
                <span class="flex items-center gap-1 text-gray-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ job.salary }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right: Posted Time & Action -->
          <div class="flex items-center justify-between sm:flex-col sm:items-end gap-2 flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <p class="text-xs text-gray-400">
              Posted <time :datetime="job.posted_at">{{ job.posted_at }}</time>
            </p>

            <NuxtLink 
              :to="`/jobs/${job.id}`" 
              class="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-red-600 hover:text-white rounded-lg transition-all"
            >
              Apply Now
            </NuxtLink>
          </div>
        </li>
      </ul>

      <!-- Pagination Controls -->
      <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Pagination Info -->
        <p class="text-xs text-gray-600">
          Showing <span class="font-semibold text-gray-900">{{ startIndex + 1 }}</span> to 
          <span class="font-semibold text-gray-900">{{ Math.min(endIndex, dummyJobs.length) }}</span> of 
          <span class="font-semibold text-gray-900">{{ dummyJobs.length }}</span> jobs
        </p>

        <!-- Page Buttons -->
        <div class="inline-flex items-center gap-1">
          <button 
            @click="prevPage" 
            :disabled="currentPage === 1"
            class="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
              currentPage === page 
                ? 'bg-red-600 text-white' 
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
            ]"
          >
            {{ page }}
          </button>

          <button 
            @click="nextPage" 
            :disabled="currentPage === totalPages"
            class="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Local Mock Job Data (Store Disconnected)
const dummyJobs = ref([
  {
    id: 1,
    company_name: 'Stripe',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    title: 'Senior Frontend Engineer (Vue / Nuxt)',
    tag: 'Frontend',
    type: 'Full-time',
    salary: '$130k - $160k',
    posted_at: '2h ago',
    featured: true
  },
  {
    id: 2,
    company_name: 'Vercel',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    title: 'Lead Backend Developer (Node.js)',
    tag: 'Backend',
    type: 'Full-time',
    salary: '$140k - $180k',
    posted_at: '4h ago',
    featured: false
  },
  {
    id: 3,
    company_name: 'Shopify',
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80',
    title: 'Growth Marketing Specialist',
    tag: 'Marketing',
    type: 'Full-time',
    salary: '$90k - $120k',
    posted_at: '6h ago',
    featured: false
  },
  {
    id: 4,
    company_name: 'Linear',
    logo: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=120&auto=format&fit=crop&q=80',
    title: 'Full Stack Engineer (TypeScript)',
    tag: 'Backend',
    type: 'Contract',
    salary: '$80 / hr',
    posted_at: '12h ago',
    featured: true
  },
  {
    id: 5,
    company_name: 'GitLab',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&auto=format&fit=crop&q=80',
    title: 'DevOps & Infrastructure Specialist',
    tag: 'Backend',
    type: 'Full-time',
    salary: '$120k - $150k',
    posted_at: '1d ago',
    featured: false
  },
  {
    id: 6,
    company_name: 'Figma',
    logo: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=120&auto=format&fit=crop&q=80',
    title: 'UI/UX Product Designer',
    tag: 'Design',
    type: 'Full-time',
    salary: '$110k - $140k',
    posted_at: '1d ago',
    featured: false
  },
  {
    id: 7,
    company_name: 'Notion',
    logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&auto=format&fit=crop&q=80',
    title: 'Technical Content Marketer',
    tag: 'Marketing',
    type: 'Full-time',
    salary: '$85k - $105k',
    posted_at: '2d ago',
    featured: false
  },
  {
    id: 8,
    company_name: 'Supabase',
    logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    title: 'Database Systems Architect',
    tag: 'Backend',
    type: 'Full-time',
    salary: '$150k - $190k',
    posted_at: '2d ago',
    featured: true
  }
])

// Pagination Reactive State
const currentPage = ref(1)
const itemsPerPage = ref(4)

const totalPages = computed(() => Math.ceil(dummyJobs.value.length / itemsPerPage.value))
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value)
const endIndex = computed(() => startIndex.value + itemsPerPage.value)

const paginatedJobs = computed(() => {
  return dummyJobs.value.slice(startIndex.value, endIndex.value)
})

// Navigation Methods
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const goToPage = (page) => {
  currentPage.value = page
}
</script>