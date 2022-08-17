<template>
  <div class="top">
    <div class="header">
      <img alt="logo" class="logo" src="@/assets/logo.svg"/>
      <span class="title">Vue Antd Admin</span>
    </div>
  </div>
  <div class="login">
    <a-form
        layout="vertical"
        :model="formState"
        name="basic"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >
      <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" placeholder="Username">
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input v-model:value="formState.password" placeholder="Password" type="password">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
          :wrapper-col="{ span: 24 }"
      >
        <a-button type="primary" class="submit" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';

import {useAuthStore} from "@/stores";

interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
});

const onFinish = (values: any) => {
  const authStore = useAuthStore();
  console.log('onFinish:', values);
  const {username, password} = values;
  return authStore.login(username, password).catch(error => console.log(error))
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

</script>

<style lang="scss" scoped>
$black: #000;
$title-color: fade(#000, 85%);
$text-color-second: fade($black, 45%);
$primary-color: #1890ff;
.guess-layout {
  .top {
    text-align: center;

    .header {
      height: 44px;
      line-height: 44px;

      a {
        text-decoration: none;
      }

      .logo {
        height: 44px;
        vertical-align: top;
        margin-right: 16px;
      }

      .title {
        font-size: 33px;
        color: $title-color;
        font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: relative;
        top: 2px;
      }
    }
  }

  .login {
    width: 368px;
    margin: 20px auto;
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-width: 320px) {
      .captcha-button {
        font-size: 14px;
      }
    }

    .icon {
      font-size: 40px;
      color: $text-color-second;
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: $primary-color;
      }
    }

    .submit {
      width: 100%;
    }
  }
}
</style>