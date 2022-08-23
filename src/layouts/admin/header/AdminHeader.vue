<template>
  <a-layout-header :class="['light', 'admin-header']">
    <div :class="['admin-header-wide', layout, pageWidth]">
      <div class="admin-header-menu" :style="`width: ${menuWidth};`">
        <a-menu v-model:selectedKeys="current" mode="horizontal">
          <a-menu-item key="mail">
            Navigation One
          </a-menu-item>
          <a-menu-item key="app" disabled>
            <template #icon>
              <appstore-outlined/>
            </template>
            Navigation Two
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #icon>
              <setting-outlined/>
            </template>
            <template #title>Navigation Three - Submenu</template>
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1">Option 1</a-menu-item>
              <a-menu-item key="setting:2">Option 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
              <a-menu-item key="setting:3">Option 3</a-menu-item>
              <a-menu-item key="setting:4">Option 4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-menu-item key="alipay">
            <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </a-menu-item>
        </a-menu>
      </div>
      <div :class="['admin-header-right', 'light']">
        <a-tooltip class="header-item" title="帮助文档" placement="bottom">
          <a href="https://iczer.gitee.io/vue-antd-admin-docs/" target="_blank">
            <a-icon type="question-circle-o"/>
          </a>
        </a-tooltip>
        <!--        <header-avatar class="header-item"/>-->
        <a-dropdown class="lang header-item">
          <div style="color: red">
            <!--            <a-icon type="global"/>--> {{ langAlias }}
          </div>
          <a-menu :selected-keys="['VN']" slot="overlay">
            <a-menu-item v-for="lang in langList" :key="lang.key">{{ lang.key.toLowerCase() + ' ' + lang.name }}
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons-vue';

const langList = reactive([
  {key: 'CN', name: '简体中文', alias: '简体'},
  {key: 'VN', name: 'Việt Nam', alias: 'VietNam'},
  {key: 'US', name: 'English', alias: 'English'}
])
const pageWidth: string = 'fixed' // 'fluid'
const layout: string = 'head'
const searchActive: boolean = false

const langAlias = computed(() => {
  let lang = langList.find(item => item.key === 'VN')
  return lang?.alias
})

const menuWidth = () => {
  const headWidth = layout === 'head' ? '100% - 188px' : '100%'
  const extraWidth = searchActive ? '600px' : '400px'
  return `calc(${headWidth} - ${extraWidth})`
}


const current = ref<string[]>(['mail']);
</script>

<style lang="scss">
@import "./src/assets/scss/_variables.scss";

.admin-header {
  padding: 0;
  z-index: 2;
  box-shadow: $shadow-down;
  position: relative;
  background: $base-bg-color;

  .head-menu {
    height: 64px;
    line-height: 64px;
    vertical-align: middle;
    box-shadow: none;
  }

  &.dark {
    background: $header-bg-color-dark;
    color: white;
  }

  &.night {
    .head-menu {
      background: $base-bg-color;
    }
  }

  .admin-header-wide {
    padding-left: 24px;

    &.head.fixed {
      max-width: 1400px;
      margin: auto;
      padding-left: 0;
    }

    &.side {
      padding-right: 12px;
    }

    .logo {
      height: 64px;
      line-height: 58px;
      vertical-align: top;
      display: inline-block;
      padding: 0 12px 0 24px;
      cursor: pointer;
      font-size: 20px;
      color: inherit;

      &.pc {
        padding: 0 12px 0 0;
      }

      img {
        vertical-align: middle;
      }

      h1 {
        color: inherit;
        display: inline-block;
        font-size: 16px;
      }
    }

    .trigger {
      font-size: 20px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color .3s;

      &:hover {
        color: $primary-color;
      }
    }

    .admin-header-menu {
      display: inline-block;
    }

    .admin-header-right {
      //float: right;
      display: flex;
      color: inherit;
      width: 400px;

      .header-item {
        color: inherit;
        padding: 0 12px;
        cursor: pointer;
        align-self: center;

        a {
          color: inherit;

          i {
            font-size: 16px;
          }
        }
      }

      //@each($theme-list, {
      //  &.$ {
      //    value
      //  }
      //
      //  .header-item {
      //    &:hover {
      //      $class: ~'hover-bg-color-@{value}';
      //      background-color: $ $class;
      //    }
      //  }
      //})
    }
  }
}
</style>
