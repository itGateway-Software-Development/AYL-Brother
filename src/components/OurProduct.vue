<template>
  <div class="container content-wrapper mt-2">
    <div
      class="heading text-center mb-3"
      data-aos="fade-down"
      data-aos-duration="2000"
    >
      <div class="row align-items-center justify-content-center">
        <div class="col-5 line"><hr /></div>
        <div class="col-2 p-col-2"><h1>Our Product</h1></div>
        <div class="col-5 line"><hr /></div>
      </div>
    </div>
    <div class="d-flex our-product">
      <div
        class="product-1 mb-3"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div class="product-img-1">
          <img
            src="../assets/product/b.jpg"
            alt="Product Img"
            class="img-fluid"
          />
        </div>
        <div class="product-content text-center mt-2">
          <h4>Boxer Brief</h4>
          <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</p>
          <div class="mt-3">
            <button class="btn shopnow-button">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div class="product-2" data-aos="fade-left" data-aos-duration="2000">
        <div class="product-img-2">
          <img
            src="../assets/product/a.jpg"
            alt="Product Img"
            class="img-fluid"
          />
        </div>
        <div class="product-content text-center mt-2">
          <h4>Brief</h4>
          <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</p>
          <div class="mt-3">
            <button class="btn shopnow-button">SHOP NOW</button>
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
.our-product {
  justify-content: space-around;
}

.product-img-1 {
  width: 600px;
  height: auto;
  border: 2px solid #111111;
}

.product-img-2 {
  width: 600px;
  height: auto;
  border: 2px solid #ea0a0a;
}

.product-img-2 img {
  width: 597px;
  height: 697px;
}

.product-img-1 img {
  width: 597px;
  height: 697px;
}

.product-content h4 {
  font-weight: bold;
  text-transform: uppercase;
}

.product-1 {
  display: flex;
  flex-direction: column;
}
.product-2 {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1200px) {
  .product-img-1 {
    width: 460px;
    height: auto;
    border: 2px solid #111111;
  }

  .product-1 {
    align-items: center;
  }

  .product-2 {
    align-items: center;
  }

  .product-img-2 {
    width: 460px;
    height: auto;
    border: 2px solid #ea0a0a;
  }

  .our-product {
    display: flex;
  }
}

@media (max-width: 800px) {
  .product-img-1 {
    width: 300px;
    height: auto;
    border: 2px solid #111111;
  }

  .product-1 {
    align-items: center;
  }

  .product-2 {
    align-items: center;
  }

  .product-img-2 {
    width: 300px;
    height: auto;
    border: 2px solid #ea0a0a;
  }

  .our-product {
    display: flex;
  }
}

@media (max-width: 500px) {
  .product-img-1 {
    width: 300px;
    height: auto;
    border: 2px solid #111111;
  }

  .product-1 {
    align-items: center;
  }

  .product-2 {
    align-items: center;
  }

  .product-img-2 {
    width: 300px;
    height: auto;
    border: 2px solid #ea0a0a;
  }

  .our-product {
    display: flex;
    flex-direction: column;
  }

  .p-col-2 {
    width: 100%;
  }
}
</style>
