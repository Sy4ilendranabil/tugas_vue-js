<template>
  <section class="w-full bg-gray-50 dark:bg-gray-800 py-20">
    <div class="max-w-6xl mx-auto px-5 sm:px-10">

      <div class="flex flex-col-reverse md:flex-row items-center gap-10">
        <div class="md:w-1/2 text-center lg:text-left">
          <span class="text-gray-500 dark:text-gray-300 border-b-3 border-cyan-500 uppercase"
            >Hello There</span
          >
          <h1 class="mt-4 font-bold text-3xl sm:text-4xl text-gray-700 dark:text-gray-200 leading-tight">
            Hi, I'm <span class="text-cyan-500">Syailendra Nabil</span>
          </h1>
          <h2 class="mt-2 font-semibold text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
            A Passionate Web Developer
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            I build modern, responsive, and accessible websites with a focus on clean design and great
            user experience. Let's make your idea a reality!
          </p>
          <div class="mt-6 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              class="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition"
              >Hire Me</a
            >
            <a
              href="#projects"
              class="px-6 py-3 border border-cyan-500 text-cyan-500 rounded-full font-semibold hover:bg-cyan-50 transition"
              >View Projects</a
            >
          </div>
        </div>

        <div class="md:w-1/2 text-center">
          <div class="image-container">
            <img
              src="/public/image/nav (2).jpg"
              alt="Hero Illustration"
              class="w-4/5 max-w-md rounded-lg shadow-lg image-hover-effect transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Style untuk kontainer gambar (opsional, untuk efek 3D atau lainnya di masa depan) */
.image-container {
  /* Anda bisa menambahkan style perspektif di sini jika ingin efek 3D */
}

/* Style untuk efek hover pada gambar */
.image-hover-effect {
  transition: transform 0.3s ease-in-out; /* Animasi untuk properti transform */
}

.image-hover-effect:hover {
  transform: scale(1.05); /* Memperbesar sedikit saat hover */
  cursor: pointer; /* Mengubah kursor menjadi pointer */
  /* Opsi lain:
  transform: rotate(2deg);
  transform: translateY(-5px);
  */
}
</style>

<script setup>
// Anda bisa menambahkan logika atau data spesifik untuk halaman Home di sini jika diperlukan
</script>
