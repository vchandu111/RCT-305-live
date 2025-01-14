import { useRef } from "React"
import { FaCloudUploadAlt } from "react-icons/fa";

function FileUpload() {
    const fileRef = useRef(null)
    return (
        <>
            <h1>File Upload</h1>
            <input style={{display:"none"}} ref={fileRef} type="file" />
            <FaCloudUploadAlt />
        </>
    )
}

export default FileUpload