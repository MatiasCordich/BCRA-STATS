<template>
    <nav class="navbar">

        <router-link to="/">
            <img class="navbar_logo" src="../assets/BCRA-logo.svg" alt="BCRA-svg-tgf-cx534">
        </router-link>

        <ul class="menu" :class="{ 'active': isOpen }">
            <li class="navbar_link">
                <span>1.</span>
                <router-link to="/" @click="toggleMenu()">Home</router-link>
            </li>
            <li class="navbar_link">
                <span>2.</span>
                <router-link to="/estadisticas" @click="toggleMenu()">Estadisticas</router-link>
            </li>
        </ul>

        <button class="navbar_btn" @click="toggleMenu()">
            <img src="https://img.icons8.com/ios-filled/50/15f5ba/menu--v1.png" alt="menu--v1" />
        </button>

    </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false)
const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    max-width: 220rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
}

.navbar_logo {
    width: 6.5rem;
}

.navbar_btn {
    position: absolute;
    top: 2rem;
    right: 1rem;
    z-index: 101;
}

.menu {
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    top: 0;
    width: 75%;
    right: -100%;
    height: 100%;
    background-color: #030611;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
}

.menu.active {
    right: 0;
}

.navbar_link{
    display: flex;
    gap: .5rem;
    color: var(--mint);
    font-weight: 800;
    margin-left: 5rem;
}

.navbar_link a{
    color: var(--white);
    font-weight: 400;
}

@media (min-width: 768px) {
    .navbar_btn {
      display: none;
    }
    .navbar {
      display: flex;
      align-items: center;
    }

    .menu {
      position: initial;
      align-items: center;
      background: none;
      transition: none;
      flex-direction: row;
      justify-content: flex-end;
      margin-right: 5rem;
    }

    .nav_item {
      flex-direction: row;
      margin-top: 0;
    }
  }
</style>
