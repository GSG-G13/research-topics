const app = require("express")();
const passport = require("passport");
const session = require("express-session");

require("./auth");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send('<a href="/google">Login with google<a>');
});

app.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/failure",
  })
);

app.get("/success", checkAuthenticated, (req, res) => {
  res.send(
    `<div>
      <h1>${req.user.displayName}</h1>
      <p>${req.user.email}</p>
      <img src='${req.user.picture}'/>
    </div>`
  );
});

app.get("/failure", (req, res) => {
  res.send("failure");
});

app.listen(3000, () => {
  console.log("app listen on port 3000");
});
