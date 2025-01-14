import { useEffect } from "react"
import { useRef } from "react"
function Focus() {
    const focusRef = useRef(null)

    useEffect(() => {
        focusRef.current.focus()
    },[])
    return (
        <>
            <input ref={focusRef} type="text" placeholder="focus here"/>
        </>
    )
}

export default Focus