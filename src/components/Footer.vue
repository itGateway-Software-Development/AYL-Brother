<template>
  <div class="footer">
    <div
      class="mt-5 container content-wrapper footer-padding justify-content-center"
    >
      <div class="row footer-group">
        <!-- <div class="col-12 col-lg-3 d-flex-column logo-text text-start f-1">
          <h1 class="mb-3">ROMANTIC SHARING</h1>
          <img src="../assets/romantic-logo.png" alt="" class="footer-img" />
        </div> -->
        <div class="col-12 col-md-4 logo-text text-start footer-col-1">
          <h2>Customer Service</h2>
          <ul class="text-start info-text">
            <li>
              <router-link class="nav-link" to="/contact">
                <p>Contact Us</p></router-link
              >
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/"> <p>FAQs</p></router-link>
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/">
                <p>Oreder & Delivery</p></router-link
              >
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/">
                <p>Payment & Pricing</p></router-link
              >
            </li>
            <li class="nav-link">
              <router-link class="nav-link" to="/">
                <p>Promotion Terms & Condition</p></router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4 logo-text text-start footer-col-1">
          <h2 class="mb-1">About Romantic</h2>
          <router-link class="nav-link" to="/"> <p>Our Story</p></router-link>
        </div>
        <div class="col-12 col-md-4 logo-text text-start footer-col-2">
          <h2>Discount & Membership</h2>
          <ul class="text-start info-text">
            <li class="d-flex">
              <p>Affiiate Program</p>
            </li>
            <li class="d-flex">
              <p>Romantic Membership</p>
            </li>
          </ul>
          <div class="footer-iocn">
            <h2>Follow Us</h2>
            <ul>
              <li class="d-flex social">
                <a
                  href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
                  class="nav-link"
                  ><i class="uil uil-facebook-f"></i
                ></a>
                <i class="uil uil-instagram-alt"></i>
                <a
                  href="https://www.youtube.com/@RomanticUnderwear"
                  class="nav-link"
                  ><i class="uil uil-youtube"></i
                ></a>
                <a href="https://t.me/romanticmenunderwear" class="nav-link"
                  ><i class="uil uil-telegram"></i
                ></a>
                <a
                  href="https://invite.viber.com/?g2=AQBOaf6o2%2Bnp41LyWr00ZANYufLz%2B647%2FEccgumEJXIMudr7zT%2FNQeU82FmA%2FGss"
                  class="nav-link"
                  ><i class="fa-brands fa-viber"></i
                ></a>
              </li>
            </ul>
          </div>
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

.info-text {
  cursor: pointer;
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
  padding: 0px 20px 0px 0px;
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

.fa-brands {
  font-size: 32px;
  padding: 10px 0px 0px;
}

@media (max-width: 1200px) {
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
    font-size: 18px;
  }
  .info-text,
  .icon-text {
    font-size: 14px;
  }
  .logo-text p {
    font-size: 15px;
  }
  .footer-col-1 {
    width: 50%;
  }
  .footer-col-2 {
    width: 100%;
  }
}
</style>
