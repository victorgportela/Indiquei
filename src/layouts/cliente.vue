<template>
    <v-app>
        <Drawer />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup>
import Drawer from '@/components/drawer.vue';


</script>