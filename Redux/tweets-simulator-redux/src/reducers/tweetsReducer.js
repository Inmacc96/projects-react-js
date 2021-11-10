const initialProps = {
  tweets: [],
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };
    case "DELETE_TWEET":
      return {
        ...state,
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };
    default:
      return state;
  }
}
