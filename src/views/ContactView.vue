<template>
  <section class="w-full bg-gray-50 dark:bg-gray-800 py-20">
    <div class="max-w-6xl mx-auto px-5 sm:px-10 flex flex-col md:flex-row gap-12">
      <div class="md:w-1/3 w-full">
        <h1 class="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">Contact Us</h1>
        <p class="leading-relaxed text-lg text-gray-600 dark:text-gray-300">
          We're here to assist you! If you have any questions or need assistance, please feel free to reach out to us.
        </p>

        <p class="leading-relaxed text-lg text-gray-600 dark:text-gray-300 mt-8">Connect with us on social media:</p>
        <div class="inline-flex mt-6 justify-center sm:justify-start gap-4">
          <a class="text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition" target="_blank" href="https://twitter.com/example">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-6 h-6" viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
              </path>
            </svg>
          </a>
          <a class="text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition" href="https://www.instagram.com/example/" target="_blank">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-6 h-6" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </div>
      </div>

      <div class="md:w-2/3 w-full">
        <h1 class="text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6">Contact Form</h1>
        <form action="send-contact.php" method="POST" class="space-y-6">
          <div class="w-full">
            <label for="name" class="leading-7 text-lg text-gray-600 dark:text-gray-300">Your Name</label>
            <input type="text" id="name" name="name" required
              class="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-900 text-base outline-none text-gray-900 dark:text-white py-2 px-3 leading-8 transition-colors duration-200 hover-effect-input" />
          </div>

          <div class="w-full">
            <label for="email" class="leading-7 text-lg text-gray-600 dark:text-gray-300">Your Email</label>
            <input type="email" id="email" name="email" required
              class="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-900 text-base outline-none text-gray-900 dark:text-white py-2 px-3 leading-8 transition-colors duration-200 hover-effect-input" />
          </div>

          <div class="w-full">
            <label for="message" class="leading-7 text-lg text-gray-600 dark:text-gray-300">Your Message</label>
            <textarea id="message" name="message" required
              class="w-full bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:focus:ring-cyan-900 h-32 text-base outline-none text-gray-900 dark:text-white py-2 px-3 resize-none leading-6 transition-colors duration-200 hover-effect-input"></textarea>
          </div>

          <div class="w-full">
            <button type="submit"
              class="flex text-white bg-cyan-500 hover:bg-cyan-600 border-0 py-3 px-6 focus:outline-none rounded-full text-lg font-semibold shadow-md transition-colors duration-300">
              Send Message ✉
            </button>
          </div>

          <!-- <div class="w-full">
            <a href="https://veilmail.io/e/FkKh7o" class="font-medium text-cyan-500 hover:underline dark:text-cyan-400">
              Or click here to reveal our protected email address
            </a>
          </div> -->
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover-effect-input {
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

.hover-effect-input:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-color: #0D7CFF;
}
</style>

<script setup>
// Anda bisa menambahkan logika atau data spesifik untuk halaman Contact di sini jika diperlukan
</script>
