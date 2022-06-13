<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app dark color="#0277BD">
      <v-app-bar-nav-icon />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-cart</v-icon></v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} José Fredes </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Default extends Vue {
  clipped: boolean = false
  fixed: boolean = false
  right: boolean = true
  rightDrawer: boolean = false
  title: string = 'Mi Pastillero'
}
</script>
