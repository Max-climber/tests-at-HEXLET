const capitalize = (text) => {
  if (text === "") {
    return "";
  }
  const firstChar = text[0].toUpperCase();
  const restPart = text.slice(1);

  return `${firstChar}${restPart}`;
};
export default capitalize;
