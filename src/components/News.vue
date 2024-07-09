<template>
  <div class="news">
    <div class="content-wrapper">
      <div class="news-container d-flex justify-content-between">
        <div class="news-content">
          <div class="heading-text">
            <h5>Our CSR Programm for You!</h5>
          </div>
          <div class="content-header text-start">
            <h1>Watch Healthy Program on Youtube</h1>
          </div>
          <div class="content-text text-start">
            <h5>
              We are providing many healthy programm video on Youtube channel.
              Please make like video, subcribe channel and get all notification
              for upcoming knowledge content.
            </h5>
          </div>
          <div class="news-buttom text-end">
            <a
              href="https://www.youtube.com/@RomanticUnderwear"
              target="_blank"
              class="btn d-flex align-items-center new-btn justify-content-center"
            >
              <p>Join YouTube Channel</p>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="video-list">
          <div class="d-flex-column list-video">
            <div class="news-video d-flex">
              <iframe
                src="https://www.youtube.com/embed/Ov8nG42vj7M?si=_ly9rXIW5MvV_gQv"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div class="news-text ms-5 text-start">
                <h5>Erectile dysfunction</h5>
                <p>Men's Health Tips(Erectile dysfunction)</p>
              </div>
            </div>
            <div class="news-video d-flex last">
              <iframe
                src="https://www.youtube.com/embed/DZO_Brnq56k?si=lGcHEHUmzhE0xuu3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div class="news-text ms-5 text-start">
                <h5>Smoking</h5>
                <p>Men's Health Tips(Smoking)</p>
              </div>
            </div>
            <!-- <div class="news-video d-flex last">
              <iframe
                src="https://www.youtube.com/embed/uczvCixputM?si=KpyBV4rHAeMg620U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <div class="news-text ms-5 text-start">
                <h5>Tinea</h5>
                <p>Men's Health Tips(Tinea)</p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="mb-video-list">
          <swiper
            :pagination="true"
            :modules="modules"
            :loop="true"
            :navigation="true"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="news-video d-flex-column">
                <iframe
                  src="https://www.youtube.com/embed/Ov8nG42vj7M?si=_ly9rXIW5MvV_gQv"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="news-text ms-5 text-start">
                  <h5>Erectile dysfunction</h5>
                  <p>
                    တည်ကြည်ခန့်ညား ပုရိသ အမျိုးသားတို့၏
                    ကျန်းမာရေးသိကောင်းစရာများ(ပန်းသေ ပန်းညှိုးရောဂါ)
                  </p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="news-video d-flex-column">
                <iframe
                  src="https://www.youtube.com/embed/DZO_Brnq56k?si=lGcHEHUmzhE0xuu3"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="news-text ms-5 text-start">
                  <h5>Smoking</h5>
                  <p>
                    တည်ကြည်ခန့်ညားပုုရိသ အမျိုးသားတို့အတွက်
                    ကျန်းမာရေးသိကောင်းစရာများ (ဆေးလိပ်သောက်ခြင်း)
                  </p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="news-video d-flex-column">
                <iframe
                  src="https://www.youtube.com/embed/DZO_Brnq56k?si=lGcHEHUmzhE0xuu3"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="news-text ms-5 text-start">
                  <h5>Smoking</h5>
                  <p>
                    တည်ကြည်ခန့်ညားပုုရိသ အမျိုးသားတို့အတွက်
                    ကျန်းမာရေးသိကောင်းစရာများ (ဆေးလိပ်သောက်ခြင်း)
                  </p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="news-video d-flex-column">
                <iframe
                  src="https://www.youtube.com/embed/5MZk6cQS7kw?si=gUi1ja1OidxTbf94"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="news-text ms-5 text-start">
                  <h5>ဆေးစွဲခြင်း နဲ့ပတ်သတ်သည့် သိကောင်းစရာများ</h5>
                  <p>
                    (အမျိုးသားများ ကျန်းမာရေးအတွက် အသိပညာ ဗဟုသုတိုးပွားစေရန်
                    Romantic Men’s Underwear မှ ပံပိုးကူညီ
                    တင်ဆက်ပေးထားခြင်းဖြစ်ပါသည်။)
                  </p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="news-video d-flex-column">
                <iframe
                  src="https://www.youtube.com/embed/uczvCixputM?si=KpyBV4rHAeMg620U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="news-text ms-5 text-start">
                  <h5>Tinea</h5>
                  <p>
                    တည်ကြည်ခန့်ညားပုရိသ အမျိုးသားတို့အတွက်
                    ကျန်းမာရေးသိကောင်းစရာများ (ပွေး ရောဂါ)
                  </p>
                </div>
              </div></swiper-slide
            >
            <swiper-slide>
              <div class="news-video d-flex-column">
                <iframe
                  src="https://www.youtube.com/embed/Vze6X7hpj1M?si=31TJ1XMpTc3UyDN9"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <div class="news-text ms-5 text-start">
                  <h5>
                    ခံတွင်းအနံ့ဆိုး ခြင်းနဲ့ပတ်သတ်သည့် သိကောင်းစရာများ
                    အကြောင်းအရာများ
                  </h5>
                  <p>
                    (အမျိုးသားများ ကျန်းမာရေးအတွက် အသိပညာ ဗဟုသုတိုးပွားစေရန်
                    Romantic Men’s Underwear မှ ပံပိုးကူညီ
                    တင်ဆက်ပေးထားခြင်းဖြစ်ပါသည်။)
                  </p>
                </div>
              </div></swiper-slide
            >
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import {
  FreeMode,
  Scrollbar,
  Mousewheel,
  Pagination,
  Navigation,
} from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Scrollbar, Mousewheel, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.heading-text {
  width: 350px;
  padding: 10px 10px;
  background: red;
  color: #fff;
  margin-bottom: 10px;
}

