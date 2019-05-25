export const prepIconString = iconName => {
  if (iconName !== undefined) {
    return iconName
      .toUpperCase()
      .replace("-", "_")
      .replace("-", "_");
  }
  return iconName;
};
