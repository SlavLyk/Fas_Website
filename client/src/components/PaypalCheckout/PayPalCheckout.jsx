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

const amount = "9.99";
const currency = "USD";
const style = { layout: "vertical" };

const downloadImage = () => {
  const link = document.createElement("a");
  link.href = Nebula; // Replace with the actual image URL or blob
  link.download = "downloaded_image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ButtonWrapper = ({ currency, showSpinner, onComplete }) => {
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
            downloadImage();
          });
        }}
      />
    </>
  );
};

const PaypalCheckout = () => {
  const [isScriptLoaded, setScriptLoaded] = React.useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  useEffect(() => {
    const scriptDelay = 200;

    // This will trigger the initialization of the PayPal script after a delay
    const scriptTimeout = setTimeout(() => {
      setScriptLoaded(true);
    }, scriptDelay);

    // Clear the timeout to avoid potential issues
    return () => clearTimeout(scriptTimeout);
  }, []);

  const handlePurchaseComplete = () => {
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
                <h2>Check your downloads folder to find the game files.</h2>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="card-container">
              <h1 className="price-text">Gate of Golgotha</h1>
              <h2 className="price-text">Price: $9.99</h2>
              <img src={Nebula} alt="Card" className="card-image" />
            </div>

            <div
              style={{ maxWidth: "750px", minHeight: "200px" }}
              className={`buttons ${purchaseComplete ? "hidden" : ""}`}
            >
              <PayPalScriptProvider
                options={{
                  clientId: "test",
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
