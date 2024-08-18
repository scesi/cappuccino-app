export const isTextSimilarToText = (firstText: string, secondText: string) => {
    return firstText.toUpperCase().includes(secondText.toUpperCase());
}