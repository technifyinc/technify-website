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
            <li><router-link to="/solution">Our Solution</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li>get started</li>
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
  height: 78px;
  padding: 1rem 0;
  background: $sec-bg;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  z-index: 100;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-content h1 {
    color: rgb(0, 45, 95);
  }
  &-content img {
    width: 100px;
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
.hamburger {
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  z-index: 10;
  & > div {
    height: 2px;
    width: 20px;
    background: #000000;
    margin: 0.1rem 0;
    transition: transform ease-in-out 0.4s;
    cursor: pointer;
  }
  & > div:nth-child(1) {
    width: 7px;
  }
  & > div:nth-child(3) {
    width: 10px;
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
  height: 100%;
  background: $sec-bg;
  transition: ease-in-out 0.4s top;
  display: none;
  opacity: 0;
  text-align: right;
  & ul {
    margin-top: 3rem;
    padding: 1rem;
  }
  & ul li {
    display: block;
    padding: 1rem 0;
    text-transform: capitalize;
  }
  & ul li:last-child {
    padding: 0.7rem 1.5rem;
    background: $sec-color;
    border-radius: 5px;
    margin-top: 2rem;
    color: $white;
    display: inline-block;
  }
  & a {
    font-weight: bold;
    color: $pri-color;
    text-decoration: none;
  }
  & a.router-link-exact-active {
    padding-bottom: 0.5rem;
    border-bottom: solid 2px $sec-color;
  }
}

@media screen and (min-width: 700px) {
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
    & ul {
      padding: 0;
      margin: 0;
    }
    & ul li {
      display: inline;
      padding: 0;
      font-size: small;
    }
    & ul li:last-child {
      margin: 0 0 0 2rem;
      background: $sec-color;
      a {
        color: $white;
      }
    }
    & a {
      font-weight: bold;
      color: $sec-color;
      text-decoration: none;
    }
  }
}
</style>
