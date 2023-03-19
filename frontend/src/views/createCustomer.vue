<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <router-link :to="{ name: 'index' }" class="btn btn-primary btn-sm rounded shadow mb-3">Back</router-link>

        <div class="card rounded shadow">
          <div class="card-header">Create Customer</div>
          <div class="card-body">
            <form @submit.prevent="store()">
              <div class="mb-3">
                <label for="" class="form-label">Nama</label>
                <input type="text" class="form-control" v-model="dataCustomer.nama" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Kontak</label>
                <input type="text" class="form-control" v-model="dataCustomer.contact" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="dataCustomer.email" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Alamat</label>
                <input type="text" class="form-control" v-model="dataCustomer.alamat" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Diskon</label>
                <input type="number" class="form-control" v-model="dataCustomer.diskon" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Tipe Diskon</label>
                <select id="" class="form-select" v-model="dataCustomer.tipe_diskon">
                  <option value="persentase">Persentase</option>
                  <option value="fix">Fix</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Ktp</label>
                <input class="form-control" type="file" id="" />
              </div>
              <button class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    // data binding
    const dataCustomer = reactive({
      nama: '',
      contact: '',
      email: '',
      alamat: '',
      diskon: '',
      tipe_diskon: '',
      ktp: '',
    });

    const router = useRouter();

    const validation = ref([]);

    function store() {
      axios
        .post('http://localhost:5000/api/customer', dataCustomer)
        .then(() => {
          router.push({
            name: 'index',
          });
        })
        .catch((err) => {
          validation.value = err.respose.data;
        });
    }

    return {
      dataCustomer,
      validation,
      router,
      store,
    };
  },
};
</script>
