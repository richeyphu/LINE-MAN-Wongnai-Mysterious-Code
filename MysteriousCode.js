const getAnswer = () => {
  const secret = getSecret();
  const decoded = base64Decode(secret);
  const reversed = reverseString(decoded);

  // Answer: "Join:us:at:LINE:MAN:Wongnai"
  return reversed;
};

const getSecret = () => {
  return "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K";
};

const base64Decode = (str) => {
  return decodeURIComponent(escape(window.atob(str)));
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
