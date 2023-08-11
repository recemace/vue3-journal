<template>
    <div class="d-flex justify-content-center">
        <h5 class="align-self-center">No entry selected</h5>
    </div>

    <Fab
        @on:click="createNewEntry"
    ></Fab>
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
    components: {
        Fab: defineAsyncComponent(() => import('@/modules/daybook/components/FabComponent.vue'))
    },
    methods: {
        createNewEntry(){
            this.$router.push({ name: 'entry', params: { id: 'new' }})
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>