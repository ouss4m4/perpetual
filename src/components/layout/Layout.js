import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>365 Perpetual Income | Automated affiliate marketing</title>
        <meta
          name="description"
          content="Affiliate marketing is an excellent opportunity if you truly believe in the value of the product you're selling. Because many times, you can make money off of something you would probably recommend anyway"
        />

        <meta property="og:url" content="365income.netlify.app" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="365 Perpetual Income | affiliate marketing" />
        <meta
          property="og:description"
          content="Affiliate marketing is an excellent opportunity if you truly believe in the value of the product you're selling. Because many times, you can make money off of something you would probably recommend anyway"
        />
        <script>{`
        function bemobCb(params) {
          var t = params.trackingDomain+'/click/';
          var re = new RegExp(t+'?(\\d*)');
          var e = document.querySelectorAll('a[href*="'+t+'"]');
          for (var i = 0; i < e.length; i++) {
              var ex = re.exec(e[i].href);
              if (ex) {
                  e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex[1] || 1);
              }
          }
      }
        `}</script>
        <script>{`
        !function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://o06vt.bemobtrcks.com/landing/39851a0d-62a0-4ff7-8dfe-f06323aed2f2?callback=bemobCb&rule=1&path=1&landing=1&"+window.location.search.substring(1);var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}();
        `}</script>
        <noscript>
          {`<img src="https://o06vt.bemobtrcks.com/landing/39851a0d-62a0-4ff7-8dfe-f06323aed2f2?rule=1&path=1&landing=1" alt=""`}
        </noscript>
      </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
