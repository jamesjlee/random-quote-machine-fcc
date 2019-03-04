export async function randQuoteFetch() {
  const getQuote = await fetch(
    "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    { cache: "no-cache" }
  );

  const quote = await getQuote.json();
  return quote;
}
