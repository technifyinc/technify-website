<template>
  <div class="trustees-comment">
    <div height="857" class="animate">
      <div class="trust">
        <img src="@/assets/img/trust-image.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Dele Momodu</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vitae eius voluptate? Quisquam, minima. Nihil voluptas consectetur
            mollitia delectus atque? Distinctio hic provident dolor quisquam
            sequi cumque enim? Consequuntur cupiditate, saepe odio atque facilis fugit quam doloribus? Deserunt temporibus architecto molestias, repudiandae optio facere porro obcaecati nam, maiores deleniti maxime.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/trust-image.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Shola Allison</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vitae eius voluptate? Quisquam, minima. Nihil voluptas consectetur
            mollitia delectus atque? Distinctio hic provident dolor quisquam
            sequi cumque enim? Consequuntur cupiditate, saepe odio atque facilis fugit quam doloribus? Deserunt temporibus architecto molestias, repudiandae optio facere porro obcaecati nam, maiores deleniti maxime.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/trust-image.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Mark Musk</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vitae eius voluptate? Quisquam, minima. Nihil voluptas consectetur
            mollitia delectus atque? Distinctio hic provident dolor quisquam
            sequi cumque enim? Consequuntur cupiditate, saepe odio atque facilis fugit quam doloribus? Deserunt temporibus architecto molestias, repudiandae optio facere porro obcaecati nam, maiores deleniti maxime.
          </p>
        </div>
      </div>
            <div class="trust">
        <img src="@/assets/img/trust-image.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Dele Momodu</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vitae eius voluptate? Quisquam, minima. Nihil voluptas consectetur
            mollitia delectus atque? Distinctio hic provident dolor quisquam
            sequi cumque enim? Consequuntur cupiditate, saepe odio atque facilis fugit quam doloribus? Deserunt temporibus architecto molestias, repudiandae optio facere porro obcaecati nam, maiores deleniti maxime.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/trust-image.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Shola Allison</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vitae eius voluptate? Quisquam, minima. Nihil voluptas consectetur
            mollitia delectus atque? Distinctio hic provident dolor quisquam
            sequi cumque enim? Consequuntur cupiditate, saepe odio atque facilis fugit quam doloribus? Deserunt temporibus architecto molestias, repudiandae optio facere porro obcaecati nam, maiores deleniti maxime.
          </p>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/trust-image.svg" alt="trust_img" />
        <div class="title_content">
          <h3>Mark Musk</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse vitae eius voluptate? Quisquam, minima. Nihil voluptas consectetur
            mollitia delectus atque? Distinctio hic provident dolor quisquam
            sequi cumque enim? Consequuntur cupiditate, saepe odio atque facilis fugit quam doloribus? Deserunt temporibus architecto molestias, repudiandae optio facere porro obcaecati nam, maiores deleniti maxime.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
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
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
    width: 100%;
    height: 3rem;
  }
  &:before {
    top: 0;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
  }
}
.animate {
  animation: 35s linear 0s infinite normal none running autoScroll;
}
.trust {
  background: #ededed;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 10px!important;
  display: flex;
  align-items: flex-start;
  text-align: left;
  & img {
    width: 29px;
    margin-right: 2rem;
  }
  & .title_content {
    & h3 {
      font-weight: 600;
      font-size: 14px;
      line-height: 22.96px;
      margin-bottom: 1rem;
      color: $header;
    }
    & p {
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
