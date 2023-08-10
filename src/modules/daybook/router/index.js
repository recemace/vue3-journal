export default {
        path: '/daybook',
        name: 'daybook',
        component: () => import(/* webpackChunkName: "daybookLayouts" */ '@/modules/daybook/layouts/DaybookLayout.vue'),
        children: [
            {
                path: '',
                name:'no-entry',
                component: () => import(/* webpackChunkName: "NoentryselectedView" */ '@/modules/daybook/views/NoentryselectedView.vue'),
            },
            {
                path: ':id',
                name:'entry',
                component: () => import(/* webpackChunkName: "NoentryselectedView" */ '@/modules/daybook/views/EntryView.vue'),
                props: ( route ) => {
                    return {
                        id: route.params.id
                    }
                }
            }
        ]
}