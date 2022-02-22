<template>
  <Header />
  <loading-bar v-if="loadingStatus" class="loading" />
  <empty-content v-else-if="blogs.length === 0" class="empty">
    <h3>No Blog Posts yet</h3>
    <p>Opps!, we don't have any blog posts yet kindly check back next time</p>
  </empty-content>
  <div v-else>
    <div
      class="blog"
      :style="{
        backgroundImage: `url(http://assets.hdkopyuehjd.technifyincubator.com/website/uploads/${mainBlog.image})`
      }"
    >
      <div class="container">
        <div class="blog-content routes">
          <h3>{{ mainBlog.title }}</h3>
          <button @click="viewBlog(mainBlog._id)" class="btn">
            Read Article
          </button>
        </div>
      </div>
    </div>
    <div class="blogs">
      <div class="container">
        <div class="blogs-content">
          <div v-for="blog in blogs" :key="blog._id" class="blg">
            <img
              :src="`http://assets.hdkopyuehjd.technifyincubator.com/website/uploads/${blog.image}`"
              :alt="blog.title"
            />
            <div class="blog-body">
              <p>{{ concatenate(blog.title) }}</p>
              <button @click="viewBlog(blog._id)" class="btn">Read</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/navbar/Header.vue'
import Footer from '@/components/reuseables/Footer.vue'
import EmptyContent from '@/components/reuseables/EmptyContent.vue'
import LoadingBar from '@/components/reuseables/LoadingBar.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Footer,
    EmptyContent,
    LoadingBar
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['blogs', 'mainBlog', 'loadingStatus'])
  },
  methods: {
    ...mapActions(['getBlogs', 'getMainBlog']),
    viewBlog(id) {
      this.$router.push({ name: 'blog', params: { id } })
    },
    concatenate(value) {
      return value.substring(0, 100) + '...'
    }
  },
  mounted() {
    this.getBlogs()
    this.getMainBlog()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';
.blog {
  // color: $header;
  background-repeat: no-repeat;
  background: center center/cover;
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
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      text-shadow: 3px 2px 6px #1a0b07;
    }
    & .btn {
      background: $sec-color;
      color: $white;
      border: solid 2px $sec-color;
      transition: all 0.5s ease;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

.blogs {
  margin: 3rem 0;
  & .blg {
    border: 1px solid #bcbcbc;
    box-sizing: border-box;
    backdrop-filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.59));
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
      text-transform: capitalize;
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
  .blg img {
    height: 180px;
    object-fit: cover;
    border-radius: 17px 17px 0 0;
  }
}
.empty {
  margin-top: 78px;
}

.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  .blg img {
    height: 230px;
    object-fit: cover;
    border-radius: 17px 17px 0 0;
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
