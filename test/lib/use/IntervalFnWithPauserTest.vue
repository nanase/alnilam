<script setup lang="ts">
import type { useIntervalFn } from '@vueuse/core';
import type { MaybeRefOrGetter } from 'vue';
import { useIntervalFnWithPauser } from '@/lib/use';

const { cb, pauser, interval, options } = defineProps<{
  cb: Parameters<typeof useIntervalFn>[0];
  pauser: MaybeRefOrGetter<boolean>;
  interval: Parameters<typeof useIntervalFn>[1];
  options?: Parameters<typeof useIntervalFn>[2];
}>();

useIntervalFnWithPauser(cb, pauser, interval, options);
</script>

<template>
  <div></div>
</template>
