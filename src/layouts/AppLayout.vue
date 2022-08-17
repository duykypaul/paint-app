<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script setup lang="ts">
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue'
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'

const layout = ref()
const route = useRoute()

watch(
    () => route.meta?.layout as string | undefined,
    (metaLayout) => {

      layout.value = metaLayout || 'AppLayoutDefault'
    },
    {immediate: true}
)
</script>