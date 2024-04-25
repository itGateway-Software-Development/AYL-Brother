<template>
  <div class="container content-wrapper mt-2">
    <div class="heading text-center">
      <h1>Our Product</h1>
    </div>
    <div class="d-flex our-product">
      <div class="product-1 mb-3">
        <div class="product-img-1">
          <img src="" alt="Product Img" />
        </div>
        <div class="product-content text-center mt-2">
          <h4>Boxer Brief</h4>
          <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</p>
          <div class="mt-3">
            <button class="btn shopnow-button">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div class="product-2">
        <div class="product-img-2">
          <img src="" alt="Product Img" />
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
  height: 700px;
  border: 2px solid #111111;
}

.product-img-2 {
  width: 600px;
  height: 700px;
  border: 2px solid #ea0a0a;
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
    height: 600px;
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
    height: 600px;
    border: 2px solid #ea0a0a;
  }

  .our-product {
    display: flex;
  }
}

@media (max-width: 800px) {
  .product-img-1 {
    width: 300px;
    height: 350px;
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
    height: 350px;
    border: 2px solid #ea0a0a;
  }

  .our-product {
    display: flex;
  }
}

@media (max-width: 500px) {
  .product-img-1 {
    width: 300px;
    height: 350px;
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
    height: 350px;
    border: 2px solid #ea0a0a;
  }

  .our-product {
    display: flex;
    flex-direction: column;
  }
}
</style>
