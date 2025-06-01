<template>
  <div class="bg-[#1E293B] py-10 md:py-20 min-h-screen">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center mb-8 md:mb-10 animate-fade-in pb-8 md:pb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2 md:mb-3.5 text-center">Data Siswa</h2>
        <div class="h-1 w-20 md:w-30 bg-cyan-400 rounded-full"></div>
      </div>

      <div v-if="deleteSuccessMessage" class="bg-red-500 text-white p-3 md:p-4 rounded-md mb-4">
        {{ deleteSuccessMessage }}
      </div>

      <div class="mb-6 md:mb-8 flex justify-end">
        <router-link
          to="/siswa/create"
          class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors duration-300 text-sm md:text-base"
        >
          <span class="flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Tambah Siswa
          </span>
        </router-link>
      </div>

      <div class="relative overflow-x-auto rounded-lg shadow-md">
        <table class="w-full text-sm text-left rtl:text-right text-gray-300">
          <thead class="text-xs text-gray-100 uppercase bg-[#2D3748]">
            <tr>
              <th scope="col" class="px-4 py-3 md:px-6">
                <span class="flex items-center">
                  <svg class="w-3 h-3 mr-2 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-2 4l-2 2m0 0l2 2m-2-2h4" />
                  </svg>
                  ID
                </span>
              </th>
              <th scope="col" class="px-4 py-3 md:px-6">
                <span class="flex items-center">
                  <svg class="w-3 h-3 mr-2 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nama
                </span>
              </th>
              <th scope="col" class="px-4 py-3 md:px-6">
                <span class="flex items-center">
                  <svg class="w-3 h-3 mr-2 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7-7-7M13 9v10a1 1 0 001 1h3m-10-11l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7-7-7M13 9v10a1 1 0 001 1h3" />
                  </svg>
                  Alamat
                </span>
              </th>
              <th scope="col" class="px-4 py-3 md:px-6">
                <span class="flex items-center">
                  <svg class="w-3 h-3 mr-2 md:w-4 md:h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Aksi
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-[#2D3748] border-b border-gray-700 hover:bg-[#475569] transition-colors duration-300 cursor-pointer"
              v-for="item in items"
              v-bind:key="item.id_siswa"
              @click="showDetail(item)" >
              <th
                scope="row"
                class="px-4 py-4 md:px-6 font-medium text-white whitespace-nowrap"
              >
                {{ item.id_siswa }}
              </th>
              <td class="px-4 py-4 md:px-6">{{ item.nama_siswa }}</td>
              <td class="px-4 py-4 md:px-6">{{ item.alamat_siswa }}</td>
              <td class="px-4 py-4 md:px-6">
                <div class="flex items-center space-x-2" @click.stop> <router-link
                    :to="`/siswa/edit/${item.id_siswa}`"
                    class="text-sm md:text-base bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </router-link>
                  <button
                    @click="confirmDelete(item)"
                    class="text-sm md:text-base bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <svg class="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="items.length === 0">
                <td colspan="4" class="px-4 py-4 md:px-6 text-center text-gray-400">Tidak ada data siswa.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-[#2D3748] rounded-lg shadow-xl p-6 md:p-8 w-full max-w-sm">
        <h3 class="text-xl font-bold text-white mb-4">Konfirmasi Hapus</h3>
        <p class="text-gray-300 mb-4">
          Apakah Anda yakin ingin menghapus data siswa ini?
        </p>
        <div v-if="selectedSiswa" class="text-gray-200 text-sm mb-6 bg-[#1E293B] p-3 rounded-md">
          <p><strong>Nama:</strong> {{ selectedSiswa.nama_siswa }}</p>
          <p><strong>Alamat:</strong> {{ selectedSiswa.alamat_siswa }}</p>
        </div>

        <div class="flex justify-end space-x-3">
          <button
            @click="cancelDelete"
            class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
          >
            Batal
          </button>
          <button
            @click="executeDelete"
            :disabled="isDeleting"
            class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300"
          >
            <span v-if="!isDeleting" class="flex items-center">
                <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Hapus
            </span>
            <span v-else class="flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Menghapus...
            </span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="showDetailModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-[#2D3748] rounded-lg shadow-xl p-6 md:p-8 w-full max-w-sm">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-white">Rincian Siswa</h3>
          <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-200">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div v-if="selectedSiswaDetail" class="text-gray-300 text-base space-y-3">
          <p><strong>ID:</strong> {{ selectedSiswaDetail.id_siswa }}</p>
          <p><strong>Nama:</strong> {{ selectedSiswaDetail.nama_siswa }}</p>
          <p><strong>Alamat:</strong> {{ selectedSiswaDetail.alamat_siswa }}</p>
          </div>
        <div v-else class="text-gray-400">
          Data tidak ditemukan.
        </div>
        <div class="flex justify-end mt-6">
          <button
            @click="closeDetailModal"
            class="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

---

```javascript
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api' // Pastikan jalur impor ini benar

const router = useRouter()
const items = ref([])
const deleteSuccessMessage = ref('')

// States untuk Modal Konfirmasi Hapus
const showDeleteModal = ref(false)
const selectedSiswa = ref(null) // Untuk menyimpan objek siswa yang akan dihapus
const isDeleting = ref(false)

// States baru untuk Modal Rincian Data
const showDetailModal = ref(false)
const selectedSiswaDetail = ref(null) // Untuk menyimpan objek siswa yang detailnya akan ditampilkan

const fetchItems = async () => {
  try {
    const response = await api.get('/siswa')
    console.log(response.data.data)
    items.value = response.data.data
  } catch (error) {
    console.log(error)
    // Anda bisa tambahkan pesan error di sini jika gagal memuat data
  }
}

// --- Fungsi untuk Modal Konfirmasi Hapus ---
const confirmDelete = (siswa) => {
  selectedSiswa.value = siswa // Simpan seluruh objek siswa
  showDeleteModal.value = true
}

const cancelDelete = () => {
  showDeleteModal.value = false
  selectedSiswa.value = null // Reset objek siswa yang dipilih
}

const executeDelete = async () => {
  if (!selectedSiswa.value) return

  isDeleting.value = true;
  deleteSuccessMessage.value = '';

  try {
    await api.delete(`/siswa/${selectedSiswa.value.id_siswa}`)
    items.value = items.value.filter(item => item.id_siswa !== selectedSiswa.value.id_siswa)
    deleteSuccessMessage.value = `Siswa dengan ID ${selectedSiswa.value.id_siswa} berhasil dihapus.`;

    showDeleteModal.value = false
    selectedSiswa.value = null

    setTimeout(() => {
      deleteSuccessMessage.value = '';
    }, 2000);

    console.log(`Siswa dengan ID ${selectedSiswa.value.id_siswa} berhasil dihapus.`);
  } catch (error) {
    console.error('Gagal menghapus siswa:', error);
    // Tambahkan pesan error untuk pengguna jika terjadi kegagalan
    // deleteSuccessMessage.value = 'Gagal menghapus siswa. Silakan coba lagi.';
  } finally {
    isDeleting.value = false;
  }
}

// --- Fungsi untuk Modal Rincian Data ---
const showDetail = (siswa) => {
  selectedSiswaDetail.value = siswa // Simpan seluruh objek siswa untuk ditampilkan detailnya
  showDetailModal.value = true // Tampilkan modal rincian
}

const closeDetailModal = () => {
  showDetailModal.value = false // Sembunyikan modal rincian
  selectedSiswaDetail.value = null // Reset objek siswa detail
}

onMounted(() => {
  fetchItems()
})
</script>

<style scoped>
/* Anda bisa tambahkan gaya kustom di sini jika diperlukan */
/* Misalnya, untuk overlay modal, atau animasi masuk/keluar modal */
</style>
