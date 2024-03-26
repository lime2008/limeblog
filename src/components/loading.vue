<script setup lang="ts">

</script>
<template>
  <div class="layer">
    <!-- loading -->
    <div class="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layer{
  z-index:99;
  background: #f9f9f9;
  width:100%;height:100vh;
  position:fixed;top:0;left:0;
}
.loading{
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.loading,
.loading > div {
  position: relative;
  box-sizing: border-box;
}

.loading {
  display: block;
  font-size: 0;
  color: #000;
}

.loading.la-dark {
  color: #333;
}

.loading > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.loading {
  width: 64px;
  height: 64px;
}

.loading > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  background: transparent;
  border-width: 2px;
  border-radius: 100%;
  opacity: 0;
  animation: ball-scale-ripple-multiple 1.25s 0s infinite
    cubic-bezier(0.21, 0.53, 0.56, 0.8);
}

.loading > div:nth-child(1) {
  animation-delay: 0s;
}

.loading > div:nth-child(2) {
  animation-delay: 0.25s;
}

.loading > div:nth-child(3) {
  animation-delay: 0.5s;
}

.loading.la-sm {
  width: 32px;
  height: 32px;
}

.loading.la-sm > div {
  width: 32px;
  height: 32px;
  border-width: 1px;
}

.loading.la-2x {
  width: 128px;
  height: 128px;
}

.loading.la-2x > div {
  width: 128px;
  height: 128px;
  border-width: 4px;
}

.loading.la-3x {
  width: 192px;
  height: 192px;
}

.loading.la-3x > div {
  width: 192px;
  height: 192px;
  border-width: 6px;
}

@keyframes ball-scale-ripple-multiple {
  0% {
    opacity: 1;
    transform: scale(0.1);
  }

  70% {
    opacity: 0.5;
    transform: scale(1);
  }

  95% {
    opacity: 0;
  }
}
</style>