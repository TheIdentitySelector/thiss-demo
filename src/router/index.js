import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Limited Integration with Basic Link',
            component: () => import('@/views/BasicLink.vue'),
        },
        {
            path: '/basic-button',
            name: 'Limited Integration with Basic Button',
            component: () => import('@/views/BasicButton.vue'),
        },
        {
            path: '/custom-link',
            name: 'Limited Integration with Custom Link',
            component: () => import('@/views/CustomLink.vue'),
        },
        {
            path: '/seamlessaccess-button',
            name: 'Standard Integration with SeamlessAccess Button',
            component: () => import('@/views/SeamlessAccessButton.vue'),
        },
        {
            path: '/custom-seamlessaccess-button',
            name: 'Custom Integration with SeamlessAccess Button',
            component: () => import('@/views/CustomSeamlessAccessButton.vue'),
        },
        {
            path: '/example-integrations',
            name: 'Advanced Examples',
            component: () => import('@/views/ExampleIntegrations.vue'),
        },
    ],
})

export default router
