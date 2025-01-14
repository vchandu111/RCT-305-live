import { useState, useEffect } from "React";

function Document() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log(title);
    document.title = title;
  }, [title]);
  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter text to change title"
      />
    </>
  );
}

export default Document;
