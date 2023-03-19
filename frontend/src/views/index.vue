<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Rimba</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name: 'create.customer' }" class="nav-link"> Customer </router-link>
          <router-link :to="{ name: 'create.item' }" class="nav-link"> Item </router-link>
        </div>
      </div>
    </div>
  </nav>

  <div class="card m-2" style="width: 18rem" v-for="(item, index) in items" :key="index">
    <img :src="item.barang" />
    <div class="card-body">
      <h5 class="card-title">{{ item.nama_item }}</h5>
      <p class="card-text">{{ item.harga_satuan }}</p>
      <a href="#" class="btn btn-primary">add</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    let items = ref([]);

    onMounted(() => {
      // ambil data dari API
      axios
        .get('http://localhost:5000/api/items')
        .then((result) => {
          items.value = result.data;
        })
        .catch((err) => {
          console.log(err.respose);
        });
    });

    return {
      items,
    };
  },
};
</script>