.heading-text h5 {
  margin-top: 10px;
}

.news-content {
  color: var(--font-color);
}

.heading-text h5 {
  font-weight: 600;
}

.list-video {
  padding: 40px;
}

.video-list {
  width: 1500px;
  height: max-content;
  background: #f2f2f2;
  margin-left: 50px;
  margin-top: 80px;
}

.mb-video-list {
  display: none;
}

.news {
  margin: 100px 0;
}

.news-content .content-text {
  padding: 0px 50px 0px 0px;
}

.new-btn {
  margin-top: 20px;
  width: 220px;
  border: 1px solid red;
  padding: 10px;
  color: var(--font-color);
}

.new-btn:hover {
  background: red;
  color: #fff;
}

.new-btn .fa-solid {
  margin-left: 10px;
}

.news {
  margin: 150px 0px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px;
}

.last {
  margin: 0px !important;
}

iframe {
  width: 250px;
  height: 150px;
}

.news-video {
  margin: 0px 0px 30px;
}

@media (max-width: 1400px) {
  .content-wrapper {
    padding: 0px 6%;
  }
}

@media (max-width: 1200px) {
  .news-content .content-header h1 {
    font-size: 35px;
  }

  .video-list {
    height: 400px;
  }
}

@media (max-width: 1024px) {
  iframe {
    width: 200px;
    height: 150px;
  }

  .news-text p {
    font-size: 14px;
  }

  .content-wrapper {
    padding: 0px 2%;
  }
}

@media (max-width: 800px) {
  .news-container {
    flex-direction: column;
    justify-content: center !important;
    align-content: center;
    align-self: center;
    align-items: center;
  }

  .content-wrapper {
    padding: 0px;
  }

  .video-list {
    margin: 20px 0px;
    width: auto;
    width: 700px;
  }

  .news-content {
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
}

@media (max-width: 500px) {
  .swiper-slide {
    width: 100% !important;
    height: 100%;
    margin: 20px 0px;
  }

  .video-list {
    height: 300px;
  }

  iframe {
    width: 300px;
    height: 200px;
  }

  .video-list {
    cursor: pointer;
    display: none;
  }

  .news {
    margin: 0px;
  }

  .mb-video-list {
    display: block;
    width: 100%;
  }

  .news-video {
    width: 100%;
  }

  .news-text {
    margin: 10px 0px;
  }

  .news-text h5 {
    font-weight: 600;
  }
}
</style>
