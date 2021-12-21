<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/"
          ><img src="@/assets/img/logo.png" alt="logo"
        /></router-link>
        <nav class="nav" :class="{ open: open }">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/events">Events</router-link></li>
            <li><router-link to="/solution">Our Solution</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li><router-link to="/contact">get started</router-link></li>
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
    };
  },
  methods: {
    openNav() {
      this.open = !this.open;
    },
  },
  mounted() {
    this.$router.beforeEach((from, to, next) => {
      this.open = !this.open;
      next();
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/global.scss";
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: $white;
  z-index: 100;
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
  font-weight: bold;
  cursor: pointer;
}
img {
  width: 103px;
  height: 45px;
  position: relative;
  z-index: 10;
}
.hamburger {
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  z-index: 10;
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

.open.nav {
  display: block;
  animation: fade ease-in-out 0.4s forwards;
}
@keyframes fade {
  to {
    opacity: 1;
  }
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: $white;
  transition: ease-in-out 0.4s top;
  display: none;
  opacity: 0;
  & ul {
    margin-top: 5rem;
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
    font-weight: normal;
    color: #464646;
    text-decoration: none;
  }
  & a.router-link-exact-active {
    padding-bottom: 0.5rem;
    font-weight: bold;
  }
}
@media screen and (min-width: 1000px) {
  .hamburger {
    display: none;
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
      }
    }
    & ul li {
      padding: 0 1rem 0 0;
      display: inline;
      border: none;
    }
    & a {
      text-decoration: none;
      text-align: center;
      width: auto;
      height: auto;
      font-size: 17px;
    }
    & a.router-link-exact-active {
      border-bottom: solid 4px $sec-color;
    }
  }
  img {
    height: 48px;
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
</style>
