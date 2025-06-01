<template>
  <div class="w-full bg-gray-50 dark:bg-gray-800 py-20 ">
    <div class="max-w-6xl mx-auto px-5 sm:px-10">
      <div class="flex flex-col-reverse md:flex-row items-center gap-10">
        <div class="md:w-1/2">
          <span class="text-gray-500 dark:text-gray-300 border-b-3 border-cyan-500 uppercase"
            >About Me</span
          >
          <h2 class="mt-4 font-bold text-3xl sm:text-4xl text-gray-700 dark:text-gray-200">
            M. Syailendra Nabil Destama
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            Saya adalah seorang
            <span class="text-cyan-500 font-semibold">Fullstack Developer</span> yang berdedikasi
            dalam membangun solusi digital modern dan berdampak. Dengan latar belakang di bidang
            teknologi informasi dan pengalaman mengembangkan berbagai proyek web, saya senantiasa
            menggabungkan kreativitas dan efisiensi dalam setiap karya yang saya hasilkan.
          </p>
          <div class="mt-6 flex gap-4">
            <button
              class="bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-cyan-600 transition duration-300"
            >
              Download CV
            </button>
            <button
              class="border border-cyan-500 text-cyan-500 px-5 py-2 rounded-full font-semibold hover:bg-cyan-50 transition duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
        <div class="md:w-1/2 text-center">
          <div class="image-container">
            <img
              src="/image/logo.jpg"
              alt="Profile Picture"
              class="w-72 h-72 object-cover rounded-full shadow-lg mx-auto image-hover-effect transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-200">
        <ul class="space-y-3">
          <li><strong>Birthday:</strong> 14 Deesember 2007</li>
          <li><strong>Website:</strong> syailendra.dev</li>
          <li><strong>Pendidikan:</strong> RPL SMK PURWOSARI</li>
          <li><strong>Lokasi:</strong> Indonesia</li>
        </ul>
        <ul class="space-y-3">
          <li><strong>Email:</strong> syailendranabil@gmail.com</li>
          <li><strong>No HP:</strong> +62 812 3456 7890</li>
          <li><strong>Status:</strong> Masih Melakukan Magang</li>
          <li><strong>Pengalaman:</strong> Kerja kelompok</li>
        </ul>
      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">My Skills</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="skill in skills" :key="skill.name">
            <div class="flex justify-between font-medium text-gray-700 dark:text-gray-200">
              <span>{{ skill.name }}</span>
              <span>{{ skill.value }}%</span>
            </div>
            <div class="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
              <div class="bg-cyan-500 h-2 rounded-full" :style="{ width: skill.value + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  /* Untuk menjaga agar efek tidak memotong elemen lain */
  display: inline-block;
}

.image-hover-effect {
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}

.image-hover-effect:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Efek bayangan yang lebih kuat */
  cursor: pointer;
}
</style>

<script setup>
const skills = [
  { name: 'HTML / CSS / JavaScript', value: 90 },
  { name: 'Vue / Nuxt', value: 85 },
  { name: 'PHP / Laravel', value: 80 },
  { name: 'WordPress', value: 92 },
  { name: 'NestJS', value: 70 },
]
console.log(skills)
</script>
