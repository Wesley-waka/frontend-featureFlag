import { useFeatureFlagsStore } from "../stores/featureFlags"

export default defineNuxtRouteMiddleware((to, from) => {
    // Only run on client-side
    if (process.client) {
      const featureFlagsStore = useFeatureFlagsStore()
      
      // Example of protecting routes based on feature flags
      if (to.path === '/beta-features' && !featureFlagsStore.isFeatureEnabled('betaFeatures')) {
        return navigateTo('/feature-flags')
      }
    }
  })