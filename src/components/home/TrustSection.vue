<template>
  <section class="trustees routes">
    <div class="container">
      <div class="trustees-header">
        <h3>Why Technify</h3>
        <p>We operates on strong values and offer services to our esteemed clients</p>
      </div>
      <div class="trustees-content">
        <div class="trustees-heads">
          <div class="trustees-head">
            <h3>Trusted by 10,000+ businesses</h3>
            <p>
              Technify has made a great impact in providing solutions to
              nomerous business in nigeria
            </p>
          </div>
          <div class="trustees-head">
            <h3>10years+ in Business</h3>
            <p>
              Technify has made a great impact in providing solutions to
              nomerous business in nigeria
            </p>
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
import TrusteesComment from "@/components/home/TrusteesComment.vue";
export default {
  name: "TrusteesSection",
  components: {
    TrusteesComment,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.trustees {
  padding: 4rem 0;
  &-header {
    text-align: center;
    margin-bottom: 3rem;
    & h3 {
      font-size: 26px;
      font-weight: 600;
      line-height: 32.24px;
      margin-bottom: 1rem;
      color: $header;
    }
    & p {
      font-size: 12px;
      font-weight: 400;
      line-height: 22.78px;
      color: $sub;
    }
  }
  &-heads {
    text-align: center;
    & .trustees-head {
      margin: 2rem 0;
      & h3 {
        font-size: 26px;
        font-weight: 600;
        line-height: 32.24px;
        margin-bottom: 1rem;
        color: $header;
      }
      & p {
        font-size: 12px;
        font-weight: 400;
        line-height: 22.78px;
        color: $sub;
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
    &-heads {
      text-align: left;
      flex-basis: 40%;
      & .trustees-head {
        margin: 0 0 2rem 0;
      }
    }
    &-comments {
      flex-basis: 60%;
      margin: 0 3rem 0 0;
    }
  }
}

@media screen and (min-width: 1200px) {
  .trustees {
    &-header {
      margin-bottom: 5rem;
      & h3 {
        font-size: 30px;
        line-height: 40.88px;
      }
      & p {
        font-size: 16px;
        line-height: 27.13px;
        width: 400px;
        margin: auto;
      }
    }
    &-heads {
      & .trustees-head {
        & h3 {
          font-size: 30px;
          line-height: 40.88px;
        }
        & p {
          font-size: 16px;
          line-height: 27.13px;
        }
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .trustees {
    &-header {
      & h3 {
        font-size: 37px;
        line-height: 45.88px;
      }
      & p {
        font-size: 18px;
        line-height: 30.13px;
        width: 450px;
      }
    }
    &-heads {
      & .trustees-head {
        & h3 {
          font-size: 37px;
          line-height: 45.88px;
        }
        & p {
          font-size: 18px;
          line-height: 30.13px;
        }
      }
    }
  }
}
</style>
