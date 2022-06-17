// utils
import fetch from "node-fetch";
import * as cheerio from "cheerio";

const fetchResult = async (url) => {
  try {
    const response = await fetch(url);
    const body = await response.text();

    const $ = cheerio.load(body);

    // cheerio querying function
    return $;
  } catch (error) {
    console.log(error);
  }
};

export default fetchResult;
