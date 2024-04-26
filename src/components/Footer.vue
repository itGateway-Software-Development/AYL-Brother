<template>
  <div class="footer" data-aos="fade-down" data-aos-duration="2000">
    <div class="mt-5 container content-wrapper">
      <div class="row footer-group">
        <div class="col-12 col-lg-3 d-flex-column logo-text text-start f-1">
          <h1 class="mb-3">ROMANTIC SHARING</h1>
          <img src="../assets/romantic-logo.png" alt="" class="footer-img" />
        </div>
        <div class="col-12 col-lg-3 logo-text text-start">
          <h2>Information</h2>
          <ul class="text-start info-text">
            <li>
              <p>Our Story</p>
            </li>
            <li>
              <p>Shipping Policy</p>
            </li>
            <li>
              <p>Rewards</p>
            </li>
            <li>
              <p>Promotions</p>
            </li>
            <li>
              <p>Order Information</p>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 logo-text text-start">
          <h2 class="mb-1">My Account</h2>
          <p>My Personal Information</p>
        </div>
        <div class="col-12 col-lg-3 logo-text text-start">
          <h2>Contact Us</h2>
          <ul class="text-start info-text">
            <li class="d-flex icon-text">
              <span class="material-symbols-outlined"> smartphone </span>
              <p>+95 943158648</p>
            </li>
            <li class="d-flex icon-text">
              <span class="material-symbols-outlined"> mail </span>
              <p>romantic.underwear@gmail.com</p>
            </li>
            <li class="d-flex icon-text">
              <span class="material-symbols-outlined"> map </span>
              <p>
                No.104, 79Street, Between 28st X 29st, Chan Aye Tharzan
                Township, Mandalay, Myanmar
              </p>
            </li>
            <li class="d-flex social">
              <i class="uil uil-facebook-f"></i>
              <i class="uil uil-instagram-alt"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  widows: 100%;
  height: auto;
  background: #111111;
  color: #ffffff;
}

.logo-text h2 {
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
}

.info-text li {
  padding-bottom: 10px;
}

.info-text p {
  font-size: 20px;
}

.icon-text p {
  font-size: 20px;
  padding: 0 0 0 5px;
  margin-top: -3px;
}

.logo-text p {
  font-size: 20px;
}

.social {
  font-size: 40px !important;
  cursor: pointer;
  transition: 0.6s ease-in-out;
}

.social .uil {
  padding: 0px 15px 0px 0px;
}

.social .uil:hover {
  color: red;
}

.logo-text h1 {
  font-size: 28px;
  color: red;
  font-weight: bold;
}

.footer-img {
  width: 300px;
}

@media (max-width: 1200px) {
  .col-lg-3 {
    width: 50%;
  }

  .logo-text {
    margin-top: 20px;
  }
}
@media (max-width: 500px) {
  .col-lg-3 {
    width: 50%;
  }
  .f-1 {
    display: none;
  }
  .logo-text h2 {
    font-size: 20px;
  }
  .info-text,
  .icon-text {
    font-size: 14px;
  }
  .logo-text p {
    font-size: 15px;
  }
}
</style>
