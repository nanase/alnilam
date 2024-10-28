<script setup lang="ts">
import { useIntervalFnWithPauser } from '@/lib/use';
import type { MaybeRefOrGetter, useIntervalFn } from '@vueuse/core';

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
