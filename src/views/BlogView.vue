<template>
  <Header />
  <div class="blog">
    <div class="container">
      <div class="blog-content routes">
        <h3>Zuckerberg Reveals Facebook’s Metaverse Ambitions</h3>
        <button class="btn">Read Article</button>
      </div>
    </div>
  </div>
  <div class="blogs">
    <div class="container">
      <div class="blogs-content">
        <div v-for="blog in blogs" :key="blog" class="blg">
          <img :src="blog.src" alt="blog" />
          <div class="blog-body">
            <p>{{ blog.body }}</p>
            <button class="btn">Read</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/Header.vue"
import Footer from "@/components/reuseables/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      blogs: [
        {
          src: require("@/assets/img/blog-01.png"),
          body: "Instagram surpasses 2 billion monthly users while powering through a year of turmoil"
        },
        {
          src: require("@/assets/img/blog-02.png"),
          body: "Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch"
        },
        {
          src: require("@/assets/img/blog-03.png"),
          body: "Larry Ellison is now richer than the Google co-founders after big Oracle run-up"
        },
        {
          src: require("@/assets/img/blog-01.png"),
          body: "Instagram surpasses 2 billion monthly users while powering through a year of turmoil"
        },
        {
          src: require("@/assets/img/blog-02.png"),
          body: "Dogecoin spikes more than 20% after Elon Musk says Tesla will accept it as payment for merch"
        },
        {
          src: require("@/assets/img/blog-03.png"),
          body: "Larry Ellison is now richer than the Google co-founders after big Oracle run-up"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.blog {
  color: $header;
  background: url("@/assets/img/blog-bg.png") no-repeat center center/cover;
  height: 400px;
  padding: 3rem 0;
  display: flex;
  &-content {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32.64px;
      color: $white;
      margin-bottom: 2rem;
      text-transform: capitalize;
    }
    & .btn {
      background: $white;
      color: $sec-color;
      border: solid 1px $sec-color;
      transition: all 0.5s ease;
      &:hover {
        color: $white;
        background: $sec-color;
      }
    }
  }
}

.blogs {
  margin: 3rem 0;
  & .blg {
    border: 1px solid #BCBCBC;
    box-sizing: border-box;
    background-filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.59));
    border-radius: 17px;
    background: $white;
    margin: 1rem 0.2rem;
  }
  & .blog-body {
    padding: 1rem;
    & p {
      color: $header;
      margin-bottom: 2rem;
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
    }
    & .btn {
      padding: 0.5rem 1rem;
      background: $white;
      color: $sec-color;
      border: solid 1px $sec-color;
      transition: all 0.5s ease;
      &:hover {
        color: $white;
        background: $sec-color;
      }
    }
  }
}

@media screen and (min-width: 700px) {
  .blog {
    &-content {
      width: 300px;
      float: right;
      & .btn {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
  .blogs {
    margin: 5rem 0;
    &-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1rem;
    }
    & .blg {
      flex-basis: 33.33%;
    }
    & .blog-body {
      padding: 1.5rem;
      & .btn {
        padding: 0.5rem 2rem;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .blog {
    height: 550px;
    &-content {
      width: 600px;
      & h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 72px;
      }
    }
  }
  .blogs {
    & .blog-body {
      & p {
        font-size: 18px;
        line-height: 31.3px;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .blog {
    height: 589px;
    &-content {
      width: 600px;
      & h3 {
        font-weight: 600;
        font-size: 48px;
        line-height: 72px;
      }
      & .btn {
        width: 162px;
        font-size: 18px;
      }
    }
  }
  .blogs {
    & .blog-body {
      & p {
        font-size: 20px;
        line-height: 31.3px;
      }
    }
  }
}
</style>