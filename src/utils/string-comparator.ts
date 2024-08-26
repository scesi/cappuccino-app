export const isTextSimilarToText = (
  firstText: string,
  secondText: string,
): boolean => {
  return firstText
    .toString()
    .toUpperCase()
    .includes(secondText.toString().toUpperCase())
}
