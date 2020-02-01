export const prepIconString = (iconName: string): string => {
  if (iconName !== undefined) {
    return iconName
      .toUpperCase()
      .replace("-", "_")
      .replace("-", "_");
  }
  return iconName;
};
