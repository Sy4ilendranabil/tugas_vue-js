<template>
  <div class="bg-[#1E293B] py-20 min-h-screen">
    <div class="container mx-auto px-6">
      <div class="flex items-center mb-8">
        <router-link
          to="/Services"
          class="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <svg class="w-6 h-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Siswa
        </router-link>
      </div>

      <div v-if="updateSuccessMessage" class="bg-green-500 text-white p-4 rounded-md mb-4">
        {{ updateSuccessMessage }}
      </div>

      <div class="bg-[#2D3748] rounded-lg shadow-md p-8" v-if="form">
        <h2 class="text-2xl font-bold text-white mb-6">Edit Data Siswa</h2>

        <form @submit.prevent="updateSiswa">
          <div class="mb-4">
            <label for="nama" class="block text-gray-300 text-sm font-semibold mb-2">Nama Siswa</label>
            <input
              type="text"
              id="nama"
              v-model="form.nama"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#4A5568]"
            />
            <div v-if="errors.nama" class="text-red-500 text-sm mt-1">
              <span v-for="(error, index) in errors.nama" :key="index">{{ error }}</span>
            </div>
          </div>

          <div class="mb-4">
            <label for="alamat" class="block text-gray-300 text-sm font-semibold mb-2">Alamat Siswa</label>
            <textarea
              id="alamat"
              v-model="form.alamat"
              rows="3"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#4A5568]"
            ></textarea>
            <div v-if="errors.alamat" class="text-red-500 text-sm mt-1">
              <span v-for="(error, index) in errors.alamat" :key="index">{{ error }}</span>
            </div>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-colors duration-300"
              :disabled="isSaving"
            >
              <span v-if="!isSaving" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m15.357 2H9.89m0 0l-2 2m2-2l2 2m-2-2v-5m8 8a3 3 0 01-3 3H9m6-6a3 3 0 01-3-3h2" />
                </svg>
                Update
              </span>
              <span v-else class="flex items-center">
                <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </span>
            </button>
          </div>
        </form>
      </div>

      <div v-else class="bg-[#2D3748] rounded-lg shadow-md p-8 text-white">
        Memuat data siswa...
      </div>
    </div>
  </div>
</template>

---

```javascript
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import api from '../../services/api'; // Pastikan path ini sesuai struktur proyek Anda

const router = useRouter();
const route = useRoute();
const siswaId = ref(route.params.id);
const form = ref(null);
const errors = ref({});
const updateSuccessMessage = ref('');
const isSaving = ref(false); // State baru untuk indikator menyimpan

onMounted(async () => {
  try {
    const response = await api.get(`/siswa/${siswaId.value}`);
    console.log('Respons API:', response.data);

    if (response.data && response.data.data) {
      form.value = {
        nama: response.data.data.nama_siswa,
        alamat: response.data.data.alamat,
      };
    }
  } catch (error) {
    console.error('Gagal memuat data siswa untuk diedit:', error);
    // Mungkin tambahkan pesan error untuk pengguna jika gagal memuat data awal
  }
});

const updateSiswa = async () => {
  // Validasi form (opsional, jika Anda ingin menambahkan validasi seperti di halaman 'Tambah Siswa')
  // Untuk saat ini, kita langsung fokus pada status isSaving
  errors.value = {}; // Bersihkan error sebelumnya
  updateSuccessMessage.value = ''; // Bersihkan pesan sukses sebelumnya

  isSaving.value = true; // Set isSaving menjadi true saat proses dimulai

  try {
    const response = await api.put(`/siswa/${siswaId.value}`, form.value);
    console.log('Data siswa berhasil diperbarui:', response.data);
    updateSuccessMessage.value = 'Data siswa berhasil diperbarui!';

    // Redirect setelah menampilkan pesan
    setTimeout(() => {
      router.push('/Services');
    }, 1500); // Redirect setelah 1.5 detik
  } catch (error) {
    console.error('Gagal memperbarui data siswa:', error);
    if (error.response?.data?.errors) {
      errors.value = error.response.data.errors;
    } else {
      errors.value = { message: ['Terjadi kesalahan saat memperbarui siswa.'] };
    }
  } finally {
    isSaving.value = false; // Set isSaving menjadi false setelah proses selesai (baik sukses maupun error)
  }
};
</script>
