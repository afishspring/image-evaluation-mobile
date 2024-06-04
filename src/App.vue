<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script setup>
// No script content needed for this simple component
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    height: 100vh;
}

#app {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #2c3e50;
}
</style>