<template>
 
   <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <SidebarHero/>
    <main class="main-content position-relative border-radius-lg">
    <NavbarHero msg="Transaksi"/>
    <div class="container-fluid py-4">
    <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <router-link :to="{ name: 'transaksi.create' }" class="btn btn-success">
                <i class="ni ni-zoom-split-in"></i>
                <span class="ms-2 w-20">Tambah transaksi</span>
              </router-link>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
              <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead>
                    <tr class="text-center">
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">#</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Tanggal Transaksi</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Jenis Transaksi</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Kas</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Nama Anggota</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Keterangan</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Jumlah</th>
                      <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center">
                    <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">1</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">10-20-2020</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Iuran</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Iuran</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Harun</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Pembayaran Event</span>
                      </td>
                        <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-bold">Rp. 200000,-</span>
                      </td>
                      <td>
                        <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i class="ni ni-ruler-pencil text-body me-2" aria-hidden="true"></i>Edit</a>
                         <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i class="ni ni-fat-delete"></i><span class="ms-2">Delete</span></a>
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
  name: 'Transaksi',
  components: {
    SidebarHero,
    NavbarHero
  }
}
</script>