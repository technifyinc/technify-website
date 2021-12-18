<template>
  <Header />
  <div class="contact">
    <div class="container">
      <div class="contact-content routes">
        <div class="contact-text">
          <h3>contact us</h3>
          <p>Please, Contact us for official purpose response will be as quick as possible</p>
        </div>
        <div class="flex-area">
          <contact-form />
          <div class="illus">
            <img src="@/assets/img/illus-06.svg" alt="contact_us">
          </div>
        </div>
        <contact-address />
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/navbar/Header.vue"
import Footer from "@/components/reuseables/Footer.vue"
import ContactForm from "@/components/contact/ContactForm.vue"
import ContactAddress from "@/components/contact/ContactAddress.vue"
export default {
  components: {
    Header,
    ContactForm,
    ContactAddress,
    Footer
  }
}
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
  &-cards {
    background: #FFFFFF;
    border: 1px solid #BE53FF;
    box-sizing: border-box;
    box-shadow: 0px 0px 31px -6px rgba(0, 0, 0, 0.06);
    border-radius: 9px;
    text-align: left;
    padding: 1.5rem;
  }
  &-card {
    padding: 1.8rem 0;
    & img {
      width: 25px;
      height: 25px;
    }
    & h4 {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 21.76px;
      text-transform: capitalize;
      margin: 0.7rem 0 1rem;
      color: $header;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 22.78px;
      color: $sub;
    }
  }
  &-card:nth-child(2) {
    border-top: solid 1px #7a36a4;
    border-bottom: solid 1px #7a36a4;
  }
  & .flex-area {
    display: flex;
    flex-direction: column-reverse;
  }
}

@media screen and (min-width: 700px) {
  .contact {
    &-cards {
      display: flex;
      padding: 1rem 0.5rem;
    }
    &-card {
      padding: 1rem;
    }
    &-card:nth-child(2) {
      border-top: none;
      border-bottom: none;
      border-left: solid 1px #7a36a4;
      border-right: solid 1px #7a36a4;
    }
  }
}

@media screen and (min-width: 1000px) {
  .contact {
    margin: 3rem 0;
    & .illus {
      width: 900px;
      margin: 5rem auto;
      & img {
        width: 634.65px;
        height: 342px;
      }
    }
    &-text {
      width: 900px;
      margin: auto;
      & h3 {
        font-size: 30px;
        line-height: 51.2px;
      }
      & p {
        font-size: 16px;
        line-height: 31.3px;
      }
    }
    &-cards {
      padding: 1.5rem 1rem;
    }
    &-card {
      padding: 1.5rem;
      & img { 
        width: 32px;
        height: 32px;
      }
      & h4 {
        font-size: 23px;
        line-height: 35.44px;
      }
      & p {
        font-size: 16px;
        line-height: 31.3px;
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .contact-cards {
    width:  1100px;
    margin: auto;
  }
}

@media screen and (min-width: 1400px) {
  .contact {
    & .illus {
      width: 900px;
      margin: 5rem auto;
      & img {
        width: 634.65px;
        height: 342px;
      }
    }
    &-text {
      width: 900px;
      margin: auto;
      & h3 {
        font-size: 45px;
        line-height: 61.2px;
      }
      & p {
        font-size: 20px;
        line-height: 31.3px;
      }
    }
    &-cards {
      width:  1200px;
    }
    &-card {
      & img {
        width: 38px;
        height: 38px;
      }
      & h4 {
        font-size: 29px;
        line-height: 39.44px;
      }
      & p {
        font-size: 18px;
        line-height: 31.3px;
      }
    }
  }
}  
</style>