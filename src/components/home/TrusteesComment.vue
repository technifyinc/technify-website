<template>
  <div class="trustees-comment">
    <div height="857" class="animate">
      <div class="trust">
        <img src="@/assets/img/avatar.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Floe Emmanuel</h3>
          <p>Founder Easyflip</p>
          <p>
            I just started using Technify Inc. and it has been a wonderful
            experience. I feel so blessed discovering their service. I would
            definitely say they are the best at what they do.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/avatar.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Arogudade Shina</h3>
          <p>COO TradeLenda</p>
          <p>
            Technify Inc. has been great. They are accommodating to our needs
            and budget, while also doing a great job. Right away, having a clean
            space was a load off our minds. We've been a customer for four years
            and our productivity is better, our stress is lower, and our clients
            are happier ever since we started working with Local Cleaning
            Service.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/avatar.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Ogunye Philip</h3>
          <p>Founder Candid8</p>
          <p>
            Technify Inc services were quick, courteous and very helpful. They
            helped me restore my site completely after an outage. I was worried
            it wouldn't be done in time for my big launch, but they finished the
            job with time to spare!
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/avatar.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Floe Emmanuel</h3>
          <p>Founder Easyflip</p>
          <p>
            I just started using Technify Inc. and it has been a wonderful
            experience. I feel so blessed discovering their service. I would
            definitely say they are the best at what they do.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/avatar.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Arogudade Shina</h3>
          <p>COO TradeLenda</p>
          <p>
            Technify Inc. has been great. They are accommodating to our needs
            and budget, while also doing a great job. Right away, having a clean
            space was a load off our minds. We've been a customer for four years
            and our productivity is better, our stress is lower, and our clients
            are happier ever since we started working with Local Cleaning
            Service.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/avatar.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Ogunye Philip</h3>
          <p>Founder Candid8</p>
          <p>
            Technify Inc services were quick, courteous and very helpful. They
            helped me restore my site completely after an outage. I was worried
            it wouldn't be done in time for my big launch, but they finished the
            job with time to spare!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.trustees-comment {
  height: 300px;
  margin: auto;
  overflow-y: hidden;
  position: relative;
  &:after,
  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
    width: 100%;
    height: 3rem;
  }
  &:before {
    top: 0;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 90%
    );
  }
}
.animate {
  animation: 35s linear 0s infinite normal none running autoScroll;
}
.trust {
  background: #ededed;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 10px !important;
  display: flex;
  align-items: flex-start;
  text-align: left;
  & img {
    width: 29px;
    height: 29px;
    border-radius: 50%;
    margin-right: 2rem;
  }
  & .title_content {
    & h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 22.96px;
      color: $header;
    }
    & p:nth-child(2) {
      font-weight: 400;
      font-size: 10px;
      line-height: 20px;
      color: $sub;
      margin: 0.3rem 0 1rem;
    }
    & p:nth-child(3) {
      font-weight: 400;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
    }
  }
}

@keyframes autoScroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-857px);
  }
}
@media screen and (min-width: 1000px) {
  .trustees-comment {
    max-width: 80%;
    margin: 0;
  }
  .trust {
    & img {
      width: 50px;
      height: 50px;
    }
    & .title_content {
      & h3 {
        font-size: 16px;
        line-height: 26.24px;
      }
      & p {
        font-size: 13px;
        line-height: 23.01px;
      }
    }
  }
}
</style>
