<template>
  <div class="top">
    <div class="header">
      <img alt="logo" class="logo" src="@/assets/logo.svg"/>
      <span class="title">Vue Antd Admin</span>
    </div>
  </div>
  <div class="login">
    <a-form
        ref="formRef"
        name="login-form"
        :model="formState"
        :rules="rules"
        v-bind="layout"
        @finish="handleFinish"
        @validate="handleValidate"
        @finishFailed="handleFinishFailed"
    >
      <a-form-item name="username">
        <a-input v-model:value="formState.username" placeholder="Tên đăng nhập">
          <template #prefix>
            <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item has-feedback name="password">
        <a-input-password v-model:value="formState.password" placeholder="Mật khẩu">
          <template #prefix>
            <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item v-bind="layout">
        <a-button type="primary" class="submit" html-type="submit">Đăng nhập</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import type {Rule} from 'ant-design-vue/es/form';
import {reactive, ref} from 'vue';
import type {FormInstance} from 'ant-design-vue';
import {useAuthStore} from "@/stores";
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';


import {useRoute, useRouter} from 'vue-router'

interface FormState {
  password: string;
  username: string;
}

const route = useRoute();
const router = useRouter();
console.log(route.redirectedFrom?.fullPath)
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  password: '',
  username: '',
});
let checkUsername = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('Tên đăng nhập đang bị bỏ trống!');
  } else {
    if (value.length < 4) {
      return Promise.reject('Tên đăng nhâp phải từ 4 kí tự trở lên');
    } else {
      return Promise.resolve();
    }
  }
};
let checkPassword = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject('Mật khẩu đang bị bỏ trống!');
  } else {
    if (value.length < 6) {
      return Promise.reject('Mật khẩu phải từ 6 kí tự trở lên');
    } else {
      return Promise.resolve();
    }
  }
};
const rules: Record<string, Rule[]> = {
  username: [{validator: checkUsername, trigger: 'change'}],
  password: [{validator: checkPassword, trigger: 'change'}],
};
const layout = {
  wrapperCol: {span: 24},
};
const handleFinish = (values: FormState) => {
  const authStore = useAuthStore();
  console.log('onFinish:', values);
  const {username, password} = values;
  return authStore.login(username, password)
      .then(() => {
        router.push(route.redirectedFrom?.fullPath || '/')
      })
      .catch(error => console.log(error))
};
const handleFinishFailed = (errors: any) => {
  console.log(errors);
};
const handleValidate = (...args: any[]) => {
  console.log(args);
};


</script>

<style lang="scss" scoped>
@import "./src/assets/scss/_variables.scss";
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