<script setup>
defineProps(['error'])
</script>
<template>
  <h1>
    Errors Occured
    {{ error.message }}
  </h1>
</template>
