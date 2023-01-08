export const reverseString = (str: string): string => {
  const strArray: string[] = str.split("");
  strArray.reverse();
  return strArray.join("");
};

export const isCursorBetweenStrings = (
  str: string,
  S1: string,
  S2: string,
  cursorPos: number
): boolean => {
  const preStr = str.substring(0, cursorPos);
  const postStr = str.substring(cursorPos, str.length);

  const s1PreIndex = preStr.lastIndexOf(S1);
  if (s1PreIndex === -1) {
    return false;
  }

  const s2PreIndex = preStr.lastIndexOf(S2);
  if (s1PreIndex !== -1 && s2PreIndex > s1PreIndex) {
    return false;
  }

  const s2PostIndex = postStr.indexOf(S2);
  if (s2PostIndex === -1) {
    return false;
  }

  const s1PostIndex = postStr.indexOf(S1);
  if (s1PostIndex !== -1 && s2PostIndex > s1PostIndex) {
    return false;
  }

  return true;
};
