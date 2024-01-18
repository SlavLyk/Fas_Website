import React, { useEffect, useState } from "react";
import "./PaypalCheckout.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";
import Nebula from "../../icons/Nebula.png";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const amount = "0.1";
const currency = "USD";
const style = { layout: "vertical" };
const date = new Date();

// Format the date as needed (e.g., "January 6, 2024")
const formattedDate = date.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const ButtonWrapper = ({
  currency,
  showSpinner,
  onComplete,
  setDownloadLink,
}) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            onComplete(); // Notify the parent component that the purchase is complete
          });
        }}
      />
    </>
  );
};

const PaypalCheckout = () => {
  const [isScriptLoaded, setScriptLoaded] = React.useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [downloadLink, setDownloadLink] = useState(null);
  const [serverResponse, setServerResponse] = useState("");

  useEffect(() => {
    const scriptDelay = 200;

    // This will trigger the initialization of the PayPal script after a delay
    const scriptTimeout = setTimeout(() => {
      setScriptLoaded(true);
    }, scriptDelay);

    // Clear the timeout to avoid potential issues
    return () => clearTimeout(scriptTimeout);
  }, []);

  const handlePurchaseComplete = async () => {
    // Direct link to the file
    const directDownloadLink =
      "https://storage.googleapis.com/gogwebsite-d4f67.appspot.com/GateOfGolgotha.rar";

    // Later remove all of this as well as in index.js

    // // Request to your Node.js Express server
    // try {
    //   // Make a request to the server to get the download link
    //   const response = await fetch(
    //     // change to localhost:3000 to test on local
    //     "https://floating-axe-website.herokuapp.com/getDownloadLink"
    //   );
    //   const data = await response.json();

    //   // Use the download link from the server response

    //   // Open the download link in a new tab
    //   window.location.href = directDownloadLink;
    //   window.open(directDownloadLink, "_blank");

    //   setPurchaseComplete(true);
    // } catch (error) {
    //   console.error("Error fetching download link:", error);
    // }

    // Redirect the user to the download link
    window.location.href = directDownloadLink;
    window.open(directDownloadLink, "_blank");

    setPurchaseComplete(true);
  };

  return (
    <div className="PaypalCheckout">
      <Header />
      <div className={`bg2 ${purchaseComplete ? "purchase-complete" : ""}`}>
        {purchaseComplete ? (
          <div className="contactUs">
            <div className="flex-container-text">
              <div className="container-main">
                <h1>Thank you for your purchase!</h1>
                <h2 className="insturctions">
                  Please inspect your downloads folder to find the game files.
                </h2>
                <h2>
                  In case the download hasn't initiated, feel free to reach out
                  to us at floatingaxestudios@gmail.com for assistance.
                </h2>
                <br />
                <br />
                <div className="invoice-box">
                  <table>
                    <tr className="top">
                      <td colSpan="2">
                        <table>
                          <tr className="logo-row">
                            <td>{formattedDate}</td>
                            <br />
                            <br />
                            <br />
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <div id="bot">
                      <div id="table">
                        <table>
                          <tr className="tabletitle">
                            <td className="item">
                              <h2>Item</h2>
                            </td>
                            <td className="Hours">
                              <h2>Qty</h2>
                            </td>
                            <td className="Rate">
                              <h2>Sub Total</h2>
                            </td>
                          </tr>

                          <tr className="service">
                            <td className="tableitem">
                              <h2 className="itemtext">Gate of Golgotha</h2>
                            </td>
                            <td className="tableitem">
                              <h2 className="itemtext">1</h2>
                            </td>
                            <td className="tableitem">
                              <h2 className="itemtext">${amount}</h2>
                            </td>
                          </tr>

                          <tr className="tabletitle">
                            <td></td>
                            <td className="Rate">
                              <h2>Total</h2>
                            </td>
                            <td className="payment">
                              <h2>${amount}</h2>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="card-container">
              <h1 className="price-text">Gate of Golgotha</h1>
              <br />
              <h2 className="price-text">Price: ${amount}</h2>
              <br />
              {/* <button onClick={handleButtonClick}>Fetch Data</button>
              <p>Server Response: {serverResponse}</p> */}
              <h2 className="price-text">
                1. Please sign in with Paypal and go through the payment
                process.
                <br />
                <br />
                2. The .exe file will be automatically downloaded to your
                downloads folder.
                <br />
                <br />
                3. See your browser's settings to change the default download
                location.
              </h2>
              <img src={Nebula} alt="Card" className="card-image" />
            </div>

            <div
              style={{ maxWidth: "750px", minHeight: "200px" }}
              className={`buttons ${purchaseComplete ? "hidden" : ""}`}
            >
              <PayPalScriptProvider
                options={{
                  clientId:
                    "AU8JUtxLPN4aXVVFpEw5910rpSwPtrnHx6dDkeOAQrWeFEKRtcPINeAx9Q2KiXmtyMzl0IrdyQf_vzo-",
                  components: "buttons",
                  currency: "USD",
                }}
              >
                {isScriptLoaded && (
                  <ButtonWrapper
                    currency={currency}
                    showSpinner={!purchaseComplete}
                    onComplete={handlePurchaseComplete}
                  />
                )}
              </PayPalScriptProvider>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaypalCheckout;
