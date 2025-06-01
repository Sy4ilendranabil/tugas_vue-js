<template>
  <div class="bg-[#1E293B] py-20 min-h-screen">
    <div class="container mx-auto px-6">
      <div class="flex items-center mb-8">
        <router-link
          to="/Services" class="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          <svg class="w-6 h-6 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Daftar Siswa
        </router-link>
      </div>

      <div v-if="successMessage" class="bg-green-500 text-white p-4 rounded-md mb-4">
        {{ successMessage }}
      </div>

      <div class="bg-[#2D3748] rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-white mb-6">Tambah Siswa Baru</h2>
        <form @submit.prevent="createSiswa">
          <div class="mb-4">
            <label for="nama" class="block text-gray-300 text-sm font-semibold mb-2">Nama Siswa</label>
            <input
              type="text"
              id="nama"
              v-model="form.nama"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#4A5568]"
              placeholder="Nama Lengkap Siswa"
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
              placeholder="Alamat Lengkap Siswa"
            ></textarea>
            <div v-if="errors.alamat" class="text-red-500 text-sm mt-1">
              <span v-for="(error, index) in errors.alamat" :key="index">{{ error }}</span>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300"
              :disabled="isSaving"
            >
              <span v-if="!isSaving" class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Simpan
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
    </div>
  </div>
</template>

---

```javascript
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../../services/api';

const router = useRouter();
const form = ref({
  nama: '',
  alamat: '',
});
const errors = ref({});
const successMessage = ref('');
const isSaving = ref(false); // State baru untuk indikator menyimpan

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!form.value.nama.trim()) {
    errors.value.nama = ['Nama siswa wajib diisi.'];
    isValid = false;
  } else if (form.value.nama.trim().length > 255) {
    errors.value.nama = ['Nama siswa maksimal 255 karakter.'];
    isValid = false;
  }

  if (!form.value.alamat.trim()) {
    errors.value.alamat = ['Alamat siswa wajib diisi'];
    isValid = false;
  }

  return isValid;
};

const createSiswa = async () => {
  if (!validateForm()) {
    return;
  }

  isSaving.value = true; // Set isSaving menjadi true saat proses dimulai
  successMessage.value = ''; // Reset pesan sukses sebelum percobaan baru
  errors.value = {}; // Bersihkan error sebelumnya

  try {
    const response = await api.post('/siswa', form.value);
    console.log('Siswa berhasil ditambahkan:', response.data);
    successMessage.value = 'Siswa berhasil ditambahkan!';
    // Tidak perlu menunda redirect di sini, karena pesan sukses akan ditampilkan
    // sebelum redirect. Kalau mau lebih lama bisa pakai setTimeout
    setTimeout(() => {
      router.push('/Services');
    }, 1500);
  } catch (error) {
    console.error('Gagal menambahkan siswa:', error);
    if (error.response && error.response.data && error.response.data.errors) {
      errors.value = error.response.data.errors;
    } else {
      errors.value = { message: ['Terjadi kesalahan saat menambahkan siswa.'] };
    }
  } finally {
    isSaving.value = false; // Set isSaving menjadi false setelah proses selesai (baik sukses maupun error)
  }
};
</script>
