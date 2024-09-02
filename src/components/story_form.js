import SubmitBotton from "./button"
import { useState } from "react";
export default function StoryForm()
{
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    const formData = [
        {"lable":"Enter Title:", "input_type":"text", "style": {"width":"600px", "height":"40px", "borderRadius":"20px", "border":"1px dotted rgb(28, 192, 28)", "backgroundColor":"inherit"}, "value":inputs.title, name:"title"},
        {"lable":"Category:", "input_type":"text", "style": {"width":"600px", "height":"40px", "borderRadius":"20px", "border":"1px dotted rgb(28, 192, 28)", "backgroundColor":"inherit"}, "value":inputs.category, name:"category"},
        {"lable":"Write your story:", "input_type":"text", "style": {"width":"600px", "height":"300px", "borderRadius":"20px", "border":"1px dotted rgb(28, 192, 28)", "backgroundColor":"inherit"}, "value":inputs.story, name:"story"},

    ]
    const handleSubmit = () => {
     console.log(inputs)
    }
    return(
        <div className="story-form-container">
            <form>
                {
                    formData.map((field, index)=>
                        <div className="story-form-input-container" key={index}>
                            <label>{field.lable}</label>
                            <input type={field.input_type} style={field.style}
                            name={field.name} 
                            value={field.value || ""} 
                            onChange={handleChange}
                             />
                        </div>
                    )
                }
                
            </form>
            <SubmitBotton button_name ="Submit" click={handleSubmit}/>
        </div>
    )
}