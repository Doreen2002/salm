
import { Fragment } from "react"
import MentalImage from "../assets/Mental health-bro.png"
import Header from "../components/header.js"
import StoryForm  from "../components/story_form.js"
export default function Homepage()
{
    return(
        <Fragment>
            <Header/>
            <div className="home-content-container-one">

                <div className="home-page-descp-container">
                    <div className="home-web-app-title">Welcome to Salm: Your Safe Space for Mental Health Journeys</div>
                <div className="home-web-app-descp">
                Whether you’re seeking encouragement or ready to inspire others, Umoyo is the place where every story matters. Join us in creating a supportive community for those battling mental health challenges
                    </div>
                    </div>
                <div className="home-mental-image"><img src={MentalImage}/></div>
            </div>
            <div className="home-content-container-two">
                <div className="home-share-your-story">Share Your Story</div>
                <hr></hr>
                <StoryForm/>
            </div>
            
        </Fragment>
        
    )
}