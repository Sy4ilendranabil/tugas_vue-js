<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script setup>
// import Banner from './components/TheBanner.vue'
import Navbar from './components/TheNavbar.vue'
import Footer from './components/TheFooter.vue'
// import Hero from './components/TheHero.vue'


</script>

<template>
  <div>
   <div>
    <Navbar/>
    <RouterView/>
    <Footer/>
   </div>

  </div>
</template>
