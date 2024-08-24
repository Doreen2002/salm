export default function StoryForm()
{
    const formData = [
        {"lable":"Enter Title", "input_type":"text", "width":"20px", "height":"300px"},
        {"lable":"Write your story", "input_type":"text", "width":"20px", "height":"30000px"},

    ]
    return(
        <div>
            <form>
                {
                    formData.map((field, index)=>
                        <div>
                            <label>{field.lable}</label>
                            <input type={field.input_type} />
                        </div>
                    )
                }
            </form>
        </div>
    )
}