import StoryForm  from "../components/story_form.js"
export default function Homepage()
{
    const containerTwoContent =[
        {"image": `${process.env.PUBLIC_URL}/assets/Friendship-pana.png`, "text": "Inspire", "style":{"flexDirection":"row-reverse", "marginBottom":"20px"}},
        {"image": `${process.env.PUBLIC_URL}/assets/Friendship-amico.png`, "text": "Encourage", "style":{ "marginBottom":"20px"}},
        {"image": `${process.env.PUBLIC_URL}/assets/Friendship-pana.png`, "text": "Support", "style":{"flexDirection":"row-reverse", "marginBottom":"0px"}},
    ]
    return(
        <>
            <div className="home-content-container-one">

                <div className="home-page-descp-container">
                    <div className="home-web-app-title">Welcome to Salm: Your Safe Space for Mental Health Journeys</div>
                <div className="home-web-app-descp">
                Whether you’re seeking encouragement or ready to inspire others, Salm is the place where every story matters. Join us in creating a supportive community for those battling mental health challenges.
                    </div>
                    </div>
                <div className="home-mental-image"><img alt="image" src={`${process.env.PUBLIC_URL}/assets/Mental health-bro.png`}/></div>
            </div>
            <div className="home-share-your-story">Share Your Story</div>
            <div className="home-content-container-two">
                <div className="home-content-container-img-holder-parent" >
                {containerTwoContent.map((field, index)=>
                     <div   className="home-content-container-img-holder" style={field.style} key={index} >
                    
                     <div><img alt="image" src={field.image}/></div>
                     <div>{field.text}</div>
                 </div>

                )}
                
                </div>
               
                <StoryForm/>
            </div>
          
        </>
        
    )
}