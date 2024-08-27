<template>
  <v-container>
    <v-app-bar app color="primary" class="px-5">
      <v-snackbar
      location="top"
      center-affix="true"
      v-model="snackbarStatus"
      :color="color"
      :timeout="timeout"
    >
      {{ snackbarMessage }}
    </v-snackbar>
      <div class="d-flex align-center ml-2">
        <router-link to="/">
          <v-img alt="Vuetify Logo" class="shrink mr-2" contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition"
            width="40" />
        </router-link>
      </div>
      <h3 class="ml-2 "> <router-link to="/"> <span class="site-name">Weather App</span> </router-link></h3>
      <v-spacer></v-spacer>
      <!-- <v-switch @click:append="toggleTheme" @click:prepend="toggleTheme" prepend-icon="mdi-weather-sunny"
        append-icon="mdi-weather-sunny-off"></v-switch> -->
      <v-btn :prepend-icon="theme === 'myCustomLightTheme' ? 'mdi-weather-sunny' : 'mdi-weather-night'" text="Toggle Theme" slim
        @click="toggleTheme">
      </v-btn>
    </v-app-bar>
  </v-container>
</template>
<style scoped>
.site-name {
  color: white;
}
</style>

<script>

 import { useTheme } from 'vuetify'

export default {
  
  data() {
    return {
      color:'error',
    }
  },
  computed: {
    snackbarStatus(){
      return this.$store.state.snackbarStatus
    },
    snackbarMessage(){
      return this.$store.getters.getSnackBarMessage
    }
  },
  setup() {
   
    const theme = useTheme()

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'dark'
    }

    return { toggleTheme,theme }

  }
}

</script>
