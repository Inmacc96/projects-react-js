import React from "react";
import { Grid } from "@material-ui/core";

import "./ListTweets.scss";

export default function ListTweets(props) {
  const { allTweets } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No Hay Tweets.</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          Tweet...
        </Grid>
      ))}
    </Grid>
  );
}
