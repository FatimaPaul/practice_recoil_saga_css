import { useRecoilState, useRecoilValue } from "recoil";
import textState from "../atoms/textatom";
import counterSelector from "../selectors/counterSelector";

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const counterValue = useRecoilValue(counterSelector);
  const handleSearch = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <label htmlFor="text">Search</label>
      <input
        type="text"
        name="text"
        id="text"
        onChange={handleSearch}
        value={text}
      />
      <p>Echo: {text}</p>
      <p>counter: {counterValue}</p>
    </>
  );
}
