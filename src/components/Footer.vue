<template>
  <div class="footer">
    <div class="mt-5 footer-padding justify-content-center desktop">
      <div class="row footer-group d-flex">
        <div class="col-5 col-lg-2 footer-col">
          <div class="content-group text-start">
            <h5>Shop</h5>
            <ul>
              <li>
                <router-link class="nav-link" to="/products/bamboo/0"
                  ><p>Bamboo Fiber</p></router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/products/lycra/0"
                  ><p>Lycra Modal</p></router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/products/spandex/0"
                  ><p>Spandex</p></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-5 col-lg-2 footer-col">
          <div class="content-group text-start">
            <h5>Shopping Guide</h5>
            <ul>
              <li>
                <router-link class="nav-link" to="/cart"
                  ><p>Add to cart</p></router-link
                >
              </li>
              <!-- <li>
                <router-link class="nav-link" to="/cart/checkout"
                  ><p>Checkout</p></router-link
                >
              </li> -->
              <!-- <li>
                <router-link class="nav-link" to="/"
                  ><p>Delivery</p></router-link
                >
              </li> -->
              <!-- <li>
                <router-link class="nav-link" to="/"><p>Return</p></router-link>
              </li> -->
              <li>
                <router-link class="nav-link" to="/"
                  ><p>Track My Order</p></router-link
                >
              </li>
              <!-- <li>
                <router-link class="nav-link" to="/"
                  ><p>Shipping</p></router-link
                >
              </li> -->
            </ul>
          </div>
        </div>
        <div class="col-5 col-lg-2 footer-col">
          <div class="content-group text-start">
            <h5>About Romantic</h5>
            <ul>
              <li>
                <router-link class="nav-link" to="/about-us"
                  >About Us</router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/contact"
                  ><p>Contact Us</p></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-5 col-lg-2 footer-col">
          <div class="content-group text-start">
            <h5>Services</h5>
            <ul>
              <li>
                <router-link class="nav-link" to="/"
                  ><p>Membership</p></router-link
                >
              </li>
              <!-- <li>
                <router-link class="nav-link" to="/"
                  ><p>Promotion</p></router-link
                >
              </li> -->
              <li>
                <router-link class="nav-link" to="/contact"
                  ><p>Contact</p></router-link
                >
              </li>
              <li>
                <router-link class="nav-link" to="/"
                  ><p>My Account</p></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-5 col-lg-2 footer-col-custom">
          <div class="content-group text-start">
            <h5>Register Now!</h5>
            <ul>
              <li>
                <p>
                  Sign up now and get extra points & many promotions from us.
                </p>
              </li>
              <li>
                <router-link
                  class="footer-link footer-btn d-flex align-items-center"
                  to="/register"
                  ><p>Sign Up Now</p>
                  <i class="fa-solid fa-arrow-right"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-icon">
        <div class="d-flex align-items-center justify-content-center">
          <a
            href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
            target="_blank"
            class="nav-link"
          >
            <i class="fa-brands fa-square-facebook"></i
          ></a>
          <a
            class="nav-link"
            href="https://www.youtube.com/@RomanticUnderwear"
            target="_blank"
            ><i class="fa-brands fa-youtube"></i
          ></a>
          <a href="#" class="nav-link"> <i class="fa-brands fa-tiktok"></i></a>
          <a href="#" class="nav-link"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#" class="nav-link"
            ><i class="fa-brands fa-square-x-twitter"></i
          ></a>
        </div>
      </div>
      <div class="justify-content-center footer-img align-items-center d-flex">
        <router-link to="/"
          ><img src="../assets/romantic-logo.png" alt="" class="img-fluid"
        /></router-link>
      </div>
      <div class="company-footer">
        <p>
          Copy Right @ 2024 by Romantic Underwear | Developed by

          <a href="https://itgateway.org/" target="_blank"
            ><span class="c-text">itGateway Software Development</span></a
          >
        </p>
      </div>
    </div>

    <div class="mobile mt-5">
      <div class="mobile-footer">
        <ul>
          <hr />
          <li class="px-5">
            <div class="d-flex justify-content-between py-3 align-items-center">
              <p>Shop</p>
              <button @click="shop = !shop">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div class="box-text text-start mt-3" v-if="shop">
              <router-link class="nav-link" to="/products/bamboo/0">
                <p>Bamboo Fiber</p>
              </router-link>
              <router-link class="nav-link" to="/products/modal/0">
                <p>Lycra Modal</p>
              </router-link>
              <router-link class="nav-link" to="/products/spandex/0">
                <p>Spandex</p>
              </router-link>
            </div>
          </li>
          <hr />
          <li class="px-5">
            <div class="d-flex justify-content-between py-3 align-items-center">
              <p>Shopping Guide</p>
              <button @click="guide = !guide">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div class="box-text text-start mt-3" v-if="guide">
              <router-link class="nav-link" to="/cart">
                <p>Add to Cart</p>
              </router-link>

              <router-link class="nav-link" to="/">
                <p>Track My Order</p>
              </router-link>
            </div>
          </li>
          <hr />
          <li class="px-5">
            <div class="d-flex justify-content-between py-3 align-items-center">
              <p>About Romantic</p>
              <button @click="about = !about">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div class="box-text text-start mt-3" v-if="about">
              <router-link class="nav-link" to="/">
                <p>Our Story</p>
              </router-link>
              <router-link class="nav-link" to="/contact">
                <p>Contact Us</p>
              </router-link>
            </div>
          </li>
          <hr />
          <li class="px-5">
            <div class="d-flex justify-content-between py-3 align-items-center">
              <p>Services</p>
              <button @click="service = !service">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div class="box-text text-start mt-3" v-if="service">
              <router-link class="nav-link" to="/">
                <p>Membership</p>
              </router-link>

              <router-link class="nav-link" to="/contact">
                <p>Contact</p>
              </router-link>
              <router-link class="nav-link" to="/">
                <p>My Account</p>
              </router-link>
            </div>
          </li>
          <hr />
          <li class="px-5">
            <div class="d-flex justify-content-between py-3 align-items-center">
              <p>Register Now!</p>
              <button @click="register = !register">
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div class="box-text text-start justify-content-center">
              <p>Sign up now and get extra points & many promotions from us.</p>
              <router-link
                class="nav-link footer-btn d-flex align-items-center"
                to="/register"
                ><p>Sign Up Now</p>
                <i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </div>
          </li>
          <hr />
        </ul>
        <div class="footer-icon">
          <div class="d-flex align-items-center justify-content-center">
            <a
              href="https://www.facebook.com/romanticmenunderwear/?ref=embed_page"
              class="nav-link"
            >
              <i class="fa-brands fa-square-facebook"></i
            ></a>
            <a
              class="nav-link"
              href="https://www.youtube.com/@RomanticUnderwear"
              ><i class="fa-brands fa-youtube"></i
            ></a>
            <a href="#" class="nav-link">
              <i class="fa-brands fa-tiktok"></i
            ></a>
            <a href="#" class="nav-link"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
            <a href="#" class="nav-link"
              ><i class="fa-brands fa-square-x-twitter"></i
            ></a>
          </div>
        </div>
        <div
          class="justify-content-center footer-img align-items-center d-flex"
        >
          <router-link to="/"
            ><img src="../assets/romantic-logo.png" alt="" class="img-fluid"
          /></router-link>
        </div>
        <div class="company-footer">
          <p>
            Copy Right @ 2024 by Romantic Underwear | Developed by

            <span class="c-text">itGateway Software Development</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const shop = ref(false);
    const guide = ref(false);
    const about = ref(false);
    const service = ref(false);
    const register = ref(false);

    return {
      shop,
      guide,
      about,
      service,
      register,
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: auto;
  background: var(--footer-background-color);
  color: var(--font-color);
  position: relative;
}

