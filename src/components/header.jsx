import React from "react";
import "../App.css";
import Typography from "@material-ui/core/Typography";
import Form from "./form";

export default function Header() {
  return (
    <div className="Header-comp">
      <Typography component="h1" variant="h2">
        Zim Developers
      </Typography>
      <Typography component="h1" variant="h4">
        SURVEY
      </Typography>
      <Form />
    </div>
  );
}
