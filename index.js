const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const fetch = require("node-fetch");

require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    // type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    // clientId: process.env.OAUTH_CLIENTID,
    // clientSecret: process.env.OAUTH_CLIENT_SECRET,
    // refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("/", function (_, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const whitelist = [
  "http://localhost:3000",
  "http://localhost:5000",
  "https://floating-axe-website.herokuapp.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `New Message`,
    html: `
    <p>You have a new contact request</p>
<h3>Contact Details</h3>
<ul>
<li>Name: ${req.body.mailerState.name} ${req.body.mailerState.lastname}</li>
<li>Email: ${req.body.mailerState.email}</li>
<li>Website: ${req.body.mailerState.website}</li>
</ul>
<h3>Message</h3>
<p>${req.body.mailerState.message}</p>
`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

//Sign up Route
app.post("/signup", (req, res) => {
  const email = req.body.newsletterState.email;
  console.log(email);

  //Make sure fields are filled in
  // if (!email) {
  //   res.redirect("back");
  //   return;
  // }

  //Construct req Data
  const data = {
    members: [
      {
        // : email was before I changed it just now
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  const postData = JSON.stringify(data);

  fetch("https://us13.api.mailchimp.com/3.0/lists/191d372e7e", {
    method: "POST",
    headers: {
      Authorization: "auth 27877a6c7d744f40ae78a2e2184b1ce1-us13",
    },
    body: postData,
  })
    .then(
      res.statusCode === 200 ? console.log("worked") : console.log("failed")
    )
    .catch((err) => console.log(err));

  // const options = {
  //   url: "https://us13.api.mailchimp.com/3.0/lists/191d372e7e",
  //   method: "POST",
  //   headers: {
  //     Authorization: "auth 27877a6c7d744f40ae78a2e2184b1ce1-us13",
  //   },
  //   body: postData,
  // };

  // request(options, (err, response, body) => {
  //   if (err) {
  //     alert("fail");
  //   } else {
  //     if (response.statusCode === 200) {
  //       alert("sucess");
  //     } else {
  //       alert("fail");
  //     }
  //   }
  // });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
