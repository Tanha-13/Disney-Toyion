import { useEffect } from "react";

const useTitleChange = (title) => {
    useEffect(() => {
        document.title = `Disney Toyion ${title}`;
    }, [title]);
}
export default useTitleChange;