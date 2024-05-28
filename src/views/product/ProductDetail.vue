<template>
  <div class="detail">
    <div class="container content-wrapper">
      <div class="row">
        <div class="col-6 left-photo">
          <div class="d-flex">
            <div class="mini-photo p-2">
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
              <img
                src="../../assets/product/a.jpg"
                class="img-fluid py-5"
                alt=""
              />
            </div>
            <div class="max-photo p-2 mt-5">
              <img src="../../assets/product/b.jpg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div class="col-6 right-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  setup(props) {
    console.log(props);
  },
};
</script>

<style>
.detail {
  margin: 100px 0px;
}

.mini-photo {
  width: 100px;
  height: max-content;
  object-fit: cover;
}

.max-photo {
  width: 500px;
  height: 500px;
}
</style>
