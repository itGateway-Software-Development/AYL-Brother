<template>
  <div>
    <MainSection></MainSection>
    <AvaFabric></AvaFabric>
    <News></News>
  </div>
</template>

<script>
import News from "../components/News";
import AvaFabric from "../components/AvaFabric";
import MainSection from "../components/MainSection";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    News,
    AvaFabric,
    MainSection,
  },
};
</script>
<style></style>
