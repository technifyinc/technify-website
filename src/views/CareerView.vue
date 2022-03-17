<template>
  <Header />
  <div class="career">
    <div class="career-content">
      <div class="container">
        <div class="career-text">
          <h3>Join technify team of creative mind</h3>
        </div>
        <div class="illus" data-aos="zoom-in">
          <img src="@/assets/img/job.svg" alt="job" />
        </div>
      </div>
    </div>
    <div class="career-board">
      <div class="container">
        <img src="@/assets/img/no-job.svg" alt="no-job" />
        <h3>No Job yet</h3>
        <p>
          Opps!, we don't have a job opening yet kindly check back next time
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/navbar/TheHeader.vue";
import Footer from "@/components/navbar/TheFooter.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.career {
  margin-top: 38px;
  &-content {
    background: #f5eef8;
    padding: 5rem 0;
    & .career-text {
      margin-bottom: 4rem;
      & h3 {
        color: $pri-color;
        margin-bottom: 1.5rem;
        font-size: 25px;
        font-weight: 600;
        line-height: 37px;
      }
    }
  }

  &-board {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5rem 0;
    & .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 78px;
        height: 78px;
      }
      h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        margin: 2rem 0;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: $sub;
      }
    }
  }
}
@media screen and (min-width: 500px) {
  .career {
    &-content {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      & .career-text {
        margin-bottom: 0;
      }
      & .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        align-items: center;
        justify-content: center;
        grid-column-gap: 5rem;
      }
    }
  }
}
@media screen and (min-width: 1000px) {
  .career {
    & .career-content {
      height: 100vh;
      padding: 0;
    }
    & .career-text {
      margin-bottom: 0;
      & h3 {
        font-size: 43px;
        line-height: 60px;
        font-weight: 600;
      }
    }
    &-board {
      height: 600px;
      & .container {
        width: 400px;
        img {
          width: 85px;
          height: 85px;
        }
        h3 {
          font-size: 30px;
          line-height: 40px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .career {
    & .career-text {
      & h3 {
        font-size: 55px;
        line-height: 77.59px;
      }
    }
    &-board {
      & .container {
        width: 450px;
        h3 {
          font-size: 36px;
          line-height: 47px;
        }
        p {
          font-size: 22px;
          line-height: 36px;
        }
      }
    }
  }
}
</style>
