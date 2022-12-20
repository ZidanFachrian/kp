<template>
<!-- navigation -->
<header class="navigation bg-tertiary">
	<nav class="navbar navbar-expand-xl navbar-light text-center py-3">
		<div class="container">
			<a class="navbar-brand" href="index.html">
				<img loading="prelaod" decoding="async" class="img-fluid" width="160" src="/assets/img/banner/cropped-Logoputih.png" alt="Wallet">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
					<li class="nav-item"> <a class="nav-link" href="#">Home</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="#">About</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="#">Contact</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="#">FAQ</a>
					</li>
					<li class="nav-item "> <a class="nav-link" href="#">Term And Condition</a>
					</li>
				</ul>
				<!-- account btn --> <router-link :to="{ name: 'Login'}" class="btn btn-outline-primary">Log In</router-link>
			
			</div>
		</div>
	</nav>
</header>
<br><br>
<!-- /navigation -->



<section class="banner bg-tertiary position-relative overflow-hidden">
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="block text-center text-lg-start pe-0 pe-xl-5">
          <h1 class="text-capitalize mb-4">Perkumpulan Pelaku Logistik Indonesia</h1>
          <p class="mb-4">Bergabunglah Bersama Kami Perkumpulan Pelaku Logistik Indonesia</p> 
        </div>
      </div>
      <div class="col-lg-6">
        <div class="ps-lg-5 text-center">
          <img loading="lazy" decoding="async"
            src="/assets/img/banner/banner1.fce558d6.png"
            alt="banner image" class="w-100">
        </div>
      </div>
    </div>
  </div>

</section>

<br><br><br>


<section class="about-section section bg-tertiary position-relative overflow-hidden">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-5">
        <div class="section-title">
          <p class="text-primary text-uppercase fw-bold mb-3">Tentang</p>
          <h1>PPLI</h1>
          <p class="lead mb-0 mt-4">
            PPLI adalah organisasi di bidang Supply Chain & Logistics Management khususnya UKM Logistik di Indonesia. Keanggotaan PPLI terbuka bagi individu Warga Negara Indonesia yang berkarya sbg Praktisi, Akademisi, Pembuat Regulasi, Owner, IT, logistik konsultan, financial logistik, operational Logistik lainnya. 
            Besar harapan kami untuk anda dapat berpartisipasi dalam turut menyebarkan informasi tentang PPLI ini ke rekan dan relasi anda.
          </p>
        </div>
      </div>
      <div class="col-lg-7 text-center text-lg-end">
        <img loading="lazy" decoding="async" src="/assets/img/banner/Untitled212-1.png" alt="About Ourselves" class="img-fluid">
      </div>
    </div>
  </div>

</section>

<br><br>


<footer class="section-sm bg-tertiary">
	<div class="container">
	
		<div class="row align-items-center mt-5 text-center text-md-start">
			<div class="col-lg-4">
        <a href="index.html">
          <img loading="prelaod" decoding="async" class="img-fluid" width="160" src="/assets/img/banner/cropped-Logoputih.png" alt="Wallet">
        </a>
			</div>
			<div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
				<ul class="list-unstyled list-inline mb-0 text-lg-center">
					<li class="list-inline-item me-4"><a class="text-black" href="#">FAQ</a>
					</li>
					<li class="list-inline-item me-4"><a class="text-black" href="#">Terms &amp; Conditions</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<br><br><br>

    
</template>

<script>
export default {
  name: 'Home',
  
}
</script>