<script setup lang="ts">
import { definePeriodicCall } from '@/lib/vue';

const { onCalled, onError } = defineProps<{
  onCalled: () => number | void;
  onError?: (error: any) => number | void;
}>();

definePeriodicCall(
  async () => {
    return onCalled();
  },
  async (error) => {
    if (onError) {
      return onError(error);
    }

    return;
  },
);
</script>

<template>
  <div></div>
</template>
