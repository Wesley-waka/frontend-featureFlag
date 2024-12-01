<template>
    <div class="feature-flags-page">
      <h1>Feature Flag Management</h1>
      <FeatureFlagList />
    </div>
  </template>
  
  <script setup>
  import { useFeatureFlagsStore } from '../../stores/featureFlags';

  const featureFlagsStore = useFeatureFlagsStore()
  
  // Load persisted flags on page load
  onMounted(() => {
    featureFlagsStore.loadPersistedFeatureFlags()
  })
  </script>