<template>
  <section class="what">
    <div class="container">
      <div class="what-content">
        <h2>What we do</h2>
        <p>Providing I.T. solutions for your business(s).</p>
        <div class="what-inner">
          <div class="lines hide-on-sm">
            <div
              class="line"
              :class="{ increment: line.increment }"
              v-for="line in lines"
              :key="line.index"
            ></div>
          </div>
          <div class="what-cards">
            <div
              class="what-text"
              :class="{ active: list.active }"
              v-for="list in lists"
              :key="list.index"
            >
              <h4>{{ list.title }}</h4>
              <p>{{ list.body }}</p>
            </div>
          </div>
          <div class="illus">
            <image-slider />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlider from "./ImageSlider.vue";
export default {
  components: { ImageSlider },
  name: "WhatSection",
  data() {
    return {
      lists: [
        {
          title: "Enterprise Software Development",
          body: "We help you Leverage our expertise in enterprise software development, API integration, modernising legacy systems, consolidating app portfolios to improve processes.",
          active: false,
        },
        {
          title: "I.T Consulting Service",
          body: "With the expertise and deep tech background of the best minds at Technify Inc, we create a comprehensive IT strategy for your organization's digital and technological transformation.",
          active: false,
        },
        {
          title: "Tools To Keep Your Network Working",
          body: "We provide standardized tools for monitoring, managing, and reporting. Our services include operations and system management, with availability monitoring and reporting.",
          active: false,
        },
      ],
      lines: [
        {
          increment: false,
        },
        {
          increment: false,
        },
        {
          increment: false,
        },
      ],
      intervalTime: 3000,
      current: 0,
    };
  },
  methods: {
    incrementMoveSlider() {
      this.lists.forEach((list) => {
        list.active = false;
      });
      this.lines.forEach((line) => {
        line.increment = false;
      });
      this.lists[this.current].active = true;
      this.lines[this.current].increment = true;
      if (this.current < this.lists.length - 1) {
        this.current++;
      } else {
        this.current = 0;
      }
      setTimeout(this.incrementMoveSlider, this.intervalTime);
    },
  },
  mounted() {
    this.incrementMoveSlider();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.what {
  background: $sec-bg;
  padding: 3rem 0;
  &-content {
    text-align: center;
    & h2 {
      margin-bottom: 1rem;
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      line-height: 32.24px;
      letter-spacing: 1px;
      color: $header;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
    }
  }
  &-text {
    text-align: left;
    padding: 1rem;
    margin-bottom: 0.6rem;
    & h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 17px;
      line-height: 23.13px;
      margin-bottom: 1rem;
    }
    & p {
      font-weight: 500;
      font-size: 12px;
      line-height: 22.78px;
    }
  }
  &-inner {
    margin: 3rem 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

.active {
  background: #bd8add;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  color: $white;
  & p {
    color: $white;
  }
}

@media screen and (min-width: 700px) {
  .what {
    &-cards {
      display: flex;
      flex-direction: column;
      flex-basis: 50%;
    }
    &-inner {
      flex-direction: row;
    }
    & .illus {
      flex-basis: 50%;
    }
  }
  .lines {
    margin-right: 3rem;
    & > div {
      margin: 0.3rem 0;
      border-radius: 17px;
    }
    .line {
      height: 26px;
      width: 5px;
      background: #b0b0b0;
      transition: height 1s ease;
    }
    .increment {
      height: 71px;
      background: #860fce;
    }
  }
}
@media screen and (min-width: 1000px) {
  .what {
    &-text {
      width: 500px;
      & h2 {
        font-size: 22px;
        line-height: 29.92px;
        font-weight: 700;
      }
      & p {
        font-size: 15px;
        line-height: 23.48px;
        font-weight: 500;
      }
    }
    &-inner {
      margin-top: 7rem;
    }
  }
}
@media screen and (min-width: 1200px) {
  .what {
    &-content {
      & h2 {
        font-size: 38px;
        font-weight: 600;
        line-height: 59.52px;
      }
      & p {
        font-size: 18px;
        font-weight: 400;
        line-height: 24.8px;
      }
    }
    &-text {
      & h4 {
        font-size: 22px;
        font-weight: 600;
        line-height: 29.92px;
      }
      & p {
        font-size: 15px;
        font-weight: 500;
        line-height: 23.48px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .what {
    &-content {
      & h2 {
        font-size: 48px;
      }
      & p {
        font-size: 20px;
      }
    }
    &-text {
      & p {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style>
