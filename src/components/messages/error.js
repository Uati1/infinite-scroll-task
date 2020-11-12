import "./messages.css"

export default function Error(props) {
    return <div className="error">
                <strong>Error occured </strong> {props.error.message}
            </div>
}