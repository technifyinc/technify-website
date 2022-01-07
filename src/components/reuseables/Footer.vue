<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="flex flex-between align-end">
          <div class="subscribe">
            <h3>new to technify?</h3>
            <p>
              Subscribe to our newsletter and get update on our latest product
              and discount.
            </p>
          </div>
          <form class="flex">
            <input type="text" id="search" placeholder="Enter E-mail Address" />
            <input type="submit" class="btn" value="Subscribe" />
          </form>
        </div>
        <div class="contact_links flex flex-between align-start">
          <ul>
            <li>Contact Us</li>
            <li><a href="mailto:hello@technify.ng">hello@technify.ng</a></li>
            <li><a href="tel:+2341567890">+234 816 5083 087</a></li>
            <li>Lagos, Nigeria</li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><img src="@/assets/img/contact-fb.svg" alt="facebook"
              /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><img src="@/assets/img/contact-insta.svg" alt="instagram"
              /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><img src="@/assets/img/contact-twitter.svg" alt="twitter"
              /></a>
            </li>
          </ul>
          <ul>
            <li>Company</li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
            <li><router-link :to="{ name: 'career' }">Careers</router-link></li>
            <li><router-link :to="{ name: 'terms' }">Terms</router-link></li>
            <li><router-link :to="{ name: 'policy' }">Privacy</router-link></li>
          </ul>
          <ul>
            <li>Products</li>
            <li>
              <router-link :to="{ name: 'software-int' }"
                >Software Integration</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'it' }"
                >I.T Consullting Service</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'enterprise' }"
                >Enterprise Architecture Advisory</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'software-port' }"
                >Software Portfolio Consulting</router-link
              >
            </li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>
              <router-link :to="{ name: 'testimonial' }"
                >Testimonials</router-link
              >
            </li>
            <li><router-link :to="{ name: 'faq' }">FAQ</router-link></li>
            <li><router-link :to="{ name: 'blogs' }">Blog</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterTag",
};
</script>
<style lang="scss">
@import "@/scss/global.scss";
.footer {
  background: $sec-bg;
  padding: 3rem 0;
  &-content {
    & h3 {
      color: $sec-color;
      text-transform: uppercase;
      line-height: 22px;
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    & p {
      font-weight: normal;
      font-size: 11px;
      line-height: 13.97px;
      color: $sub;
    }
    & form {
      margin-top: 1rem;
      flex-direction: row;
      width: 100%;
      & input[type="text"] {
        flex-basis: 70%;
        margin-right: 0.3rem;
        border: 1px solid #9d9d9d;
        box-sizing: border-box;
        border-radius: 4px;
        &::placeholder {
          font-weight: normal;
          font-size: 12px;
          line-height: 17px;
          color: rgba(85, 85, 85, 0.78);
        }
      }
      & input[type="submit"] {
        font-weight: bold;
        font-size: 14px;
        line-height: 11px;
        color: #fafafa;
        flex-basis: 30%;
      }
    }
  }
}

.contact_links {
  margin: 2rem 0 0;
  & ul {
    margin: 1rem 0 0;
  }
  & ul li {
    list-style: none;
    text-align: left;
    padding: 0 0 1rem;
    color: #4e4e4e;
    font-size: 14px;
    line-height: 17.78px;
  }
  & ul li a {
    font-weight: normal;
    color: #4e4e4e;
    font-size: 14px;
    line-height: 17.78px;
  }
  & ul li:first-child {
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    padding-bottom: 1rem;
    color: $sec-color;
  }
  & ul:nth-child(1) li:nth-child(2) a,
  & ul:nth-child(1) li:nth-child(3) a {
    color: $tag-color;
    font-weight: 500;
    font-size: 13px;
    line-height: 16.51px;
  }
  & ul li img {
    width: 10px;
    margin-right: 1rem;
  }
  & ul:nth-child(1) li:last-child {
    display: flex;
    align-items: center;
    & img {
      width: 13px;
      height: 13px;
    }
  }
}

@media screen and (min-width: 700px) {
  .footer-content {
    & h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
    }
    & p {
      font-weight: normal;
      font-size: 15px;
      line-height: 24px;
    }
    & form {
      flex-basis: 60%;
      margin: 0 0 0 2rem;
      & input[type="text"] {
        border: 1.5px solid #6a6a6a;
        box-sizing: border-box;
        border-radius: 8px;
        height: 47px;
        &::placeholder {
          font-size: 12px;
        }
      }
      & input[type="submit"] {
        height: 47px;
        font-size: 14px;
        line-height: 19px;
      }
    }
    & .subscribe {
      flex-basis: 40%;
      margin: 0 1rem 0 0;
    }
  }
  .contact_links {
    margin-top: 4rem;
    & ul {
      flex-basis: 20%;
    }
    & ul li {
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
    }
    & ul li a {
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;
    }
    & ul li:first-child {
      font-weight: 500;
      font-size: 18px;
      line-height: 33px;
    }
    & ul:nth-child(1) li:nth-child(2) a,
    & ul:nth-child(1) li:nth-child(3) a {
      font-weight: normal;
      font-size: 14px;
      line-height: 27px;
    }
  }
}
@media screen and (min-width: 1000px) {
  .footer-content {
    & form {
      margin: 0 0 0 3rem;
      & input[type="text"] {
        flex-basis: 80%;
      }
      & input[type="submit"] {
        flex-basis: 20%;
      }
    }
  }
}
@media screen and (min-width: 1400px) {
  .footer-content {
    & h3 {
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
    }
    & p {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
    & form {
      margin: 0 0 0 10rem;
      flex-basis: 55%;
      & input[type="text"] {
        flex-basis: 80%;
        &::placeholder {
          font-size: 14px;
        }
      }
      & input[type="submit"] {
        flex-basis: 20%;
        font-size: 16px;
        line-height: 19px;
      }
    }
    & .subscribe {
      flex-basis: 49%;
    }
  }
  .contact_links {
    & ul li {
      font-weight: normal;
      font-size: 17px;
      line-height: 25px;
    }
    & ul li a {
      font-weight: normal;
      font-size: 17px;
      line-height: 25px;
    }
    & ul li:first-child {
      font-weight: 500;
      font-size: 22px;
      line-height: 33px;
    }
    & ul:nth-child(1) li:nth-child(2) a,
    & ul:nth-child(1) li:nth-child(3) a {
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
    }
  }
}
</style>
