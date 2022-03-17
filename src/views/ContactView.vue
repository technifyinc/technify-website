<template>
  <Header />
  <div class="contact">
    <div class="container">
      <div class="contact-content routes">
        <div class="contact-text">
          <h3>contact us</h3>
          <p>
            Please, Contact us for official purpose response will be as quick as
            possible
          </p>
        </div>
        <div class="flex-area">
          <div class="hide-on-lg">
            <div class="illus">
              <img
                src="@/assets/img/illus-06.svg"
                alt="contact_us"
                class="hide-on-lg"
              />
            </div>
            <contact-form />
            <contact-address />
          </div>
          <div class="desktop-view hide-on-sm">
            <div class="illus-add">
              <contact-form />
            </div>
            <div class="illus">
              <img src="@/assets/img/illus-06.svg" alt="contact_us" />
              <contact-address />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/navbar/TheHeader.vue";
import Footer from "@/components/navbar/TheFooter.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
import ContactAddress from "@/components/contact/ContactAddress.vue";
export default {
  components: {
    Header,
    ContactForm,
    ContactAddress,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.contact {
  color: $header;
  padding: 3rem 0;
  &-content {
    text-align: center;
  }
  & .illus {
    margin: 3.5rem 0;
  }
  &-text {
    & h3 {
      font-weight: bold;
      font-size: 24px;
      line-height: 32.64px;
      color: $header;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
    }
  }
}

@media screen and (min-width: 700px) {
  .desktop-view {
    display: flex;
    margin-top: 3rem;
    & .illus-add {
      flex-basis: 50%;
    }
    & .illus {
      flex-basis: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      margin: 0;
      & img {
        margin-bottom: 2rem;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .contact {
    margin: 2rem 0;
    &-text {
      & h3 {
        font-size: 30px;
        line-height: 51.2px;
      }
      & p {
        font-size: 16px;
        line-height: 31.3px;
      }
    }
  }
  .desktop-view {
    & .illus {
      & img {
        width: 473px;
        height: 477.58px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .contact {
    &-text {
      & h3 {
        font-size: 45px;
        line-height: 61.2px;
      }
      & p {
        font-size: 20px;
        line-height: 31.3px;
      }
    }
  }
}
</style>
