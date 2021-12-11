<template>
  <section class="trustees">
    <div class="container">
      <div class="trustees-content">
        <div class="trustees-heads">
          <div class="trustees-head">
            <h3>Trusted by 10,000+ businesses</h3>
            <p>Technify has made a great impact in providing solutions to nomerous business in nigeria</p>
          </div>
          <div class="trustees-head">
            <h3>10years+ in Business</h3>
            <p>Technify has made a great impact in providing solutions to nomerous business in nigeria</p>
          </div>
        </div>
        <div class="trustees-comments">
          <trustees-comment />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TrusteesComment from "@/components/home/TrusteesComment.vue"
export default {
  name: "TrusteesSection",
  components: {
    TrusteesComment
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.trustees {
  background: $bg;
  background: url("@/assets/img/bg-01.png") no-repeat top 0px left 0px, url("@/assets/img/bg-02.png") no-repeat right 0px bottom 0px;
  padding: 2rem 0;
  &-heads {
    text-align: center;
    & .trustees-head {
      margin: 2rem 0;
      & h3 {
        font-size: 26px;
        font-weight: 600;
        line-height: 32.24px;
        margin-bottom: 1rem;
      }
      & p {
        font-size: 12px;
        font-weight: 400;
        line-height: 16.5px;
      }
    }
  }
  &-comments {
    margin-top: 4rem;
  }
}

@media screen and (min-width: 700px) {
  .trustees {
    &-content {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row-reverse;
    }
    &-head {
      text-align: left;
      flex-basis: 20%;
      margin: 0;
    }
    &-comments {
      flex-basis: 80%;
      margin: 0 2rem 0 0;
    }
  }
}

@media screen and (min-width: 1200px) {
  .trustees {
    &-head {
      flex-basis: 10%;
    }
    &-comments {
      flex-basis: 90%;
      margin: 0;
    }
  }
}
@media screen and (min-width: 1400px) {
  .trustees {
    &-heads {
      & .trustees-head {
        margin: 1rem 0;
        & h3 {
          font-size: 37px;
          line-height: 45.88px;
        }
        & p {
          font-size: 18px;
          line-height: 25.13px;
        }
      }
    }
  }
}
</style>
