export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client-side
  if (process.client) {
    const featureFlagsStore = useFeatureFlagsStore()
    
    // Initialize feature flags from local storage on app startup
    featureFlagsStore.loadPersistedFeatureFlags()
  }
})