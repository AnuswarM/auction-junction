import React from "react";
import ReactDOM from "react-dom/client";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "./components/App";

// const Routing = () => {
//   return (
//     <Switch>
//       {/* <Route exact path="/" component={Home} />
//       <Route exact path="/addlot" component={Addlot} />
//       <Route exact path="/updatelot" component={UpdateLot} />
//       <Route exact path="/updateauction/:id" component={UpdateComponent} />

//       <Route exact path="/lot" component={Lot} />
//       <Route path="/lot/:keyword" component={Lot} />
//       <Route exact path="/bidstatus" component={BidStatus} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/service" component={Service} />
//       <Route exact path="/contact" component={Contact} />
//       <Route exact path="/feedback" component={Feedback} />

//       <Route exact path="/profile" component={Profile} />
//       <Route exact path="/logout" component={Logout} />
//       <Route exact path="/signup" component={Signup} />
//       <Route exact path="/signin" component={Signup} />
//       <Route exact path="/product/:id" component={ProductDetails} /> */}

//       <Redirect to="/" />
//       {/* Can use Error 404 Page  but redirect is better than that page */}
//     </Switch>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
