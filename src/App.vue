<template lang="pug">
router-view(v-slot="{ Component }")
    keep-alive
        component(:is="Component") 
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
}
</style>
