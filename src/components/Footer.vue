<template>
  <div class="footer">
    <div class="mt-5 container content-wrapper">
      <div class="row footer-group">
        <!-- <div class="col-12 col-lg-3 d-flex-column logo-text text-start f-1">
          <h1 class="mb-3">ROMANTIC SHARING</h1>
          <img src="../assets/romantic-logo.png" alt="" class="footer-img" />
        </div> -->
        <div class="col-12 col-md-4 logo-text text-start">
          <h2>Customer Service</h2>
          <ul class="text-start info-text">
            <li>
              <p>Contact Us</p>
            </li>
            <li>
              <p>FAQs</p>
            </li>
            <li>
              <p>Order & Delivery</p>
            </li>
            <li>
              <p>Payment & Pricing</p>
            </li>
            <li>
              <p>Promotion Terms & Condition</p>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4 logo-text text-start">
          <h2 class="mb-1">About Romantic</h2>
          <p>About Us</p>
        </div>
        <div class="col-12 col-md-4 logo-text text-start p-col-12">
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
                <i class="uil uil-facebook-f"></i>
                <i class="uil uil-instagram-alt"></i>
                <i class="uil uil-youtube"></i>
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

@media (max-width: 1200px) {
  .col-md-4 {
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
  .footer-group {
    align-content: center;
    margin: 0px auto;
  }
  .p-col-12 {
    width: 100%;
  }
}
</style>
