<template>
	
	<div class="bg-gray-100 h-screen">

		<div class="flex items-center justify-center p-8">
    <h1 class="text-3xl font-bold mb-5"> Jobs </h1>
   
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="job in jobs"
        :key="job.id"
        class="p-4 border rounded shadow hover:shadow-lg transition"
      >
        <img :src="job.company_logo" alt="Logo" class="w-16 h-16 mb-4" />
        <h2 class="text-xl font-semibold">{{ job.title }}</h2>
        <p class="text-gray-500">{{ job.company_name }}</p>
        <p class="mt-2 text-gray-700">{{ job.description }}</p>
        <p class="mt-2 font-bold">{{ job.salary }}</p>
        <div class="mt-4">
          <span
            v-for="tag in job.tag"
            :key="tag"
            class="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm mr-2"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

  </div>


	</div>


</template>

<script setup>
import { useJobStore } from "../stores/job";
import { onMounted } from "vue";

const jobStore = useJobStore();

// Fetch jobs when the component is mounted
onMounted(() => {
  jobStore.fetchJobs();
});

// Jobs will be reactive, so when fetched, they will automatically be updated
const jobs = jobStore.jobs;
</script>
