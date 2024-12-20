<template>
  <div class = "bg-gray-100 flex items-center justify-center p-12 space-y-5 flex-col">
    <h1 class="text-xl">Job Board</h1>
    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="flex bg-white space-y-12 w-full">
        <img :src="job.company_logo" alt="Company Logo" />
        <h2>{{ job.title }}</h2> 
        <p>{{ job.company_name }}</p>
        <p>{{ job.description }}</p>
        <p>{{ job.salary }}</p>
        <div>
          <span v-for="tag in job.tag" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No jobs available</p>
    </div>
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
