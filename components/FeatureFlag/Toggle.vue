<template>
    <div class="feature-flag-toggle">
      <label class="flex items-center space-x-2">
        <span>{{ flagName }}</span>
        <input 
          type="checkbox" 
          :checked="isEnabled" 
          @change="toggleFlag"
          class="form-checkbox"
        />
      </label>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    flagName: {
      type: String,
      required: true
    }
  })
  
  const featureFlagsStore = useFeatureFlagsStore()
  const isEnabled = computed(() => featureFlagsStore.isFeatureEnabled(props.flagName))
  
  const toggleFlag = () => {
    featureFlagsStore.toggleFeatureFlag(props.flagName)
    featureFlagsStore.persistFeatureFlags()
  }
  </script>