<template>
  <div class="about-us-section">
    <div class="about-img mb-5">
      <img src="../assets/banner/1.jpg" alt="" class="img-fluid" />
    </div>
    <div class="content-about-us content-wrapper">
      <div class="t-content text-start">
        <h3>About Us</h3>
        <div class="p-content">
          <h5>About Romantic</h5>
          <p>
            Romantic Brand has been well-known since 2011 in the communal life
            of men who have high self- Confidence.
          </p>
          <br />
          <p>
            The men’s underwear brand could have been stood firmly as smart
            men’s favorite for its high quality, great tailoring, being stylish
            and fit for every body profile.
          </p>
        </div>
        <div class="p-content">
          <h5>Our Logo</h5>
          <p>Romantic began from Eiffel Tower on the Champ de Mars in Paris.</p>
          <br />
          <p>
            The World famous wrought-iron lattice Tower, lasting for hundreds of
            years, is the witness of sharing kindness among romantic lovers.
          </p>
          <br />
          <p>
            Therefore, the logo represents Eiffel Tower with the purpose of
            sharing everlasting compassion and love.
          </p>
        </div>
        <div class="p-content">
          <h5>Great Values</h5>
          <p>
            The famous brand, Romantic is produced for men to get
            self-confidence and attractiveness, supporting not only for beauty
            and good look, but also for healthy life style.
          </p>
          <br />
          <p>
            It will probably be a place of bacteria and funguses, those can
            cause unpleasant odors and skin problems, if the men’s underwear is
            poor in quality.
          </p>
          <br />
          <p>
            So, this high-tech Romantic Men’s wear is carefully made of bamboo
            fiber, Lycra and pure cotton as an advanced product with modern
            technology.
          </p>
        </div>
        <div class="p-content">
          <h5>Romantic gives differences</h5>
          <p>
            Romantic sharing active and healthy lifestyle with self-assurance
          </p>
          <br />
          <ul>
            <li>Highest sweat absorption rate</li>
            <li>As light as a feather</li>
            <li>Silky Softness</li>
            <li>Protect from bacteria and fungal disease</li>
            <li>Away from bad odors</li>
            <li>Perfect Ventilation</li>
            <li>Comfort in any season</li>
          </ul>
          <br />
          <p>Make yourself attractive most</p>
        </div>
        <div class="p-content">
          <p>
            Romantic, that is sharing the highest attractiveness and
            self-confidence to the men who want to possess a romantic life
            filled with warm regards and love.
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
    margin: 20px 0px;
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
