<template>
  <div class="empty">
    <div class="empty-board">
      <div class="container">
        <img src="@/assets/img/no-job.svg" alt="no-job" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/scss/global.scss";
.empty {
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
@media screen and (min-width: 1000px) {
  .empty {
    &-board {
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
  .empty {
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
