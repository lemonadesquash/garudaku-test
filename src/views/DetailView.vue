<template>
  <div class="container">
    <h1>This is a detail page {{ $route.params.id }}</h1>
    <button @click="$router.go(-1)">Go Back</button>
  </div>
</template>
