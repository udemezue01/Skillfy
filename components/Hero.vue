<template>
  <section class="text-gray-600 font-body bg-gradient-to-b from-gray-50/50 to-white">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      
      <div class="text-center lg:w-4/5 w-full space-y-8 flex flex-col items-center">
        
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs sm:text-sm font-semibold tracking-wide">
          <span class="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
          Over 10,000+ Active Remote Roles
        </div>

        <div class="space-y-4 max-w-3xl">
          <h1 class="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            The best remote jobs all over the internet
          </h1>
          <p class="leading-relaxed text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Skillfy is the #1 place to find remote jobs. Discover flexible, high-paying career opportunities from top global companies today.
          </p>
        </div>

        <form 
          @submit.prevent="handleSearch" 
          class="w-full max-w-4xl bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row items-center gap-3 transition-all"
        >
          <div class="relative flex-1 w-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Job title, skill, or keyword..." 
              class="w-full pl-11 pr-4 py-3.5 text-gray-900 placeholder-gray-400 bg-transparent rounded-xl focus:outline-none text-base"
              aria-label="Search job title or keyword"
            />
          </div>

          <div class="hidden md:block w-px h-8 bg-gray-200"></div>

          <div class="relative w-full md:w-56 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <select 
              v-model="selectedCategory"
              class="w-full pl-11 pr-8 py-3.5 text-gray-700 bg-transparent rounded-xl focus:outline-none appearance-none text-base cursor-pointer"
              aria-label="Select Category"
            >
              <option value="">All Categories</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="marketing">Marketing</option>
              <option value="design">Design</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400 absolute right-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <button 
            type="submit" 
            class="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-md shadow-red-600/20 text-base flex-shrink-0"
          >
            Find Jobs
          </button>
        </form>

        <div class="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm pt-2">
          <span class="text-gray-500 font-medium">Popular Searches:</span>
          <button 
            v-for="tag in popularTags" 
            :key="tag"
            @click="quickSearch(tag)"
            type="button"
            class="px-3 py-1 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-gray-700 hover:text-gray-900 transition-colors shadow-2xs"
          >
            {{ tag }}
          </button>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-3 pt-4 w-full sm:w-auto">
          <NuxtLink 
            to="/auth/register" 
            class="inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-700 border-0 py-3 px-8 focus:outline-none rounded-xl text-base font-semibold shadow-sm transition-all"
          >
            Post a Job
          </NuxtLink>
          <NuxtLink 
            to="/auth/login" 
            class="inline-flex items-center justify-center text-gray-700 bg-gray-100 hover:bg-gray-200 border-0 py-3 px-8 focus:outline-none rounded-xl text-base font-semibold transition-all"
          >
            Sign In
          </NuxtLink>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('')
const popularTags = ['React', 'Node.js', 'Vue', 'Python', 'Remote US']

const handleSearch = () => {
  navigateTo({
    path: '/jobs',
    query: {
      q: searchQuery.value,
      category: selectedCategory.value
    }
  })
}

const quickSearch = (tag) => {
  searchQuery.value = tag
  handleSearch()
}
</script>