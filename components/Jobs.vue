<template>
  <div class = "bg-gray-100 flex items-center justify-center p-12 space-y-5 flex-col">
    <h1 class="text-xl">Latest Jobs</h1>
    
  
    <ul role="list" class="divide-y divide-gray-100 bg-white space-y-12 w-full lg:w-2/4 p-6" v-for="job in jobs" :key="job.id">

  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm/6 font-semibold text-gray-900">{{ job.company_name }}</p>
        <p class="mt-1 truncate text-xs/5 text-gray-500">{{job.title}}</p>
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
