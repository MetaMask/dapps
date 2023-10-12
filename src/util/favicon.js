import { DOMParser } from "@xmldom/xmldom";
import isUrl from "is-url";

/**
 * Parse the HTML source into a DOM document
 *
 * @param {string | undefined} htmlSource the HTML source
 * @returns {Document | undefined} the DOM document
 */
const parseHtmlSource = (htmlSource) => {
  if (htmlSource && htmlSource.length > 0) {
    return new DOMParser().parseFromString(htmlSource, "text/html");
  }
};

/**
 * Return the favicon URL from the HTML links collection
 *
 * @param {HTMLCollectionOf<Element> | undefined} links the HTML links collection
 * @param {string} origin the origin URL to be used to build the favicon url
 * @returns {URL | undefined} the first found favicon URL or empty object if none found
 */
const getFaviconUrlFromLinks = (links, origin) => {
  let faviconURL;

  if (links && links.length > 0 && origin) {
    for (let i in Array.from(links)) {
      const link = links[i];
      const rel = link.getAttribute("rel");
      if (rel && rel.split(" ").includes("icon")) {
        const href = link.getAttribute("href");
        if (href) {
          faviconURL = new URL(href, origin);
          break; //stop loop at first favicon found, same behaviour as browser extension
        }
      }
    }
  }
  return faviconURL;
};

/**
 * Sanitize origin url
 * 
 * @param {string} origin 
 * @returns {URL | undefined}
 */
const originToUrl = (origin) => {
  if (origin) {
    try {
      const originWithProtocol = isUrl(origin)
        ? origin
        : `https://${origin}`;
      return new URL(originWithProtocol);
    } catch (e) {}
  }
};

/**
 * Returns URL for the favicon of the given url
 *
 * @param {string} origin - String corresponding to website url or domain
 * @returns {Promise<URL | undefined>} - String corresponding to favicon url or empty string if none found
 */
export const getFaviconURLFromHtml = async (origin) => {
  if (!origin || origin === 'null') {
    return;
  }
  try {
    let url = originToUrl(origin);
    if (url) {
      const response = await fetch(url);
      if (!response || !response.ok) {
        return;
      }
      // Follow redirect (if any)
      if (url !== response.url) {
        url = response.url
      }
      const htmlSource = await response.text();
      const htmlDoc = parseHtmlSource(htmlSource);
      const links = htmlDoc && htmlDoc.getElementsByTagName("link");
      const favicon = getFaviconUrlFromLinks(links, url);
      return favicon;
    }
  } catch (error) {}
};
