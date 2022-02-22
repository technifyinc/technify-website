<template>
  <div class="routes">
    <Header />
    <Banner>
      <h3>Terms of Use</h3>
    </Banner>
    <div class="terms">
      <div class="container">
        <div class="terms-content">
          <div class="terms-parts" v-for="terms in terms" :key="terms.index">
            <h3>{{ terms.title }}</h3>
            <p v-html="terms.content"></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/navbar/Header.vue'
import Footer from '@/components/reuseables/Footer.vue'
import Banner from '@/components/reuseables/Banner.vue'
export default {
  components: {
    Header,
    Footer,
    Banner
  },
  data() {
    return {
      terms: [
        {
          title: 'Introduction',
          content: `THESE TERMS INCLUDE AN ARBITRATION AGREEMENT AND CLASS ACTION WAIVER THAT APPLY TO ALL CLAIMS BROUGHT AGAINST TECHNIFY. PLEASE READ THEM CAREFULLY; THEY AFFECT YOUR LEGAL RIGHTS. THE TERMS OF THE ARBITRATION AGREEMENT AND CLASS ACTION WAIVER SHALL NOT APPLY IF UNENFORCEABLE UNDER THE LAWS OF THE COUNTRY IN WHICH YOU RESIDE.`
        },
        {
          title: 'General terms',
          content: `<strong>Revisions to the Terms</strong>
          <br/>
          We reserve the right to revise the Terms at our sole discretion at any time. Any revisions to the Terms will be effective immediately upon posting by us. For any material changes to the Terms, we will take reasonable steps to notify you of such changes, via a banner on the website, email notification, another method, or a combination of methods. In all cases, your continued use of the Services after publication of such changes, with or without notification, constitutes binding acceptance of the revised Terms.
          <br/>
          <br/>
          <strong>Severability; Waiver</strong>
          <br/>
          If it turns out that a particular provision of these Terms is not enforceable, this will not affect any other terms. If you do not comply with these Terms, and we do not take immediate action, this does not indicate that we relinquish any rights that we may have (such as taking action in the future).
          <br/>
          <br/>
          <strong>Content Providers</strong>
          <br/>
          Our Content Providers and integrated service providers are third-party beneficiaries of the Terms and may enforce those provisions of the Terms that relate to them.`
        },
        {
          title: 'Agreement',
          content: `You agree to indemnify, defend, and hold harmless the Technify Parties from all claims, liabilities, expenses, and damages (attributable to you under the applicable law), including reasonable attorneys' fees and costs, made by any third party related to (a) your use or attempted use of the Services in violation of these Terms; (b) your violation of any law or rights of any third party; or (c) User Contents, including without limitation, any claim of infringement or misappropriation of intellectual property or other proprietary rights.`
        },
        {
          title: 'Disclaimer',
          content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES AND ALL INCLUDED CONTENT ARE PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESSED OR IMPLIED. THE TECHNIFY PARTIES SPECIFICALLY DISCLAIM ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. THE TECHNIFY PARTIES FURTHER DISCLAIM ALL LIABILITIES RELATED TO YOUR ACCESS OR USE OF THE SERVICES OR OTHER RELATED CONTENTS. YOU ACKNOWLEDGE AND AGREE THAT ANY ACCESS TO OR USE OF THE SERVICES OR SUCH CONTENTS IS AT YOUR OWN RISK.`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/global.scss';
.terms {
  padding: 1rem 0 3rem;
  &-parts {
    margin: 3rem 0;
    & h3 {
      font-size: 25px;
      font-weight: 600;
      line-height: 31px;
      margin-bottom: 1rem;
    }
    & p {
      margin: 0.5rem 0;
      line-height: 25px;
      font-weight: 400;
      font-size: 14px;
      color: $sub;
    }
  }
}
@media screen and (min-width: 1000px) {
  .terms {
    &-parts {
      & h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 40px;
      }
      & p {
        font-size: 18px;
        line-height: 35px;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .terms {
    &-parts {
      & h3 {
        font-size: 32px;
        line-height: 42px;
      }
      & p {
        font-size: 24px;
        line-height: 45px;
      }
    }
  }
}
</style>
