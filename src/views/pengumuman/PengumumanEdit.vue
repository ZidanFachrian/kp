<template>
 
   <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <SidebarHero/>
    <main class="main-content position-relative border-radius-lg">
    <NavbarHero msg="Pengumuman Edit"/>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">

              <div class="row">
                
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Wilayah</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>
          
               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Tanggal</label>
                    <input class="form-control" type="date" >
                  </div>
                  </div>
                </div>

              
               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Judul</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Status</label>
                    <select name="" class="form-control" id="">
                      <option value="Tampil">Tampil</option>
                      <option value="Tidak Tampil">Tidak Tampil</option>
                    </select>
                  </div>
                  </div>
                </div>

               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Deskripsi</label>
                    <textarea name="" id="" class="form-control"></textarea>
                  </div>
                  </div>
              </div>

               
             <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <button class="btn btn-primary">Update</button>
                    <router-link :to="{ name: 'pengumuman.index'}" class="btn btn-danger mx-4">Back</router-link>
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
  name: 'PengumumanCreate',
  components: {
    SidebarHero,
    NavbarHero
  }
}
</script>