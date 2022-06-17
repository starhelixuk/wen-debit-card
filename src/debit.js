import fetchResult from "./scrape.js";

export default fetchResult("https://stormx.io/debit-card")
  .then(($) => {
    const debitCardPanel = $(".accordion:nth-child(2)");
    const debitCardPanellHeader = debitCardPanel.find(".a-btn").text();
    const debitCardPanelAnswer = debitCardPanel.find(".a-panel").text();

    return {
      title: debitCardPanellHeader,
      content: debitCardPanelAnswer,
      url: "https://stormx.io/debit-card#faqs",
    };
  })
  .catch(() => {
    // The accordion was unable to be obtained, so return a friendly user error, with the option to visit the url directly
    return {
      title: "Unable to retrieve latest information",
      content:
        "Check the url above for the latest debit card news from StormX.",
      url: "https://stormx.io/debit-card",
    };
  });
