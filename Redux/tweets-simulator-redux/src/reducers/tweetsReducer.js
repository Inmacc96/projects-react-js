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
    default:
      return state;
  }
}
