<template>
  <div class="slider">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/cover.jpg"
            class="d-block w-100 banner"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/cover.jpg"
            class="d-block w-100 banner"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/cover.jpg"
            class="d-block w-100 banner"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slider {
  margin-top: 65px;
}

.banner {
  height: 850px;
}

.carousel-indicators [data-bs-target] {
  background-color: #111111;
}

.carousel-indicators {
  margin-bottom: 0;
}

.carousel-indicators .active {
  background-color: red;
}

@media (max-width: 1400px) {
  .carousel-item .banner {
    height: 750px;
  }
}

@media (max-width: 1200px) {
  .carousel-item .banner {
    height: 650px;
  }
  .slider {
    margin: 0;
  }
}

@media (max-width: 800px) {
  .carousel-item .banner {
    height: 450px;
  }
}

@media (max-width: 500px) {
  .carousel-item .banner {
    height: 250px;
  }
}
</style>
