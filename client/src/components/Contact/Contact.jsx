import "./Contact.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";
import { useState } from "react";

function Contact(props) {
  const [mailerState, setMailerState] = useState({
    name: "",
    lastname: "",
    email: "",
    website: "",
    message: "",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch(`${process.env.PORT}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          name: "",
          lastname: "",
          email: "",
          website: "",
          message: "",
        });
      });
  };

  return (
    <div className="Contact">
      <Header active="Contact" />
      <div className="contactUs">
        <div className="flex-container-text">
          <div className="container-main">
            <h1>We love working together</h1>
            <h2>
              Leave us a message, and we will <br />
              get back to you as soon as possible.
            </h2>
          </div>
        </div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={submitEmail}>
            <p>
              <input
                type="text"
                placeholder="Name"
                onChange={handleStateChange}
                name="name"
                value={mailerState.name}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleStateChange}
                name="lastname"
                value={mailerState.lastname}
              />
            </p>
            <p className="full">
              <input
                type="text"
                placeholder="Email"
                autoComplete="do-not-autofill"
                onChange={handleStateChange}
                name="email"
                value={mailerState.email}
              />
            </p>
            <p className="full">
              <input
                type="text"
                placeholder="Website"
                autoComplete="do-not-autofill"
                onChange={handleStateChange}
                name="website"
                value={mailerState.website}
              />
            </p>
            <p className="full">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                onChange={handleStateChange}
                value={mailerState.message}
              ></textarea>
            </p>
            <p className="full">
              <button>Send</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
