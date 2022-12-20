<template>
 
   <div class="min-height-300 bg-primary position-absolute w-100"></div>
    <SidebarHero/>
    <main class="main-content position-relative border-radius-lg">
    <NavbarHero msg="Contact Create"/>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">

              <div class="row">
                
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Nama</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

                 <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Alamat</label>
                    <textarea name="" id="" class="form-control"></textarea>
                  </div>
                  </div>
              </div>
          
               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Email</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

              
               <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">No Telfon</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

             <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Status</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Agama</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

                 <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">Tanggal Lahir</label>
                    <input class="form-control" type="date" >
                  </div>
                  </div>
                </div>

                 <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="example-text-input" class="form-control-label">No KTP</label>
                    <input class="form-control" type="text" >
                  </div>
                  </div>
                </div>

               
             <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <button class="btn btn-primary">Tambah</button>
                    <router-link :to="{ name: 'contact.index'}" class="btn btn-danger mx-4">Back</router-link>
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
  name: 'ContactCreate',
  components: {
    SidebarHero,
    NavbarHero
  }
}
</script>