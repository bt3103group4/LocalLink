<template>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"
    />
  </head>

  <body>
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="serviceCol">
              <h3>Sign Up for our Newsletter!</h3>
              <form id="newsLetter">
                <input type="text" placeholder=" Input your email!" />
                <input type="button" value="Go" />
              </form>
            </div>
            <div class="contactCol">
              <h3>Contact</h3>
              <p>
                For queries related to tours, please contact the tour guide
                directly. For booking queries or conflicts, please email our
                friendly operators at bt3103grp4@gmail.com
              </p>
            </div>
            <div class="localLink">
              <h3>LocalLink</h3>
              <p>
                Get a personalised tour from a local tour guide at LocalLink.
                Your next tour is a click away! A BT3103 Project by Group 4 -
                Pang Hui Yi Charlene, Lim Zi Hui, Amanda Lim, Rhea Sharma and
                Jia Lu.
              </p>
            </div>
          </div>
          <p class="copyright">Locallink © 2021</p>
        </div>
      </footer>
    </div>
  </body>
</template>

<script>
export default {
  name: "DefaultFooter",
};
</script>

<style scoped>
.footer-dark {
  padding: 40px 0;
  color: #f0f9ff;
  background-color: #282d32;
  position: relative;
  /* top: 200%; */
  /* bottom: 0px; */
  width: 100%;
}

.row {
  padding: 0px;
}

.serviceCol {
  width: 33%;
  float: left;
  padding: 20px;
}

.contactCol {
  font-size: 13px;
  width: 33%;
  float: left;
  padding: 20px;
}

.localLink {
  font-size: 13px;
  width: 33%;
  float: left;
  padding: 20px;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
