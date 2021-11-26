<template>
<div class="routes">
  <router-view/>
</div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "AppView",
  components: {},
  mounted() {
    AOS.init({
      duration: 800, // values from 0 to 3000, with step 50ms
    });
  },
};
</script>

<style lang="scss">
@import "@/scss/global.scss";
body {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $pri-color;
  background: $bg;
  line-height: 1.5;
  font-size: 15px;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  width: 100%;
}
a {
  font-weight: bold;
  color: #464646;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}
input,
textarea,
select {
  display: block;
  width: 100%;
  padding: 0.8rem 1rem;
  outline: none;
  border-radius: 5px;
  border: solid 1px rgb(179, 178, 178);
  margin: 0.5rem 0;
  transition: 0.5s ease border;
}
input:focus {
  border: solid 2px rgb(179, 178, 178);
}
.input-field {
  margin: 1rem 0;
}
.btn {
  cursor: pointer;
  padding: 0.8rem 1rem;
  display: inline-block;
  margin: 0.5rem 0;
  outline: none;
  border: none;
  color: $white;
  background: $sec-color;
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 2px;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 90%;
  overflow: hidden;
  margin: auto;
}
.hide-on-sm {
  display: none;
}
.hide-on-lg {
  display: block;
}
.routes {
  margin-top: 78px;
}
.flex {
  display: flex;
  flex-direction: column;
}
.flex-between {
  display: flex;
  justify-content: space-between;
}
@media screen and (min-width: 700px) {
  .hide-on-lg {
    display: none;
  }
  .hide-on-sm {
    display: block;
  }
  .flex {
    display: flex;
    flex-direction: row;
  }
  .align-center {
    align-items: center;
  }
  .align-start {
    align-items: flex-start;
  }
  .align-end {
    align-items: flex-end;
  }
}
@media screen and (min-width: 1000px) {
  body {
    font-size: 18px;
  }
}
@media screen and (min-width: 1500px) {
  .container {
    width: 1300px;
  }
}
</style>
