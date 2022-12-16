<template>
  <div class="container position-sticky z-index-sticky top-0"></div>

  <main class="main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-auto">
              <div class="card card-plain">
                <div class="card-header pb-0 text-start">
                  <h4 class="font-weight-bolder">Magang</h4>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email">
                    </div>
                    <div class="mb-3">
                      <input type="email" class="form-control form-control-lg" placeholder="Password" aria-label="Password">
                    </div>
                 
                    <div class="text-center">
                      <router-link :to="{ name: 'Dashboard'}" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Login</router-link>
                    </div>
                  </form>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  </main>
</template>

<script>


export default {
  name: 'Login',

}
</script>
