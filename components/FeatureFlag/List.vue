<template>
    <div class="feature-flags-list">
      <h2>Feature Flags</h2>
      <div 
        v-for="(value, flagName) in flagsObject" 
        :key="flagName" 
        class="mb-2 flex items-center space-x-4"
      >
        <span class="flex-grow">{{ flagName }}: {{ value ? 'Enabled' : 'Disabled' }}</span>
        <FeatureFlagToggle :flagName="flagName" />
      </div>
    </div>
  </template>
  
  <script setup>
  const featureFlagsStore = useFeatureFlagsStore()
  const flagsObject = computed(() => featureFlagsStore.getAllFeatureFlags())
  </script>