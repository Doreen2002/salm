export default function SubmitBotton(props)
{
    return(
        <div className="submit-button" onClick={props.click}>
          {props.button_name}
        </div>
    )
}