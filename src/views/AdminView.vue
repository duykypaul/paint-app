<template>
  <a-layout :class="['admin-layout', 'beauty-scroll']">
    <a-layout class="admin-layout-main beauty-scroll">
      <AdminHeader/>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import AdminHeader from "@/layouts/admin/header/AdminHeader.vue";</script>

<style lang="scss">
@import "./src/assets/scss/_variables.scss";

.admin-layout {
  .admin-layout-main {
    .ant-layout-header {
      background: $base-bg-color;
    }

    .admin-header {
      top: 0;
      right: 0;
      overflow: hidden;
      transition: all 0.2s;

      &.fixed-tabs.multi-page:not(.fixed-header) {
        height: 0;
      }
    }
  }

  .admin-layout-content {
    padding: 24px 24px 0;
    /*overflow-x: hidden;*/
    /*min-height: calc(100vh - 64px - 122px);*/
  }

}
</style>
