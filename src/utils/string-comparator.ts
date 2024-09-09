export const isTextSimilarToText = (
  firstText: string,
  secondText: string,
): boolean => {
  return firstText.toUpperCase().includes(secondText.toUpperCase())
}
