

<template>
  <div id="app">
    <h1>Kalkulator Sederhana</h1>

    <input v-model="num1" type="number" placeholder="Masukkan angka" />
    <input v-model="num2" type="number" placeholder="Masukkan angka" />

    <div>
      <select v-model="selectedOperation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>

      <button @click="calculate">Hitung</button>
    </div>

    <h2>Hasil: {{ result }}</h2>

    <!-- Tombol Klik Saya -->
    <button type="button" @click="toggleKlikSaya">Klik Saya</button>

    <!-- Kotak Merah/Biru dengan efek fade -->
    <transition name="fade">
      <div class="merah" v-if="klikSaya" id="boxRed">Setelah Klik Saya</div>
      <div class="biru" v-else id="boxBlue" key="boxBlue">Sebelum Klik Saya</div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const num1 = ref(0);
const num2 = ref(0);
const selectedOperation = ref("+");
const result = ref(0);
const klikSaya = ref(false);

const calculate = () => {
  const n1 = parseFloat(num1.value) || 0;
  const n2 = parseFloat(num2.value) || 0;

  switch (selectedOperation.value) {
    case "+":
      result.value = n1 + n2;
      break;
    case "-":
      result.value = n1 - n2;
      break;
    case "*":
      result.value = n1 * n2;
      break;
    case "/":
      result.value = n2 !== 0 ? n1 / n2 : "Error (Bagi 0)";
      break;
  }
};

const toggleKlikSaya = () => {
  klikSaya.value = !klikSaya.value;
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
  color: #121222;
}

input, select, button {
  margin: 8px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #ccc;
  transition: all 0.3s;
}

input:focus {
  border-color: #007BFF;
  background-color: #e6f7ff;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

h2 {
  margin-top: 20px;
  color: #007BFF;
}

#boxRed {
  background-color: red;
  color: white;
  padding: 10px;
  margin-top: 10px;
}

#boxBlue {
  background-color: blue;
  color: white;
  padding: 10px;
  margin-top: 10px;
}

/* Efek Fade */
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
} */
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.biru  {

  transition: opacity 0.5s ease-in-out;
}

</style>

