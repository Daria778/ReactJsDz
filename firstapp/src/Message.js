import "./Message.css"
function Message(props) {
    let data = props.text;
    return (
        <p> {data}</p>
    );
}

export default Message