<template>
  <Header />
  <div class="testimonial">
    <div class="container">
      <div class="testimonial-content routes">
        <h3>testimonials</h3>
        <p>Here is what our 10,000 + businesses are saying about technify</p>
      </div>
    </div>
  </div>
  <div class="testimonials">
    <div class="container">
      <div class="testimonials-content">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial"
          class="testimonials-card"
        >
          <img :src="testimonial.company_icon" alt="testimonial" />
          <div class="testimonials-body">
            <p>{{ testimonial.body }}</p>
            <div class="testimonials-details">
              <img :src="testimonial.avatar" alt="testimonial" />
              <div class="testimonials-aside">
                <p>{{ testimonial.name }}</p>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/navbar/Header.vue";
import Footer from "@/components/reuseables/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      testimonials: [
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          avatar: require("@/assets/img/avatar.svg"),
          company_icon: require("@/assets/img/test-gig.svg"),
          body: "I could probably go into sales for you. It's just amazing. Absolutely wonderful! Technify was worth a fortune to my company.",
          role: "Senior Analyst",
          name: "Stormi F.",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          avatar: require("@/assets/img/avatar.svg"),
          company_icon: require("@/assets/img/test-first.svg"),
          body: "Technify was worth a fortune to my company. Technify did exactly what you said it does. Technify is both attractive and highly adaptable.",
          role: "Operation Manager",
          name: "Marshal V.",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          avatar: require("@/assets/img/avatar.svg"),
          company_icon: require("@/assets/img/test-glo.svg"),
          body: "Definitely worth the investment. The very best. Technify has got everything I need. Technify is worth much more than I paid.",
          role: "CEO Gen C.",
          name: "Nissie J.",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          avatar: require("@/assets/img/avatar.svg"),
          company_icon: require("@/assets/img/test-glo.svg"),
          body: "Definitely worth the investment. The very best. Technify has got everything I need. Technify is worth much more than I paid.",
          role: "CEO Gen C.",
          name: "Nissie J.",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          avatar: require("@/assets/img/avatar.svg"),
          company_icon: require("@/assets/img/test-first.svg"),
          body: "Technify was worth a fortune to my company. Technify did exactly what you said it does. Technify is both attractive and highly adaptable.",
          role: "Operation Manager",
          name: "Marshal V.",
        },
        {
          id: Math.random().toString(36).substring(7).toUpperCase(),
          avatar: require("@/assets/img/avatar.svg"),
          company_icon: require("@/assets/img/test-gig.svg"),
          body: "I could probably go into sales for you. It's just amazing. Absolutely wonderful! Technify was worth a fortune to my company.",
          role: "Senior Analyst",
          name: "Stormi F.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.testimonial {
  color: $header;
  padding: 3rem 0;
  &-content {
    text-align: center;
    & h3 {
      font-weight: 600;
      font-size: 25px;
      line-height: 34px;
      color: $header;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    & p {
      color: $sub;
      font-weight: 400;
      font-size: 14px;
      line-height: 22.89px;
    }
  }
}

.testimonials {
  margin: 1rem 0 5rem;
  &-card {
    border: 1px solid #ce80ff;
    box-sizing: border-box;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.08);
    border-radius: 11px;
    background: $white;
    margin: 1rem 0.2rem;
    padding: 1.5rem 1rem;
    & img {
      width: 48px;
      margin-bottom: 2rem;
    }
    & p {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: $sub;
    }
  }
  &-details {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    & img {
      margin: 0 1rem 0 0;
      width: 41.34px;
    }
  }
  &-aside {
    & p {
      font-weight: 600;
      font-size: 14px;
      line-height: 23.17px;
      color: #3e3e3e;
      &:nth-child(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: $sub;
      }
    }
  }
}

@media screen and (min-width: 700px) {
  .testimonials {
    &-content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }
}

@media screen and (min-width: 1000px) {
  .testimonial {
    &-content {
      & h3 {
        font-size: 36px;
        line-height: 54px;
      }
      & p {
        font-size: 22px;
        line-height: 35.97px;
      }
    }
  }
  .testimonials {
    margin-top: 3rem;
    &-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1rem;
    }
    &-card {
      & img {
        width: 50px;
      }
      & p {
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
      }
    }
    &-details {
      & img {
        width: 42px;
      }
    }
    &-aside {
      & p {
        font-weight: 600;
        font-size: 16px;
        line-height: 23.17px;
        &:nth-child(2) {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .testimonials {
    margin-top: 3rem;
    &-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 2.5rem;
    }
  }
}
</style>
