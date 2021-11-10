import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function TweetList() {
  const tweets = useSelector((state) => state.tweets.tweets);

  return tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
}

function Tweet(props) {
  const { tweet } = props;

  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title>{tweet.name}</Card.Title>
        <Card.Text>{tweet.tweet}</Card.Text>
        <Button variant="danger">Eliminar Tweet</Button>
      </Card.Body>
    </Card>
  );
}
