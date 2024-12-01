<template>
    <div>
      <h1>Demo Page with Feature Flags</h1>
      
      <div v-if="showNewDashboard">
        <h2>New Dashboard (Feature Flagged)</h2>
        <p>This is the new dashboard only visible when the feature flag is enabled.</p>
      </div>
  
      <div v-if="showExperimentalChat">
        <h2>Experimental Chat (Feature Flagged)</h2>
        <p>Experimental chat feature is available!</p>
      </div>
  
      <div v-if="isDarkModeEnabled">
        <p>Dark Mode is currently enabled</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFeatureFlagsStore } from '../../stores/featureFlags';
  
  
  const featureFlagsStore = useFeatureFlagsStore()
  
  const showNewDashboard = computed(() => 
    featureFlagsStore.isFeatureEnabled('newDashboard')
  )
  
  const showExperimentalChat = computed(() => 
    featureFlagsStore.isFeatureEnabled('experimentalChat')
  )
  
  const isDarkModeEnabled = computed(() => 
    featureFlagsStore.isFeatureEnabled('darkMode')
  )
  </script>
  