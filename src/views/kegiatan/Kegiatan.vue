<template>
 
   <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <SidebarHero/>
    <main class="main-content position-relative border-radius-lg">
    <NavbarHero msg="Kegiatan"/>
    <div class="container-fluid py-4">
    <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <router-link :to="{ name: 'kegiatan.create' }" class="btn btn-success">
                <i class="ni ni-zoom-split-in"></i>
                <span class="ms-2 w-20">Tambah Kegiatan</span>
              </router-link>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr class="text-center">
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">#</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Nama Kegiatan</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Sifat Kegiatan</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Lokasi Kegiatan</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Tanggal Rencana</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Tanggal Reliasasi</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Deskripsi Kegiatan</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                    <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">1</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Event 2022</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Penting</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Universitas 17 Agustus 1945</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">20-10-2020</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">20-10-2020</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Acara Universitas 17 Agustus 1945</span>
                      </td>
                      <td>
                        <router-link :to="{ name: 'kegiatan.edit' }" class="btn btn-link text-dark px-3 mb-0" ><i class="ni ni-ruler-pencil text-body me-2" aria-hidden="true"></i>Edit</router-link>
                         <button class="btn btn-link text-danger text-gradient px-3 mb-0" @click="showAlert"><i class="ni ni-fat-delete"></i><span class="ms-2">Delete</span></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
    </main>

</template>


<script>
// @ is an alias to /src
import SidebarHero from '@/components/section/SidebarHero.vue'
import NavbarHero from '@/components/section/NavbarHero.vue'




export default {
  name: 'Kegiatan',
  components: {
    SidebarHero,
    NavbarHero
  },
    methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal({
        title: 'Yakin Ingin Menghapus?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Delete'
}).then((result) => {
  if (result.isConfirmed) {
    this.$swal(
      'Terhapus!',
      'success'
    )
  }
      });
    }
    }
}
</script>