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

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ERROR = {
    email: "Please enter valid email address.",
    emptyFields: "This field is required...",
  };

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const formValidator = () => {
    //regex for email (checks that email name is any word with a . and 2-4 letter domain following it. )
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // 1. Check required fields are filled in
    for (const field in mailerState) {
      if (field !== "website" && mailerState[field] === "") {
        setError(ERROR.emptyFields);
        return false;
      }
    }
    // 2. Check correct email
    if (mailerState.email.match(validEmail) == null) {
      setError(ERROR.email);
      return false;
    }
    //3. Pass if no errors
    return true;
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    // formvalidator passes
    if (formValidator() === true) {
      // clearing from previous error
      setError("");
      console.log({ mailerState });
      // set loading state
      setIsLoading(true);
      const response = await fetch(
        "https://floating-axe-website.herokuapp.com/send",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        }
      )
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
          setIsLoading(false);
          setMailerState({
            name: "",
            lastname: "",
            email: "",
            website: "",
            message: "",
          });
        });
    } else {
      setMailerState({
        name: "",
        lastname: "",
        email: "",
        website: "",
        message: "",
      });
    }
  };

  const setPlaceholder = (value) => {
    if (error === ERROR.email && value === "Email") {
      return error;
    } else if (error === ERROR.emptyFields && value !== "Website") {
      return error;
    } else {
      return value;
    }
  };

  const setInputStyle = (value) => {
    if (error === ERROR.email && value === "Email") {
      return { borderColor: "#cd3838" };
    } else if (error === ERROR.emptyFields && value !== "Website") {
      return { borderColor: "#cd3838" };
    } else {
      return {};
    }
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
              {/* HOMEWORK: figure out how to render the right input field in one function  */}
              <input
                type="text"
                placeholder={setPlaceholder("Name")}
                onChange={handleStateChange}
                name="name"
                value={mailerState.name}
                style={setInputStyle("Name")}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder={setPlaceholder("Last Name")}
                onChange={handleStateChange}
                name="lastname"
                value={mailerState.lastname}
                style={setInputStyle("Last Name")}
              />
            </p>
            <p className="full">
              <input
                type="text"
                placeholder={setPlaceholder("Email")}
                autoComplete="do-not-autofill"
                onChange={handleStateChange}
                name="email"
                value={mailerState.email}
                style={setInputStyle("Email")}
              />
            </p>
            <p className="full">
              <input
                type="text"
                placeholder={setPlaceholder("Website")}
                autoComplete="do-not-autofill"
                onChange={handleStateChange}
                name="website"
                value={mailerState.website}
              />
            </p>
            <p className="full">
              <textarea
                name="message"
                placeholder={setPlaceholder("Message")}
                rows="5"
                onChange={handleStateChange}
                value={mailerState.message}
                style={setInputStyle("Message")}
              ></textarea>
            </p>
            <p className="full">
              <button>{isLoading ? "Sending Message ... " : "Send"}</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
