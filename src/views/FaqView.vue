<template>
  <Header />
  <div class="faqs">
    <div class="container">
      <div class="faq-inner routes">
        <h3>Frequently Asked Questions</h3>
        <form>
          <input type="search" placeholder="Search for a question">
          <input type="submit" value="Search">
        </form>
        <div class="faq">
          <div class="faq-item" v-for="faq in faqs" :key="faq">
            <div class="faq-header">
              <p>{{ faq.question }}</p>
              <img src="@/assets/img/chevron-down.svg" alt="chevron">
            </div>
            <div class="faq-content">
              <div class="faq-desc">
                <p>{{ faq.ans }}</p>
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
import Header from "@/components/navbar/Header.vue"
import Footer from "@/components/reuseables/Footer.vue"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      faqs: [
        {
          question: "What is technify ?",
          ans: "We build out solutions to  help improve business processes end-to-end and optimize workflow with cutting-edge business process management solutions."
        },
        {
          question: "What happens to data in deleted accounts?",
          ans: "The data gets recycled."
        },
        {
          question: "Is technify secured with my personal info ?",
          ans: "Yes, your personal information is safe with us."
        },
        {
          question: "Is technify free ?",
          ans: "No, It isn't"
        },
        {
          question: "How do I sign up for Technify ",
          ans: "It's easy, just click on the get started button."
        },
      ]
    }
  },
  mounted() {
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach((item) =>{
      const faqHeader = item.querySelector('.faq-header')
      faqHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.faq-open')
        toggleItem(item)
        if(openItem && openItem!== item){
          toggleItem(openItem)
        }
      })
    })
    const toggleItem = (item) =>{
      const faqContent = item.querySelector('.faq-content')
      if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
      }else{
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.faqs {
  padding: 3rem 0;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32.64px;
    text-align: center;
    color: $label;
  }
  form {
    margin: 4rem 0;
    input[type="search"] {
      background-filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.47));
      border: 1px solid rgba(78, 78, 78, 0.62);
      border-radius: 6px;
      margin: 3rem 0 2rem;
      &::placeholder {
        font-weight: normal;
        font-size: 13px;
        color: rgba(78, 78, 78, 0.54);
      } 
    }
    input[type="submit"] {
      display: block;
      margin: auto;
      width: 136px;
      background: #630F96;
      box-shadow: 0px 4px 22px rgba(110, 35, 156, 0.3);
      border-radius: 8px;
      font-weight: 500;
      font-size: 16px;
      color: $white;
    }
  }
}
.faq {
  &-item {
    border: 1px solid #B9B9B9;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    margin: 1rem 0.2rem;
    cursor: pointer;
  }
  &-desc {
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17.36px;
      color: $header;
    }
    img {
      width: 8px;
      height: 5px;
      transition: transform ease 0.5s;
    }
  }
  &-content {
    overflow: hidden;
    height: 0;
    transition: all .25s ease;
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: $sub;
    }
  }
}

.faq-open img {
  transform: rotate(180deg);
}

.faq-open .faq-header {
  margin-bottom: 1rem;
}

@media screen and (min-width: 700px) {
  .faqs {
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.2rem;
      input[type="search"] {
        flex-basis: 85%;
        margin: 0;
        padding: 1rem;
      }
      input[type="submit"] {
        flex-basis: 179px;
        margin-left: 1rem;
        padding: 0.8rem 1rem;
      }
    }
  }
}

@media screen and (min-width: 1000px) {
  .faqs {
    .container {
      width: 900px;
    }
    h3 {
      font-weight: 600;
      font-size: 30px;
      line-height: 44px;
    }
    form {
      margin-bottom: 6rem;
      input[type="submit"] {
        font-size: 20px;
      }
    }
  }
  .faq {
    &-item {
      margin: 2rem 0;
    }
    &-header {
      p {
        font-size: 20px;
        line-height: 25.76px;
      }
      img {
        width: 15px;
        height: 8.71px;
      }
    }
    &-content {
      p {
        font-size: 18px;
        line-height: 24.86px;
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .faqs {
    h3 {
      font-size: 36px;
      line-height: 54px;
    }
    form {
      margin-bottom: 6rem;
      input[type="submit"] {
        font-size: 24px;
      }
    }
  }
  .faq {
    &-header {
      p {
        font-size: 24px;
        line-height: 29.76px;
      }
    }
    &-content {
      p {
        font-size: 21px;
        line-height: 34.86px;
      }
    }
  }
}
</style>