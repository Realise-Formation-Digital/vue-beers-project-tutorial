<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dark
    >
      <!--v-app-bar-nav-icon></v-app-bar-nav-icon-->

      <v-toolbar-title>PUNK API BEER! :D</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/about-us">
        <v-icon>mdi-google-maps</v-icon>
      </v-btn>

      <v-btn icon to="/table-list-beers">
        <v-icon>mdi-glass-mug-variant</v-icon>
      </v-btn>

      <v-btn icon to="/grid-list-beers">
        <v-icon>mdi-glass-mug-variant</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
name: "navbar"
}
</script>

<style scoped>

</style>
