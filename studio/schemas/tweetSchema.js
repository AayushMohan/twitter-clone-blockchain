export const tweetSchema = {
  name: "tweets",
  title: "Tweets",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "timestamp",
      type: "datetime",
      title: "Timestamp",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "users" }],
    },
  ],
};
