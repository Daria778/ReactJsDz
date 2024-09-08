import "./Message.css"
function Message(props) {
    let data = props.text;
    return (
        <h2> {data}</h2>
    );
}

export default Message