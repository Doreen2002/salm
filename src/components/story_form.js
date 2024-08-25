import SubmitBotton from "./button"
export default function StoryForm()
{
    const formData = [
        {"lable":"Enter Title:", "input_type":"text", "style": {"width":"600px", "height":"40px", "borderRadius":"20px", "border":"1px dotted rgb(28, 192, 28)", "backgroundColor":"inherit"}},
        {"lable":"Category:", "input_type":"text", "style": {"width":"600px", "height":"40px", "borderRadius":"20px", "border":"1px dotted rgb(28, 192, 28)", "backgroundColor":"inherit"}},
        {"lable":"Write your story:", "input_type":"text", "style": {"width":"600px", "height":"300px", "borderRadius":"20px", "border":"1px dotted rgb(28, 192, 28)", "backgroundColor":"inherit"}},

    ]
    return(
        <div className="story-form-container">
            <form>
                {
                    formData.map((field, index)=>
                        <div className="story-form-input-container" key={index}>
                            <label>{field.lable}</label>
                            <input type={field.input_type} style={field.style} />
                        </div>
                    )
                }
                
            </form>
            <SubmitBotton button_name ="Submit"/>
        </div>
    )
}