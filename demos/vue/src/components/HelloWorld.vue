<script setup>
import { onMounted, ref } from 'vue'
import ICraftPlayer from '@icraft/player'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
})

const containerRef = ref(null)
let player = null

onMounted(() => {
  if (containerRef.value) {
    player = new ICraftPlayer({
      src: props.src,
      container: containerRef.value,
    })
  }
})
</script>

<template>
  <div ref="containerRef" class="player-content"></div>
</template>

<style scoped>
.player-content {
  width: 100%;
  height: 100%;
}
</style>
