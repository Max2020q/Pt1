import React, { Component } from "react";
import { render } from "react-dom";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Grid from "material-ui/Grid";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";

import ResponsiveCard from "./ResponsiveCard.js";
import ResponsiveContainerGrid from "./ResponsiveContainerGrid.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.state = {
      email: { value: null, error: false, helperText: null },
      password: { value: null, error: false, helperText: null }
    };
  }

  signIn(e) {
    if (this.emailInput.value === "") {
      this.setState({
        email: {
          value: this.emailInput.value,
          error: true,
          helperText: "Your email must be specified."
        }
      });
      this.emailInput.focus();
    }
    e.preventDefault();
  }

  //*FULLSCREEN*
  //GRID sm={20} for Fullscreen
  //RESPONSIVECARD.js set "max-width" to window width for Fullscreen
  //RESPONSIVECARD.js set "min-height" to window height Fullscreen
  //RESPONSIVECONSTANTS.js set to breakpoints to "xl"

  //*CARD*
  //GRID sm={6} for Card
  //RESPONSIVECARD set "max-width" to 800-1000 for Card
  //RESPONSIVECARD.js erase "min-height"
  //RESPONSIVECONSTANTS.js set to breakpoints to "sm, md, lg"
  
  render() {
    return (
        <div>
          <ResponsiveContainerGrid>
            <Grid item xs={12} sm={6}>
              <ResponsiveCard>
                <form onSubmit={this.signIn.bind(this)}>
                  <CardHeader title="Sign in" subheader="to work with Chance the Rapper" />
                  <CardContent>
                    <TextField
                      label="Enter your email"
                      fullWidth
                      autoFocus
                      required
                      inputRef={input => (this.emailInput = input)}
                      error={this.state.email.error}
                      helperText={this.state.email.helperText}
                    />
                    <TextField
                      label="Enter your password"
                      fullWidth
                      required
                      type="password"
                      inputRef={input => (this.passwordInput = input)}
                    />
                  </CardContent>
                  <CardActions style={{ justifyContent: "space-between" }}>
                    <Button>Forgot password</Button>
                    <Button type="submit" color="primary" raised>
                      Sign in
                    </Button>
                  </CardActions>
                </form>
              </ResponsiveCard>
            </Grid>
          </ResponsiveContainerGrid>
        </div>
    );
  }
}

render(<App />, document.getElementById("root"));
