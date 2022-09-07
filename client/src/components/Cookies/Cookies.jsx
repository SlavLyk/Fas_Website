import React from "react";
import "./Cookies.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";

function Cookies() {
  return (
    <div className="Cookies">
      <Header />
      <div className="bg-black">
        <div className="flex-container-main">
          <div className="blur-container-1">
            {/* <h1>Privacy Policy</h1> */}
            <h1>Cookies Policy for Floating Axe Studios</h1>
            <p>
              Cookies are very small text files that are placed on your device
              when you visit some websites, applications, or other web based
              services (collective “Websites”). Your browser sends these cookies
              back to the web based service on each subsequent visit so that
              they can remember things like preferences or serve personalized
              messages. You can remove any cookies already stored on your
              computer, but these may prevent you from using parts of our
              Websites.
            </p>
            <p>
              {" "}
              Cookies last for different lengths of time depending on the job
              they do. Session cookies only last for your online session and
              disappear from your device when you close your browser. Persistent
              cookies stay on your device after the browser has been closed and
              last for the period of time specified in the cookie.
            </p>
            <h2> Necessary Cookies</h2>
            <p>
              Necessary cookies let you move around the Website and use
              essential features. These cookies are essential to us being able
              to operate and maintain our Website, such as measuring errors and
              providing usage statistics. Accepting these cookies is a condition
              of using the Website, so if you prevent them we cannot guarantee
              how our site will perform for you.
            </p>
            <h2> Optional Cookies</h2>
            <p>
              Optional cookies are used to provide services or to remember
              settings to improve your visit. You decide whether or not these
              cookies are used, but preventing them may mean we can't offer you
              some features, such as remembering if we already asked you to
              provide certain feedback or offered you a service.
            </p>
            <h2> Managing cookies in your browser</h2>
            <p>
              Most browsers will allow you to choose the level of privacy
              settings you want. You can block all cookies, or accept all
              cookies or pick a setting somewhere in between. This range lets
              you control your cookie settings, so you can:
            </p>
            <ul>
              <li>
                See what cookies you've got and delete them on an individual
                basis
              </li>
              <li>Block third party cookies</li>
              <li>Block cookies from particular sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p>
              Deleting cookies means that any preference settings you have made
              on a Website will be lost. If you’ve set your preferences to opt
              out of cookies, this setting will be lost too, as that information
              is stored in a cookie. Blocking all cookies means functionality on
              our Websites will be lost, as described above. We don’t recommend
              turning all cookies off when using our Websites. If you want to
              reduce your cookie settings at any time – for example, if you
              accept all cookies, but later decide you don’t want a certain type
              of cookie – you’ll need to use your browser settings to remove any
              third party cookies dropped on your previous visit.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cookies;
