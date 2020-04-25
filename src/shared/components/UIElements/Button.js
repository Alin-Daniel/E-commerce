import React from "react";
import {
  makeStyles,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import red from "@material-ui/core/colors/red";

const colors = {
  colorPrimary: "#f7f2ed",
  colorPrimaryDark: "#978573",
  colorSecondary: "#232323",
  colorGreyLight1: "#808080",
  colorGreyLight2: "#dddddd",
  colorGreyDark1: "#796969",
  colorGreyDark2: "#a7a2a2",
};

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const CustomButton = (props) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.colorSecondary,
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: ["Lato", "sans-serif", "Helvetica Neue", "Arial"].join(","),
      button: {
        fontSize: "1.4rem",
      },
    },
  });
  const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: colors.colorSecondary,
      },
      secondary: {
        main: red[500],
      },
    },
  });
  //   const OutlinedButton = withStyles({
  //     root: {
  //       fontFamily: ["Lato", "sans-serif"].join(","),
  //       fontSize: props.fontSize,
  //     },
  //   })(Button);

  // const FullButton = withStyles({
  //   root: {
  //     fontFamily: ["Lato", "sans-serif"].join(','),
  //     fontSize: props.fontSize,
  //     backgroundColor: colors.colorSecondary,
  //     borderColor: colors.colorSecondary,
  //     color: '#fff',
  //     "&:hover": {
  //       backgroundColor: colors.colorSecondary,
  //       borderColor: colors.colorSecondary,
  //       boxShadow: "none",
  //     },
  //     "&:active": {
  //       boxShadow: "none",
  //       backgroundColor: colors.colorSecondary,
  //       borderColor: colors.colorSecondary,
  //     },
  //     '&:focus': {
  //       boxShadow: `0 0 0 0.2rem rgba(${colors.colorSecondary},.5)`,
  //     },
  //   },
  // })(Button);

  if (props.variant === "outlined") {
    return (
      <ThemeProvider theme={theme}>
        <Button
          onClick={props.clicked}
          disabled={props.disabled}
          variant="outlined"
          size={props.size}
          color="primary"
        >
          {props.children}
        </Button>
      </ThemeProvider>
    );
  }
  if (props.variant === "full") {
    return (
      <ThemeProvider theme={theme}>
        <Button
          onClick={props.clicked}
          disabled={props.disabled}
          variant="contained"
          size={props.size}
          color="primary"
        >
          {props.children}
        </Button>
      </ThemeProvider>
    );
  }
  if (props.link) {
    return (
      <ThemeProvider theme={theme}>
        <Button
          onClick={props.clicked}
          disabled={props.disabled}
          // variant="contained"
          size={props.size}
          style={{ fontWeight: 300 }}
          // color="primary"
        >
          {props.children}
        </Button>
      </ThemeProvider>
    );
  }

  if (props.shoppingCart) {
    return (
      <ThemeProvider theme={theme2}>
        <IconButton onClick={props.clicked} color="primary" aria-label="cart">
          <StyledBadge badgeContent={props.products} color="secondary">
            <ShoppingCartOutlined fontSize="large" />
          </StyledBadge>
        </IconButton>
      </ThemeProvider>
    );
  }

  return (
    <Button
      onClick={props.clicked}
      variant={props.variant}
      size={props.size}
      color={props.color}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
