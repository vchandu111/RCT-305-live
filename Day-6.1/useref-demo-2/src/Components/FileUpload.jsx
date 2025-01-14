import { useRef } from "react";
import { AiFillAccountBook } from "react-icons/ai";

function FileUpload() {
    const fileRef = useRef(null);
    const handleFileInput = (event) => {
        console.log(fileRef.current.click())
    }
  return (
    <>
      <h1>File Upload</h1>
      <input style={{ display: "none" }} ref={fileRef} type="file" />
      <button onClick={handleFileInput}>Upload File</button>
      <AiFillAccountBook />

    </>
  );
}

export default FileUpload;
