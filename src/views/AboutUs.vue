<template>
  <div class="about-us-section">
    <div class="about-img mb-5">
      <img src="../assets/banner/1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="content-about-us content-wrapper">
      <div class="t-content text-start">
        <h3>{{ $t("story") }}</h3>
        <div class="p-content">
          <h5>{{ $t("about-romantic") }}</h5>
          <p>
            {{ $t("about-ro-contnet-1") }}
          </p>
          <br />
          <p>
            {{ $t("about-ro-contnet-2") }}
          </p>
        </div>
        <div class="p-content">
          <h5>{{ $t("logo") }}</h5>
          <p>{{ $t("logo-content-1") }}</p>
          <br />
          <p>
            {{ $t("logo-content-2") }}
          </p>
          <br />
          <p>
            {{ $t("logo-content-3") }}
          </p>
        </div>
        <div class="p-content">
          <h5>Great Values</h5>
          <p>
            {{ $t("value-content-1") }}
          </p>
          <br />
          <p>
            {{ $t("value-content-2") }}
          </p>
          <br />
          <p>
            {{ $t("value-content-3") }}
          </p>
        </div>
        <div class="p-content">
          <h5>Romantic gives differences</h5>
          <p>
            {{ $t("difference") }}
          </p>
          <br />
          <ul>
            <li>{{ $t("difference-content-1") }}</li>
            <li>{{ $t("difference-content-2") }}</li>
            <li>{{ $t("difference-content-3") }}</li>
            <li>{{ $t("difference-content-4") }}</li>
            <li>{{ $t("difference-content-5") }}</li>
            <li>{{ $t("difference-content-6") }}</li>
            <li>{{ $t("difference-content-7") }}</li>
          </ul>
          <br />
          <p>{{ $t("difference-content-8") }}</p>
        </div>
        <div class="p-content">
          <p>
            {{ $t("about-last-content") }}
          </p>
        </div>
        <div class="author">
          <h5>Motto</h5>
        </div>
        <div class="note mt-5">
          <h5>"Feel free, live active"</h5>
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

<style>
.about-us-section {
  margin: 150px 0px;
}

.content-wrapper {
  padding: 0 9%;
}

.content-about-us {
  margin-top: 50px;
}

.p-content {
  padding: 0px 600px 0px 0px;
  margin: 50px 0px;
}

.t-content {
  font-family: "Chakra Petch", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: var(--font-color);
  font-size: 20px;
}

.t-content h3 {
  font-size: 32px;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.t-content h5 {
  font-weight: bold;
  text-decoration: underline;
  color: var(--font-color);
  font-size: 24px;
}

.p-content ul li {
  list-style: disc;
}
.p-content ul {
  padding: 0px 0px 0px 25px;
}

.author,
.note h5 {
  font-style: italic;
}

@media (max-width: 1280px) {
  .p-content {
    padding: 0px 400px 0px 0px;
  }
}

@media (max-width: 1024px) {
  .p-content {
    padding: 0px 200px 0px 0px;
  }
}

@media (max-width: 860px) {
  .p-content {
    padding: 0px 100px 0px 0px;
  }

  .about-us-section {
    margin: 50px 0px;
  }
}

@media (max-width: 600px) {
  .about-img img {
    height: 250px;
  }

  .p-content {
    padding: 0px;
  }

  .content-about-us {
    margin-bottom: 50px;
  }
}
</style>
