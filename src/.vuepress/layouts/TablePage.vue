<script setup lang="ts">
import { MainLayout, PageContent } from 'vuepress-theme-hope/client'

const customContentStyle = {
  'width': 'calc(100vw)',
  '--content-width': 'calc(100vw)',
}

</script>

<template>
  <MainLayout no-sidebar >
    <PageContent :style="customContentStyle"/>
  </MainLayout>
</template>

<style scoped lang="scss">

</style>