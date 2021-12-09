<template>
  <main class="main">
    <Header />
    <div class="container">
      <div class="main-content routes">
        <div class="main-text" data-aos="fade">
          <h1>Innovate with our Solutions</h1>
          <p>
            We build out technologies to improve business processes end to end
            and optimize workflow.
          </p>
        </div>
        <div class="illus">
          <img
            src="@/assets/img/illus-01.svg"
            alt="illus_one"
            data-aos="zoom-in"
          />
        </div>
      </div>
      <div class="trustees">
        <p>Trusted by <b>10,000+</b> businesses</p>
        <div class="trustees-list" data-aos="zoom-in">
          <a
            href="https://tradelenda.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://res.cloudinary.com/trade-lenda/image/upload/v1628132872/landing_page_pic/Group_11434_2_umfio2.png"
              alt="tradelenda"
          /></a>
          <a
            href="https://www.onekioskafrica.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><p>onekiosk</p></a
          >
          <a
            href="https://upbase.com.ng/"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="https://upbase.com.ng/assets/img/upbase.png"
              alt="upbase"
          /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"
            ><img src="@/assets/img/easyflip.svg" alt="easyflip"
          /></a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/navbar/Header.vue";
export default {
  name: "MainSection",
  components: {
    Header,
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.main {
  padding: 2rem 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &-text h1 {
    color: $pri-color;
    margin-bottom: 1rem;
    font-size: 30px;
    font-weight: bolder;
  }
  &-text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4rem;
  }
}

.trustees {
  background: $bg;
  padding: 2rem 0;
  margin-top: 2rem;
  &-content {
    text-align: center;
    & h3 {
      font-size: 30px;
    }
  }
  &-list {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    & img,
    p {
      width: 100px;
      padding: 1rem;
      margin: 1rem 0;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 700px) {
  .main-text {
    text-align: center;
    width: 450px;
    margin: auto auto 5rem;
    & h1 {
      font-size: 35px;
    }
    & p {
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 1000px) {
  .main {
    &-content {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
    }
    &-text {
      flex-basis: 50%;
      text-align: left;
      align-items: flex-start;
      margin: 0;
      & h1 {
        font-size: 40px;
        width: 400px;
        font-weight: 600;
      }
      & p {
        font-size: 20px;
        width: 400px;
      }
    }
    & .illus {
      flex-basis: 50%;
    }
    & .illus img {
      height: 500px;
    }
  }
}
@media screen and (min-width: 1200px) {
  .main {
    &-text {
      & h1 {
        font-size: 45px;
        width: 450px;
      }
      & p {
        font-size: 20px;
        width: 400px;
      }
    }
    & .illus img {
      height: 500px;
    }
  }
}
@media screen and (min-width: 1400px) {
  .container {
    width: 1200px;
  }
  .main-content {
    & h1 {
      font-size: 62px;
      line-height: 76.88px;
      width: 100%;
    }
    & p {
      font-weight: normal;
      font-size: 25px;
      line-height: 44px;
      width: 100%;
    }
  }
}
</style>
