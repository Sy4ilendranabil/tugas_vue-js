<template>
  <nav class="bg-[#1E293B] w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/public/image/kucing akmal.jpg" class="h-20 rounded" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Syailendra</span
        >
      </RouterLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 text-white"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5 fill-current text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-900 md:dark:bg-transparent"
        >
          <li>
            <RouterLink
              to="/Home"
              class="block py-2 px-3 text-lg text-white rounded-sm hover-underline"
              aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/About"
              class="block py-2 px-3 text-lg text-white rounded-sm hover-underline"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/Services"
              class="block py-2 px-3 text-lg text-white rounded-sm hover-underline"
              >Services</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/Contact"
              class="block py-2 px-3 text-lg text-white rounded-sm hover-underline"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Style untuk efek hover garis bawah berdenyut */
a {
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: #A6A6A6;
  width: 0%;
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
  animation: heartbeat116 1.5s ease-in-out 0.3s infinite;
}

@keyframes heartbeat116 {
  0%,
  100% {
    width: 100%;
  }
  50% {
    width: 60%;
  }
}

/* Style tambahan untuk mobile menu (agar tetap terlihat di background gelap) */
.dark-bg-mobile-menu {
  background-color: #1E293B;
}
</style>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
