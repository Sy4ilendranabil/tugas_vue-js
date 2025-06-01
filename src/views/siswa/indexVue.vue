<!-- <template>
  <div class="bg-gray-900 text-white min-h-screen p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-cyan-400">Daftar Postingan</h1>
      <router-link
        :to="{ name: 'post.create' }"
        class="inline-block mb-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors duration-300 shadow-md"
      >
        Buat Postingan Baru
      </router-link>
      <div class="bg-gray-800 rounded-lg shadow-md p-6">
        <div v-if="loading" class="text-gray-400">Memuat postingan...</div>
        <div v-else-if="error" class="text-red-500">Terjadi kesalahan: {{ error }}</div>
        <div v-else>
          <table class="min-w-full table-auto rounded-lg hidden md:block">
            <thead class="bg-gray-700 text-white">
              <tr>
                <th class="px-4 py-2 text-left">Gambar</th>
                <th class="px-4 py-2 text-left">Judul</th>
                <th class="px-4 py-2 text-left">Konten</th>
                <th class="px-4 py-2 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr v-if="posts.length === 0">
                <td colspan="4" class="px-4 py-2 text-center text-gray-400">
                  Tidak ada data postingan.
                </td>
              </tr>
              <tr v-else v-for="post in posts" :key="post.id" class="border-b border-gray-700">
                <td class="px-4 py-2">
                  <img :src="post.image" alt="Post Image" class="h-24 rounded-md" />
                </td>
                <td class="px-4 py-2">{{ post.title }}</td>
                <td class="px-4 py-2">{{ post.content }}</td>
                <td class="px-4 py-2 text-center">
                  <router-link
                    :to="{ name: 'post.edit', params: { id: post.id } }"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors duration-200 mr-2"
                    >Edit</router-link
                  >
                  <button
                    @click="handleDelete(post.id)"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors duration-200"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="md:hidden">
            <div v-if="posts.length === 0" class="text-center text-gray-400 py-4">
              Tidak ada data postingan.
            </div>
            <div v-else v-for="post in posts" :key="post.id" class="mb-6 p-4 rounded-lg bg-gray-800 border border-gray-700 shadow-md">
              <h2 class="text-xl font-semibold mb-2 text-cyan-300">{{ post.title }}</h2>
              <img :src="post.image" alt="Post Image" class="w-full h-48 object-cover rounded-md mb-4" />
              <p class="text-gray-300 leading-relaxed mb-4">{{ post.content }}</p>
              <div class="flex justify-end">
                <router-link :to="{ name: 'post.edit', params: { id: post.id } }" class="text-blue-400 hover:text-blue-300 transition-colors duration-300 border-b border-blue-500/50 mr-4">
                  Edit
                </router-link>
                <button @click="handleDelete(post.id)" class="text-red-400 hover:text-red-300 transition-colors duration-300 border-b border-red-500/50">
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../../api'; // Pastikan path ini benar

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

const fetchDataPosts = async () => {
  loading.value = true;
  error.value = null;
  try {
    const response = await api.get('/api/posts');
    posts.value = response.data.data; // Sesuaikan dengan struktur respons API Anda
  } catch (err) {
    error.value = err.message || 'Gagal memuat postingan';
  } finally {
    loading.value = false;
  }
};

const handleDelete = async (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus postingan ini?')) {
    try {
      await api.delete(`/api/posts/${id}`);
      fetchDataPosts(); // Refresh daftar setelah menghapus
      alert('Postingan berhasil dihapus.'); // Opsional: Beri tahu pengguna
    } catch (err) {
      error.value = err.message || 'Gagal menghapus postingan';
      alert('Gagal menghapus postingan.');
    }
  }
};

onMounted(() => {
  fetchDataPosts();
});
</script>

<style scoped>
/* Gaya spesifik untuk komponen ini (jika diperlukan) */
.table-bordered th,
.table-bordered td {
  border-color: #4a5568; /* Warna border yang lebih gelap */
}
</style> -->
