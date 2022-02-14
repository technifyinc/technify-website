<template>
  <div class="routes">
    <Header />
    <Banner>
      <h3>Technify Privacy Policy</h3>
    </Banner>
    <div class="policy">
      <div class="container">
        <div class="policy-content">
          <div
            class="policy-parts"
            v-for="policy in policies"
            :key="policy.index"
          >
            <h3>{{ policy.title }}</h3>
            <p v-html="policy.content"></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/navbar/Header.vue";
import Footer from "@/components/reuseables/Footer.vue";
import Banner from "@/components/reuseables/Banner.vue";
export default {
  components: {
    Header,
    Footer,
    Banner,
  },
  data() {
    return {
      policies: [
        {
          title: "Introduction",
          content: `We are a team of young, result-driven professionals, committed to excellence and global standards. Solving high-impact problems with technology; changing lifestyle and business culture in Africa. Technify Inc  is a firm that develops and deploys software solutions at scale to solve high-impact business challenges. 
          <br/>
          We build out solutions to  help improve business processes end-to-end and optimize workflow with cutting-edge business process management solutions.
          These solutions digitally transform your businesses, help to innovate and give rapid results. This gives our clients/users the ability to improve operational efficiency, record higher productivity, increase customer acquisition and retention.
          <br/>
          We are building a world-class team of developers equipped with the right expertise to build technology that suits the specific needs for businesses.`,
        },
        {
          title: "Privacy Policy",
          content: `
          This Privacy Notice covers information we collect from you through our Site. Some of our Site's functionality can be used without revealing any Personal Data, but for features or Services related to the Content Offerings, Personal Data is required. In order to access certain features and benefits on our Site, you may need to submit, or we may collect, "Personal Data" (i.e., information that can be used to identify you and which may also be referred to as “personally identifiable information” or “personal information”). Personal Data can include information such as your name, email address, IP address, and device identifier, among other things. 
          <br/>
          You are responsible for ensuring the accuracy of the Personal Data you submit to Technify. Inaccurate information may affect your ability to use the Site, the information you receive when using the Site, and our ability to contact you. For example, your email address should be kept current because that is one of the primary manners in which we communicate with you`,
        },
        {
          title: "Use of Personal Data",
          content: `We don't sell your personal data to advertisers, and we don't share information that directly identifies you (such as your name, email address or other contact information) with advertisers unless you give us specific permission. Instead, advertisers can tell us things like the kind of audience they want to see their ads, and we show those ads to people who may be interested. We provide advertisers with reports about the performance of their ads that help them understand how people are interacting with their content`,
        },
        {
          title: "Cookies",
          content: `Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones and other devices. Other technologies, including data that we store on your web browser or device, identifiers associated with your device and other software, are used for similar purposes. In this policy, we refer to all of these technologies as “cookies”.
          <br/>
          We use cookies if you have a Technify account, use the Technify Service, including our website and apps, or visit other websites and apps that use the Technify Products (including the Like button). Cookies enable Technify to offer the Technify Products to you and to understand the information that we receive about you, including information about your use of other websites and apps, whether or not you are registered or logged in.`,
        },
        {
          title: "Security",
          content: `We care about the security of our users. While we work to protect the security of your account and related information, Coursera cannot guarantee that unauthorized third parties will not be able to defeat our security measures. Please notify us immediately of any compromise or unauthorized use of your account by emailing <a href="mailto:hello@technify.ng" style="color:#339DFF">hello@technify.ng</a>.`,
        },
        {
          title: "Contact Us",
          content: `If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@technify.ng" style="color:#339DFF">hello@technify.ng</a>`,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/global.scss";
.policy {
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
  .policy {
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
  .policy {
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
