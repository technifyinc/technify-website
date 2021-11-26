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
            <input type="text" id="search" placeholder="Enter Email Address" />
            <input type="submit" class="btn" value="Subscribe" />
          </form>
        </div>
        <div class="contact_links flex flex-between align-start">
          <ul>
            <li>Contact Us</li>
            <li><a href="mailto:hello@technify.ng">hello@technify.ng</a></li>
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
            <li>Office Address</li>
            <li>17 Makurdi Street, Ebute Metta 100001, Lagos State.</li>
            <li><a href="tel:+2341567890">+234 816 5083 087</a></li>
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
  padding: 2rem 0;
  border-top: solid 3px $bg;
  &-content {
    & h3 {
      color: $sec-color;
      text-transform: uppercase;
      line-height: 24px;
      margin-bottom: 1rem;
    }
    & form {
      margin-top: 1rem;
      flex-direction: row;
      & input[type="text"] {
        flex-basis: 70%;
        margin-right: 0.3rem;
      }
      & input[type="submit"] {
        flex-basis: 30%;
      }
    }
  }
}

.contact_links {
  margin: 2rem 0;
  & ul {
    margin: 1rem 0 0;
  }
  & ul li {
    list-style: none;
    text-align: left;
    padding: 0 0 1rem;
  }
  & ul li:first-child {
    font-weight: bold;
    padding-bottom: 1rem;
    font-size: 15px;
    color: $sec-color;
  }
  & ul:nth-child(1) li:nth-child(2) a,
  & ul:nth-child(2) li:nth-child(3) a {
    color: $tag-color;
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
    & form {
      flex-basis: 50%;
      margin: 0;
    }
    & .subscribe {
      flex-basis: 50%;
      margin: 0 1rem 0 0;
    }
  }
  .contact_links {
    & ul {
      flex-basis: 50%;
    }
  }
}
</style>
