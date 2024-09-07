<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import dayjs, { Dayjs, getTimezoneName } from '@/lib/dayjs';
import { useIntervalFnWithPauser } from '@/lib/use';

const {
  time = dayjs(),
  updateInterval = 200,
  stop,
  stopAnimation,
  hideDate,
  hideTime,
  hideTimezone,
  hideSeconds,
} = defineProps<{
  time?: Dayjs;
  updateInterval?: number;
  stop?: boolean;
  stopAnimation?: boolean;
  hideDate?: boolean;
  hideTime?: boolean;
  hideTimezone?: boolean;
  hideSeconds?: boolean;
}>();

const displayedTime = ref<Dayjs>(time);
const animationStyle = computed<string>(() =>
  stopAnimation ? '' : `visibility:${displayedTime.value.millisecond() < 666 ? 'visible' : 'hidden'}`,
);

watch(
  () => time,
  () => {
    displayedTime.value = time;
  },
);

useIntervalFnWithPauser(
  () => (displayedTime.value = dayjs()),
  () => stop,
  () => updateInterval,
);
</script>

<template>
  <div class="animated-clock">
    <div v-if="!hideDate" class="date">
      <div v-if="!hideTimezone" class="timezone">
        <slot name="timezone">{{ getTimezoneName(displayedTime) }}</slot>
      </div>
      <div>
        <slot name="date">{{ displayedTime.format('YYYY-MM-DD') }}</slot>
      </div>
    </div>
    <span v-if="!hideTime" class="time">
      <slot name="time" :style="animationStyle">
        <span>{{ displayedTime.format('HH') }}</span>
        <span :style="animationStyle">:</span>
        <span>{{ displayedTime.format('mm') }}</span>
        <template v-if="!hideSeconds">
          <span :style="animationStyle">:</span>
          <span>{{ displayedTime.format('ss') }}</span>
        </template>
      </slot>
    </span>
  </div>
</template>

<style lang="scss">
.animated-clock {
  padding: 0 0.5rem;

  .date {
    display: inline-block;
    font-size: 75%;
    line-height: 85%;
    padding-right: 0.5rem;

    .timezone {
      opacity: 0.5;
    }
  }

  .time {
    font-size: 110%;
  }
}
</style>
