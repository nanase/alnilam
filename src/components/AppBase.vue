<script setup lang="ts">
import { ref } from 'vue';
import ThemeToggleButton from './ThemeToggleButton.vue';

const { toolbarTitle } = defineProps<{
  toolbarTitle?: string;
}>();

const errorSnackbar = ref<boolean>();

defineExpose({
  showErrorSnackbar: function () {
    errorSnackbar.value = true;
  },
  closeErrorSnackbar: function () {
    errorSnackbar.value = false;
  },
});
</script>

<template>
  <v-app>
    <slot name="mainPrepend"></slot>

    <v-snackbar v-model="errorSnackbar" timeout="10000">
      <slot name="errorSnackbar">データの読み込みができませんでした。しばらくしてから再読み込みしてください。</slot>
      <template #actions>
        <v-btn color="red-lighten-2" variant="text" @click="errorSnackbar = false">閉じる</v-btn>
      </template>
    </v-snackbar>

    <v-main>
      <v-app-bar v-bind="$attrs">
        <slot name="appbarPrepend"></slot>
        <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
        <slot name="appbarAppend"></slot>
        <template #append>
          <slot name="toolbarPrepend"></slot>
          <ThemeToggleButton />
          <slot name="toolbarAppend"></slot>
        </template>
      </v-app-bar>

      <slot name="header"></slot>

      <v-container>
        <slot></slot>
      </v-container>

      <slot name="footer"></slot>
    </v-main>

    <slot name="mainAppend"></slot>
  </v-app>
</template>
