import VueRouter from 'vue-router'
import "pinia";

declare module '*.vue' {
    import type {DefineComponent} from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'vue/types/vue' {
    interface Vue {
        $router: VueRouter
    }
}

declare module 'pinia' {
    export interface PiniaCustomProperties {
        router: Router
    }
}