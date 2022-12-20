<template>
 
   <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <SidebarHero/>
    <main class="main-content position-relative border-radius-lg">
    <NavbarHero msg="Kegiatan Update"/>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">

              <div class="row">
                
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Nama Kegiatan</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>
          
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Sifat Kegiatan</label>
                    <select name="" class="form-control" id="">
                      <option value="Penting">Penting</option>
                      <option value="Available">Available</option>
                    </select>
                  </div>
                  </div>
                </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Lokasi Kegiatan</label>
                    <textarea name="" id="" class="form-control"></textarea>
                  </div>
                  </div>
              </div>

                <div class="row">
                      <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Tanggal Rencana</label>
                    <input class="form-control" type="date">
                  </div>
                </div>
                  <div class="col-md-6">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Tanggal Realisasi</label>
                    <input class="form-control" type="date">
                  </div>
                </div>
                </div>
              


               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Deskripsi Kegiatan</label>
                    <textarea name="" id="" class="form-control"></textarea>
                  </div>
                  </div>
              </div>

             <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <button class="btn btn-primary">Update</button>
                    <router-link :to="{ name: 'kegiatan.index'}" class="btn btn-danger mx-4">Back</router-link>
                  </div>
                </div>
            </div>
           
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
  name: 'KegiatanEdit',
  components: {
    SidebarHero,
    NavbarHero
  }
}
</script>