/**
 * Method to check if one string is similar to another text string, ignoring case sensitivity
 *
 * @param {string} firstText - String in which to search for the presence of secondText
 * @param {string} secondText - String to search for within firstText
 * @returns {boolean} - true if secondText is found within firstText, otherwise false
 *
 * @example
 * // Example of checking if the text 'wORLD' is found within 'Hello World'
 * text1 = 'Hello World'
 * text2 = 'wORLD'
 * result = isTextSimilarToText(text1, text2)
 *
 * console.log(isTextSimilarToText(text1, text2))
 * // output: true
 */

export const isTextSimilarToText = (
  firstText: string,
  secondText: string,
): boolean => {
  return firstText.toUpperCase().includes(secondText.toUpperCase())
}
