<template>
  <v-app>
    <v-main>
      <navbar/>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/layout/navbar";

export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style>

</style>
