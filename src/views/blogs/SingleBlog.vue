<template>
  <Header />
  <div class="blog">
    <div class="container">
      <div class="blog-header routes">
        <h3>Zuckerberg Reveals Facebook's Metaverse Ambitions</h3>
        <p>By <span class="sub">Alex Samuel</span> | 21 Dec, 2021</p>
      </div>
    </div>
    <div class="blog-img">
      <img src="@/assets/img/blog-bg.png" alt="blog_img" />
    </div>
    <div class="container">
      <div class="blog-content">
        <p>
          CEO Mark Zuckerberg has laid down a grander plan to transform Facebook
          into a metaverse company. He spoke about how humans are basically
          mediating their lives and communication through small, glowing
          rectangles (read phones). He told The Verge's contributing editor
          Casey Newton: “I think that that's not really how people are made to
          interact”.
          <br />
          <br />
          Facebook's metaverse will go beyond gaming to include the workplace,
          entertainment and so on to create a 'social experience' for its users.
          The company has invested heavily in virtual reality, with almost 20%
          of its employees working exclusively on VR and AR, and with recent
          acquisitions like BigBox VR and Unit 2 Games. The VR segment accounts
          for only 3% or less of Facebook's top line. According to Fortune
          Business Insights, the global VR market is expected to grow from $3.1
          billion in 2019 to $57.55 billion in 2027.
          <br />
          <br />
          Facebook's Oculus aims to 'defy distance' and 'explore virtual worlds
          as they grow and change.' Zuckerberg said the metaverse would bring
          opportunities to individual creators, artists etc. The metaverse would
          be the second-best thing to a teleportation device, he added. The
          company is also working towards an infinite office that will allow
          users to create their ideal VR workspace. Zuckerberg admitted the VR
          headsets in the market at the moment needed improvement, and are a
          'bit clunky'.
          <br />
          <br />
          The CEO further said the metaverse wasn't something one specific
          company would build. He said humans should have a shared foundation of
          values and some understanding of the world and the problems that we
          all face together to have a cohesive society.
        </p>
      </div>
      <blog-comment />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/Header.vue";
import Footer from "@/components/reuseables/Footer.vue";
import BlogComment from "@/views/blogs/BlogComment.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    BlogComment,
    Footer,
  },
  props: ["id"],
  methods: {
    ...mapActions(["getBlogs"]),
  },
  mounted() {
    this.getBlogs();
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
    }
    p {
      color: $sub;
      font-size: 13px;
      font-weight: 19.5px;
    }
    span {
      color: $sub-color;
    }
  }
  &-img img {
    height: 400px;
    object-fit: cover;
  }
  &-content {
    margin: 3rem 0;
    & p {
      font-weight: normal;
      font-size: 14px;
      line-height: 22.78px;
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 1000px) {
  .blog {
    &-img img {
      height: 550px;
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
    &-img img {
      height: 589px;
    }
    &-header {
      & h3 {
        font-weight: 600;
        font-size: 40px;
        line-height: 60px;
      }
      & p {
        font-size: 24px;
        font-weight: 36px;
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
