<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/"
          ><img src="@/assets/img/logo.png" alt="logo"
        /></router-link>
        <nav class="nav" :class="{ open: open }">
          <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
            <li><router-link :to="{ name: 'events' }">Events</router-link></li>
            <li @click="toggleSolution" class="soln-btn">
              <span :class="{ activeSoln: active }">Solution</span>
              <img
                @click="toggleSolution"
                src="@/assets/img/soln-down.svg"
                alt="back_btn"
                class="remove"
                :class="{ rotate: active }"
              />
            </li>
            <li><router-link :to="{ name: 'about' }">About Us</router-link></li>
            <li>
              <router-link :to="{ name: 'contact' }">Contact Us</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'home' }">get started</router-link>
            </li>
          </ul>
        </nav>
        <nav class="soln" :class="{ drop: drop }">
          <ul>
            <div class="contain">
              <li class="soln-first">
                <img
                  @click="toggleSolution"
                  src="@/assets/img/soln-chevron.svg"
                  alt="back_btn"
                  class="d-hide"
                />
                <p>Solutions</p>
                <img
                  @click="toggleSolution"
                  src="@/assets/img/soln-close.svg"
                  alt="back_btn"
                  class="hide"
                />
              </li>
              <li class="soln-content">
                <div class="soln-content-inner">
                  <img
                    src="@/assets/img/soln-tech.svg"
                    alt="technify_workspace"
                  />
                  <a href="#" class="desc">
                    <a href="#">technify workspace</a>
                    <p class="hide">
                      Technify is asuite of solutions to help improve business
                      processes end to end and optimize workflow with cutting
                      edge business solutions
                    </p>
                  </a>
                </div>
                <div
                  class="soln-content-inner"
                  v-for="solution in solutions"
                  :key="solution"
                  @click="goTo(solution.route)"
                >
                  <img :src="solution.icon" :alt="solution.title" />
                  <div class="desc">
                    <router-link :to="{ name: solution.route }">{{
                      solution.title
                    }}</router-link>
                    <p class="hide">{{ solution.desc }}</p>
                  </div>
                </div>
              </li>
              <li class="d-hide">
                <router-link :to="{ name: 'home' }">get started</router-link>
              </li>
            </div>
          </ul>
        </nav>
        <div
          @click="openNav"
          class="hamburger hide-on-lg"
          :class="{ change: open }"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderTag",
  data() {
    return {
      open: false,
      drop: false,
      active: false,
      solutions: [
        // {
        //   icon: require("@/assets/img/soln-tech.svg"),
        //   route: "home",
        //   title: "technify workspace",
        //   desc: "Technify is asuite of solutions to help improve business processes end to end and optimize workflow with cutting edge business solutions",
        // },
        {
          icon: require("@/assets/img/soln-softi.svg"),
          route: "software-int",
          title: "software integration",
          desc: "We help Improve software infrastructure with well-built microservices, reliable API, and data integration.",
        },
        {
          icon: require("@/assets/img/soln-bu.svg"),
          route: "business",
          title: "business analytic insight",
          desc: "Lorem ipsum dolor sit amet, dicta tollit ut mea, ei populo quodsi per. Assum option hendrerit eum id. Ipsum nostrud mei c",
        },
        {
          icon: require("@/assets/img/soln-it.svg"),
          route: "it",
          title: "it consulting services",
          desc: "With the expertise and deep tech background of the best minds at Technify Inc  to create a comprehensive IT strategy",
        },
        {
          icon: require("@/assets/img/soln-ded.svg"),
          route: "dedicated",
          title: "dedicated development team",
          desc: "We help scale your delivery capacity with dedicated developers and teams.",
        },
        {
          icon: require("@/assets/img/soln-cus.svg"),
          route: "custom",
          title: "custom software development",
          desc: "Support your business infrastructure with scalable software that improves key facets of your enterprise, from automation to employee collaboration.",
        },
      ],
    };
  },
  methods: {
    openNav() {
      this.open = !this.open;
      this.drop = false;
    },
    toggleSolution() {
      this.drop = !this.drop;
      this.active = !this.active;
    },
    goTo(id) {
      this.$router.push({ name: id });
    },
  },
  mounted() {
    this.$router.beforeEach((from, to, next) => {
      this.open = false;
      this.drop = false;
      next();
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 78px;
  background: $white;
  display: flex;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
img {
  width: 103px;
  height: 45px;
}
.hamburger {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 30px;
  height: 20px;
  & > div {
    height: 2px;
    width: 30px;
    background: $pri-color;
    margin: 0.1rem 0;
    transition: transform ease-in-out 0.4s;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    width: 16px;
  }
  & > div:nth-child(3) {
    width: 20px;
  }
}
.change.hamburger > div:nth-child(1) {
  transform: translate(1px, 5px) rotate(45deg);
  width: 20px;
}
.change.hamburger > div:nth-child(2) {
  opacity: 0;
}
.change.hamburger > div:nth-child(3) {
  transform: translate(0px, -6px) rotate(-45deg);
  width: 20px;
}

.open.nav,
.drop.soln {
  display: block;
  animation: fade ease-in-out 0.4s forwards;
}
@keyframes fade {
  to {
    opacity: 1;
  }
}
.nav,
.soln {
  position: fixed;
  top: 78px;
  left: 0;
  width: 100%;
  height: 100%;
  background: $white;
  display: none;
  opacity: 0;
  & ul {
    padding: 1rem;
  }
  & ul li {
    display: block;
    padding: 1rem 0;
    text-transform: capitalize;
    border-bottom: solid 1px rgba(99, 15, 150, 0.25);
  }
  & ul li:last-child {
    border: none;
    a {
      padding: 12px 20px;
      background: $sec-color;
      border-radius: 5px;
      margin-top: 2rem;
      width: 100%;
      text-align: center;
      font-size: 18px;
      display: inline-block;
      color: $white;
      text-align: center;
      font-weight: 600;
    }
    a.router-link-active {
      border: none;
    }
  }
  & a {
    color: #464646;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
  }
  & a.router-link-exact-active {
    font-weight: bold;
    color: $sec-color;
  }
}
.soln {
  overflow-y: scroll;
  .hide {
    display: none;
  }
  ul {
    margin-bottom: 7rem;
  }
  a {
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
  }
  .soln-content-inner {
    display: block;
    padding: 1rem 0;
    border-bottom: solid 1px rgba(99, 15, 150, 0.25);
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
  .soln-content-inner,
  li.soln-first {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    img {
      width: 20px;
      margin-right: 1rem;
    }
  }
  li.soln-first {
    p {
      font-size: 16px;
      font-weight: 600;
      line-height: 26px;
    }
    img {
      width: 14px;
      margin-right: 1.35rem;
    }
  }
}
.remove {
  display: none;
}
@media screen and (min-width: 1000px) {
  @mixin beforeEffect() {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 3.5px;
    width: 0;
    background: $sec-color;
    transition: width 0.5s ease-in-out;
  }
  @mixin afterEffect() {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 3.5px;
    width: 100%;
    background: $sec-color;
    transition: width 0.5s ease-in-out;
  }
  .hamburger {
    display: none;
  }
  .contain {
    width: 90%;
    margin: auto;
  }
  .remove {
    display: inline;
  }
  .soln-btn {
    display: flex;
    align-items: center;
    span {
      position: relative;
      padding-bottom: 0.6rem;
      &::after {
        @include beforeEffect();
      }
      &:hover::after {
        width: 100%;
      }
    }
    img {
      width: 8px;
      height: 9px;
      margin-left: 0.2rem;
      transition: transform ease 0.5s;
    }
    img.rotate {
      transform: rotate(180deg);
    }
  }
  span.activeSoln {
    font-weight: bold;
    color: #464646;
    padding-bottom: 0.6rem;
    display: inline-block;
    position: relative;
    &::after {
      @include afterEffect();
    }
  }
  .nav {
    position: relative;
    width: auto;
    height: auto;
    background: none;
    z-index: 0;
    top: 0;
    display: block;
    opacity: 1;
    margin: 0;
    & ul {
      padding: 0;
      margin: 0;
    }
    & ul li:last-child {
      padding: 0;
      margin: 0;
      a {
        margin: 0;
        width: auto;
        &:hover::after {
          width: 0;
        }
      }
      & a.router-link-exact-active {
        &::after {
          width: 0;
        }
      }
    }
    & ul li {
      padding: 0 1rem 0 0;
      display: inline;
      border: none;
    }
    & a {
      text-align: center;
      width: auto;
      height: auto;
      font-size: 17px;
      padding-bottom: 0.6rem;
      position: relative;
      &::after {
        @include beforeEffect();
      }
      &:hover::after {
        width: 100%;
      }
    }
    & a.router-link-exact-active {
      color: #464646;
      position: relative;
      &::after {
        @include afterEffect();
      }
    }
  }
  img {
    height: 48px;
  }
  .soln {
    overflow: hidden;
    height: 100%;
    background: rgba(111, 111, 111, 0.41);
    .d-hide {
      display: none;
    }
    .hide {
      display: block;
    }
    ul {
      background: $white;
    }
    & ul li {
      padding: 0;
      display: inline;
      border: none;
    }
    .desc {
      a {
        font-size: 13px;
        font-weight: 700;
        line-height: 19px;
        text-transform: uppercase;
        color: $label;
      }
      p {
        margin-top: 0.7rem;
        font-size: 12px;
        font-weight: 400;
        line-height: 17.6px;
        color: $sub;
      }
    }
    .soln-content-inner {
      align-items: flex-start;
      border: none;
      a {
        transition: color ease 1s;
      }
      &:hover a {
        color: $sec-color;
      }
    }
    .soln-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
      margin: 1.5rem 0;
    }
    .soln-content-inner,
    li.soln-first {
      img {
        width: 25px;
        margin-right: 1rem;
      }
    }
    li.soln-first {
      justify-content: space-between;
      border-bottom: solid 1px $sec-color;
      padding-bottom: 0.5rem;
      p {
        font-size: 17px;
        font-weight: 700;
        line-height: 25px;
        text-transform: uppercase;
        color: $label;
      }
      img {
        width: 11px;
        margin: 0;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  a {
    font-size: 20px;
    line-height: 24px;
  }
  .header {
    height: 93px;
  }
  .nav ul li {
    padding: 0 1rem 0 0;
  }
  .nav ul li:last-child {
    a {
      width: 183px;
      padding: 1rem;
    }
  }
  .nav a {
    font-size: 18px;
  }
  img {
    width: 162px;
    height: 71px;
  }
}
@media screen and (min-width: 1500px) {
  .contain {
    width: 1300px;
  }
}
</style>