.col-lg-2 {
  margin: 0px 20px;
}

.mobile {
  display: none;
}

.footer-padding {
  padding: 0px 130px;
}

.logo-text h2 {
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
}

.content-group ul li {
  line-height: 30px;
}

.content-group h5 {
  font-size: 20px;
  font-weight: 700;
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
  width: 150px;
  margin: 10px auto;
}

.fa-brands {
  font-size: 32px;
  padding: 10px 0px 0px;
}

.footer-btn {
  position: relative;
  width: 195px;
  height: auto;
  margin-top: 10px;
  padding: 5px 40px;
  border: 1px solid red;
  border-radius: 6px;
  color: #111;
  background: red;
  z-index: 1;
  transition: 1s;
}

.footer-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #c8d0d8;
  border-radius: 6px;
  z-index: -1;
  transform-origin: left;
  transition: transform 1s ease;
  transform: scaleX(1);
}

.footer-btn:hover::before {
  transform-origin: right;
  transition: transform 0.5s ease;
  transform: scaleX(0);
}

.footer-btn:hover {
  color: #fff;
  background: red;
}

.footer-link {
  text-decoration: none;
}

.nav-link:hover {
  color: red;
  transition: 0.5s;
}

.footer-btn .fa-solid {
  margin-left: 5px;
}

.footer-icon {
  margin-left: 20px;
}

.footer-icon .fa-brands {
  margin-right: 15px;
}

.company-footer {
  margin: 20px 0px;
  font-size: 16px;
}

.company-footer a {
  text-decoration: none;
}

.c-text {
  color: #ff7000;
}

@media (min-width: 1920px) {
  .footer-padding {
    padding: 0px 130px;
  }
}

@media (max-width: 1400px) {
  .footer-padding {
    padding: 0px 65px;
  }
}

@media (max-width: 1280px) {
  .logo-text {
    margin-top: 20px;
  }
  .col-lg-2 {
    margin: 0px 15px;
  }
  .footer-btn {
    padding: 10px 20px;
    width: 160px;
  }
  .footer-padding {
    padding: 0px 20px;
  }
}

@media (max-width: 1024px) {
  .footer-btn {
    padding: 10px 20px;
  }

  .content-group h5 {
    font-size: 18px;
  }
}

@media (max-width: 860px) {
  .footer-col {
    width: 25%;
  }
  .col-lg-2 {
    margin: 0px;
  }

  .footer-col-custom {
    width: 100%;
    margin: 20px auto;
    text-align: center;
  }

  .footer-btn {
    justify-content: center;
    align-content: center;
    align-self: center;
    align-items: center;
    margin: 10px auto;
  }

  .footer-col-custom .content-group {
    text-align: center !important;
  }
  .footer-padding {
    padding: 20px;
  }
  .footer-group {
    align-content: center;
    margin-bottom: 10px;
  }
}

@media (max-width: 600px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }

  .box-text p {
    margin-bottom: 20px;
  }

  .footer-btn {
    margin: 0px;
    padding: 10px;
  }

  .footer-btn p {
    margin-bottom: 0;
    margin-right: 10px;
  }
}
</style>
