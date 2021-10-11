const initialState = [];

const NewsArticles = (state = initialState, action) => {
  switch (action.type) {
    case "FILL_INFO":
      return [{ name: "news stuff" }];
    default:
      return state;
  }
};

export default NewsArticles;
