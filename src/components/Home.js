import '../App.css';
import home from '../assets/images/home.jpg'
import {Container} from "react-bootstrap";

function Home() {
    const myStyle={
        backgroundImage: `url(${home})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div style={myStyle}>
            <Container className={"text-alignment"}>
                <div className="row">
                    <div className="col-sm-3 mt-5">
                        <img
                            src="https://media.licdn.com/dms/image/C5603AQGa50pXcFVAOg/profile-displayphoto-shrink_200_200/0/1638773043491?e=1679529600&v=beta&t=3tqu4rE6jFFFwe1m05dq7SiK5nYTUtqCYCj8GW1zRrU"
                            className="img-responsive img-border" alt="Image"/>
                    </div>
                    <div className="col-sm-9">
                        <section>
                            <p className="text-color mt-5">Hi, my name is</p>
                            <h1> Rebaone Moipolai.</h1>

                            <h1 className="text-color mb-5">
                                I take space.
                            </h1>

                            <p className="mt5">
                                I hold a Bachelor of Social Sciences, majoring in Industrial Psychology and psychology. I<br/>
                                know it has nothing to do with Tech,however my first experience in a start-up paved the way;<br/>
                                surrounded by creative innovative ideas. I was tasked with quality assurance, manual testing,<br/>
                                and that's where i took a leap of faith to teach myself how to code, this extended to joining<br/>
                                HyperionDev bootcamp with the help of SovTech.
                            </p>
                            <p>
                                I would love to be a developer at SovTech because they paid my fees
                                <i className="fa fa-smile-o"></i>. Jokes aside; SovTech<br/>
                                saw my tenacity and my eager to learn. The graduate program offers a platform of learning, guidance<br/>
                                and an environment where mistakes can be a learning opportunity, with the experience that they make the best<br/>
                                developers.<br/>
                                SovTech is a leading software company in A Africa, delivering world class design builds,<br/>
                                deployments and web applications. This is my testimony, from zero experience to taking<br/>
                                space and delivering world class applications; this is only possible if I am part of the<br/>
                                best team, The SovTech world class team.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;
