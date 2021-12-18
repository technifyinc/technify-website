<template>
  <div class="trustees-comment">
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
</template>

<script>

export default {
  data() {
    return {
      options: {
        type: "loop",
        drag: 'free',
        perPage: 1,
        easing: "ease",
        autoplay: true,
        interval: 2000,
        arrows: false,
        pagination: false,
        direction: "ttb",
        height: "316px",
        breakpoints: {
          1000: {
            height: "400px",
          },
        },
        autoScroll: {
          speed: 2,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.trustees-comment {
  position: relative;
  padding: 1.5rem 0;
  height: 300px;
  overflow: hidden;
  &:after,
  &:before {
    content: "";
    position: absolute;
    z-index: 1;
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
.trust {
  background: #ededed;
  animation: autoScroll 6s infinite ease-in-out backwards;
  transform-origin: top;
  transform-box: fill-box;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
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
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-500px);
  }
}
@media screen and (min-width: 700px) {
  @keyframes autoScroll {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-350px);
    }
  }
}
@media screen and (min-width: 1000px) {
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
