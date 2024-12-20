<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Add a Job</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <input type="file" @change="handleFileUpload" class="input" />
      <input v-model="job.company_name" placeholder="Company Name" class="input" />
      <input v-model="job.title" placeholder="Job Title" class="input" />
      <textarea v-model="job.description" placeholder="Job Description" class="input"></textarea>
      <input v-model="job.salary" placeholder="Salary" class="input" />
      <input v-model="job.tag" placeholder="Tags (comma separated)" class="input" />
      <button class="btn">Add Job</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useJobStore } from "../stores/job";

const jobStore = useJobStore();
const job = ref({
  company_name: "",
  title: "",
  description: "",
  salary: "",
  tag: "",
});
const logoFile = ref(null);

const handleFileUpload = (event) => {
  logoFile.value = event.target.files[0];
};

const submitForm = async () => {
  await jobStore.addJob(
    {
      ...job.value,
      tag: job.value.tag.split(",").map((t) => t.trim()),
    },
    logoFile.value
  );
  alert("Job added!");
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
}
.btn {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
}
</style>
