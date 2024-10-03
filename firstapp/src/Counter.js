import { useEffect, useState } from 'react'
function Counter() {
    let [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    const updateComments = (e) => {
        setComments(comments.filter(obj => {
            let idt = (e.target.id);
            if (obj.id != idt) {
                return obj;
            }
        }));
    }


    const result = comments.map((obj) => {
        return <div id={obj.id}>
            <p>{obj.text}</p>
            <button onClick={updateComments} id={obj.id}>delete</button>
        </div>

    });
    return (result)





}
export default Counter