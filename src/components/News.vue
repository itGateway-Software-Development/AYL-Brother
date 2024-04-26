<template>
  <div
    class="container content-wrapper mt-4"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div class="heading text-center">
      <h1>Romantic News</h1>
    </div>
    <v-carousel
      show-arrows="hover"
      cycle
      hide-delimiter-background
      class="desktop"
    >
      <v-carousel-item>
        <div class="news">
          <div class="row d-flex justify-content-around">
            <div
              class="col-4 col-md-6 col-sm-12 video"
              v-for="text in news"
              :key="text.id"
            >
              <div class="text-center justify-center align-center">
                <div class="text-center video-text">
                  {{ text.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="news">
          <div class="row d-flex justify-content-around">
            <div
              class="col-4 col-md-6 col-sm-12 video-2"
              v-for="text in news"
              :key="text.id"
            >
              <div class="text-center justify-center align-center">
                <div class="text-center video-text">
                  {{ text.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="news">
          <div class="row d-flex justify-content-around">
            <div
              class="col-4 col-md-6 col-sm-12 video-3"
              v-for="text in news"
              :key="text.id"
            >
              <div class="text-center justify-center align-center">
                <div class="text-center video-text">
                  {{ text.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <v-carousel
      height="260"
      show-arrows="hover"
      cycle
      hide-delimiter-background
      class="mobile"
    >
      <v-carousel-item v-for="text in news" :key="text.id">
        <div class="news">
          <div class="row d-flex justify-content-around">
            <div class="col-4 col-md-6 col-sm-12 mobile-video">
              <div class="text-center justify-center align-center">
                <div class="text-center video-text">
                  {{ text.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const news = ref([
      {
        id: 1,
        text: "Video 1",
      },
      {
        id: 2,
        text: "Video 2",
      },
      {
        id: 3,
        text: "Video 3",
      },
    ]);

    return { news };
  },
};
</script>

<style>
.news {
  padding: 20px;
}

.mobile {
  display: none;
}

.v-window {
  height: 300px;
}

.desktop {
  height: 380px !important;
}

.video {
  width: 400px;
  height: 300px;
  background: #767676;
  border: 1px solid #111111;
  justify-content: space-between;
}

.video-2 {
  width: 400px;
  height: 300px;
  background: blue;
  color: #ffffff;
  border: 1px solid #111111;
  justify-content: space-between;
}
.video-3 {
  width: 400px;
  height: 300px;
  background: red;
  border: 1px solid #111111;
  justify-content: space-between;
}
.video-text {
  margin-top: 120px;
  font-size: 30px;
}

@media (max-width: 1200px) {
  .video,
  .video-2,
  .video-3 {
    width: 300px;
    height: 200px;
  }
  .video-text {
    margin-top: 70px;
  }
  .desktop {
    height: 270px !important;
  }
}

@media (max-width: 800px) {
  .video,
  .video-2,
  .video-3 {
    width: 200px;
    height: 200px;
  }
  .video-text {
    margin-top: 80px;
    font-size: 24px !important;
  }
}

@media (max-width: 500px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }

  .mobile-video {
    width: 350px;
    height: 200px;
    background: #111111;
    color: #ffffff;
  }
}
</style>
