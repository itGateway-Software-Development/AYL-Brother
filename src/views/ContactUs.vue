<template>
  <div class="contact-us">
    <div class="header-main-img">
      <img src="../assets/contact-us.png" class="img-fluid" alt="" />
    </div>
    <div class="justify-content-center mt-5">
      <div class="contact-box">
        <div class="box-content">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.4970234381713!2d96.16322928233441!3d16.8512904527942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1934a8db90749%3A0xa64eee564c9ea816!2sAYL%20%26%20Brothers%20Company!5e0!3m2!1sen!2sth!4v1718032715016!5m2!1sen!2sth"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="text-contact">
            <div class="meet-us text-start">
              <div class="header-meetus">
                <h3>Meet Us</h3>
              </div>
              <div class="meet-us-content">
                <div class="d-flex align-items-center meet-content-text">
                  <span class="material-symbols-outlined"> call </span>
                  <p>+959 96723912</p>
                </div>
                <div class="d-flex align-items-center meet-content-text">
                  <span class="material-symbols-outlined"> mail </span>
                  <p>romantic@gmail.com</p>
                </div>
                <div class="d-flex align-items-center meet-content-text">
                  <span class="material-symbols-outlined"> map </span>
                  <p>Parami Rd, Yangon, Myanmar</p>
                </div>
              </div>
            </div>
            <div class="contact text-start">
              <div class="header-meetus">
                <h3>Contact Us</h3>
              </div>
              <div class="input-group mb-3 mt-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="form-floating mt-5 mb-3">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <div class="contact-button mt-5 mb-3">
                <button class="btn shopnow-button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scroll(0, 0);
    });
  },
};
</script>

<style scoped>
.contact-us {
  margin: 120px 0;
}

iframe {
  width: 440px;
  height: 350px;
}

.meet-us {
  width: 440px;
  height: 350px;
  background: #ffffff;
  padding: 10px 20px;
}

.contact {
  width: 440px;
  height: 350px;
  background: #f2f2f2;
  padding: 10px 20px;
}

.meet-content-text {
  padding: 10px 0;
}

.header-meetus h3 {
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.meet-content-text p {
  padding: 0px 15px;
  font-size: 20px;
}

.meet-content-text .material-symbols-outlined {
  color: red;
}

.form-control {
  border: 0.9px solid #ffffff;
}

.box-content {
  display: flex;
  align-content: center;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
}

.text-contact {
  display: flex;
}

@media (max-width: 1200px) {
  iframe,
  .meet-us,
  .contact {
    height: 300px;
    width: 350px;
  }
}

@media (max-width: 1024px) {
  iframe,
  .meet-us,
  .contact {
    height: 300px;
    width: 300px;
  }
}

@media (max-width: 800px) {
  .contact-us {
    margin: 30px 0;
  }
  .contact-box {
    width: 100%;
  }
  .box-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .map {
    width: 600px;
    margin: 10px 0px;
  }
  iframe {
    width: 600px !important;
  }

  .text-contact {
    display: flex;
  }
}

@media (max-width: 500px) {
  .map {
    width: 380px;
  }

  .contact {
    width: 380px;
  }

  iframe {
    width: 380px !important;
  }

  .text-contact {
    display: flex;
    flex-direction: column;
  }

  .meet-us {
    height: max-content;
    margin-bottom: 10px;
  }
  .box-content {
    margin: 0px -10px 0px;
  }
}
</style>
