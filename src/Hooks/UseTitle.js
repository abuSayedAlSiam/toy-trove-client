import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} | Toy Trove`
    } ,[title])
}

export default UseTitle;