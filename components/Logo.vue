<template>
  <div>
    <img src="~/assets/img/logo.png" alt="logo" class="hidden md:block">
    <img src="~/assets/img/mobil_logo.png" alt="logo" class="sm:block md:hidden">
  </div>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
