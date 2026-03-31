import { selector } from "recoil";
import textState from "../atoms/textatom";

const counterSelector = selector({
  key: "counterState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

export default counterSelector;
