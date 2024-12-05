<template>
    <v-app-bar prominent>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Indiquei</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="toggleTheme" icon="mdi-theme-light-dark" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'top' : undefined" temporary>
        <v-list>
            <v-list-item v-for="item in items" :key="item.value">
                <router-link :to="item.href" class="text-decoration-none  ">
                    <v-list-item>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const drawer = ref(false);
const items = [
    { title: 'Home', value: 'perfil', href: '/' },
    { title: 'Clientes', value: 'quadras', href: '/cliente' }
];

const group = ref(null);

function toggleTheme() {
    const newTheme = theme.global.current.value.dark ? "light" : "dark";
    theme.global.name.value = newTheme;
    localStorage.setItem("theme", newTheme);
}

watch(group, () => {
    drawer.value = false;
});
</script>
