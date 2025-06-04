<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="player-wrapper">
    <HelloWorld src="Data Server Center.iplayer" />
  </div>
</template>

<style>
.player-wrapper {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  position: fixed;
}
</style>
