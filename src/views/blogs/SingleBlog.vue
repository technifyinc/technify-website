<template>
  <Header />
  <div class="blog">
    <div class="container">
      <div class="wrap" v-if="blog">
        <div class="blog-header routes">
          {{ blog.length }}
          <h3>{{ blog.title }}</h3>
          <p>
            By <span class="sub">{{ blog.author }}</span> |
            {{ formatDate(blog.createdAt) }}
          </p>
        </div>
        <div class="blog-img">
          <img
            :src="`http://assets.hdkopyuehjd.technifyincubator.com/website/uploads/${blog.image}`"
            :alt="blog.title"
          />
        </div>
        <div class="blog-content">
          <p v-html="blog.details"></p>
        </div>
      </div>
      <loading-bar v-else class="loading" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/TheHeader.vue";
import LoadingBar from "@/components/reuseables/LoadingBar.vue";
import Footer from "@/components/navbar/TheFooter.vue";
import { mapActions, mapGetters } from "vuex";
import dateFormatter from "@/mixins/formatDate";
export default {
  components: {
    Header,
    LoadingBar,
    Footer,
  },
  props: {
    id: { type: String, required: true },
  },
  mixins: [dateFormatter],
  computed: {
    ...mapGetters(["blog"]),
  },
  methods: {
    ...mapActions(["getSingleBlog"]),
  },
  mounted() {
    this.getSingleBlog(this.id);
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.blog {
  color: $header;
  padding: 3rem 0;
  &-header {
    margin-bottom: 2rem;
    h3 {
      margin-bottom: 1.5rem;
      color: $header;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      text-transform: capitalize;
    }
    p {
      color: $sub;
      font-size: 13px;
      font-weight: 19.5px;
    }
    span {
      color: $sub-color;
      text-transform: capitalize;
    }
  }
  &-img img {
    height: 380px;
    object-fit: cover;
  }
  &-content {
    margin: 3rem 0;
    & p {
      font-weight: normal;
      font-size: 14px;
      line-height: 22.78px;
      margin-bottom: 2rem;
      text-align: justify;
    }
  }
}
.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 1000px) {
  .blog {
    &-img img {
      height: 400px;
    }
    &-header {
      & h3 {
        font-weight: 600;
        font-size: 35px;
        line-height: 50px;
        width: 700px;
      }
      & p {
        font-size: 16px;
        font-weight: 30px;
      }
    }
    &-content {
      & p {
        font-size: 18px;
        line-height: 40.3px;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .blog {
    &-header {
      & h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 60px;
      }
    }
    &-content {
      & p {
        font-size: 20px;
        line-height: 50.3px;
      }
      & .btn {
        width: 162px;
        font-size: 18px;
      }
    }
  }
}
</style>
