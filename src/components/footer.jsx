import React from "react";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://twitter.com/gtchakama">
        A Project By George Chakama
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
