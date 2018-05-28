import React from "react";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Card from "material-ui/Card";

import ResponsiveConstants from './ResponsiveConstants'

const styleSheet = createStyleSheet(theme => ({
  root: {
    [theme.breakpoints.down(ResponsiveConstants.mobileBreakpoint)]: {
      boxShadow: "0px 0px 0px 0px"
    },
    [theme.breakpoints.up(ResponsiveConstants.mobileBreakpoint)]: {
      "max-width": 1000,
    }    
  }
}));

function ResponsiveCard(props) {
  const classes = props.classes;
  const { children } = props;
  return (
    <Card className={classes.root}>
      {children}
    </Card>
  );
}

export default withStyles(styleSheet)(ResponsiveCard);
