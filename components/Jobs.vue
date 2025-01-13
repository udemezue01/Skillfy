<template>
  <div class = "bg-gray-100 flex items-center justify-center p-12 space-y-5 flex-col">
    <h1 class="text-xl">Latest Jobs</h1>
    
  
    <ul role="list" class="divide-y divide-gray-100 bg-white space-y-12 w-full lg:w-4/6 p-6" v-for="job in jobs" :key="job.id">

  <li class="flex justify-between gap-x-6 py-5 shadown-sm rounded-sm ">
    <div class="flex min-w-0 gap-x-4 ">
      <img class="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm/6 font-semibold text-gray-800">{{ job.company_name }}</p>
        <p class="mt-1 font truncate text-md text-gray-900 flex space-x-1 items-center">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-lime-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
</svg>

          {{job.title}}</p>

        <p class="mt-1 truncate text-sm text-black flex items-center">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="size-4 text-lime-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

          
          
          {{job.tag}}
        
        </p>

      </div>

    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm/6 text-gray-900">{{job.tag}}</p>
      <p class="mt-1 text-xs/5 text-gray-500">Posted <time datetime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>

</ul>



  </div>
</template>

<script setup>
import { useJobStore } from "../stores/job";
import { storeToRefs } from "pinia";

const jobStore = useJobStore();
const { jobs } = storeToRefs(jobStore);

onMounted(() => {
  jobStore.fetchJobs();
});
</script>
