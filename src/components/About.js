import about from "../assets/images/about.jpg";
import {Container, ProgressBar} from "react-bootstrap";
import '../App.css';

function About() {
    const myStyle={
        backgroundImage: `url(${about})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
        <div style={myStyle}>
            <Container>
                <div className="row">
                    <div className="col-sm">
                        <section>
                            <h1 className="mt-4 my-3 heading">About Me</h1>

                            <p className="mt-3"> An ambitious Software Engineer graduate from HyperionDev,<br/>
                                I like to learn how programmes work behind the scene and solving problems.<br/>
                                If I am not learning how to code, you will probably find me chasing sunsets or visiting<br/>
                                markets to find vintage film cameras.
                            </p>
                        </section>

                        <section>
                            <h3 className="mt-5"><strong>SKILLS</strong></h3>

                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <p>Html & Css</p>
                                    <div className="mt-3">
                                        <ProgressBar variant={"success"} now={60} label={`${60}%`}/>
                                    </div>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <p>Python</p>
                                    <div className="mt-3">
                                        <ProgressBar variant={"success"} now={70} label={`${70}%`}/>
                                    </div>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <p>Java</p>
                                    <div className="mt-3">
                                        <ProgressBar variant={"success"} now={60} label={`${60}%`}/>
                                    </div>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>

                            <div className="row">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <p>SQL</p>
                                    <div className="mt-3">
                                        <ProgressBar variant={"success"} now={60} label={`${60}%`}/>
                                    </div>
                                </div>
                                <div className="col-sm-4"></div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <h3 className="mt-4">Education</h3>

                        <p>I hold a bachelor's degree in Social Sciences majoring in Industrial Psychology and Psychology. I have
                            completed Software Engineering bootcamp at HyperionDev with 99% average score, archiving number one spot
                            in the bootcamp, click the link to view the completion certificate
                            <a rel="noreferrer" href="https://drive.google.com/file/d/1hUaBDg8hdq7VhintM9OvGHZtuo8ITGys/view?usp=share_link"> Bootcamp
                                Certificate</a>.
                            I guess we are now studying the brain
                            of the computer. click the link to check HyperionDev out <a href="https://www.hyperiondev.com">HyperionDev</a>
                        </p>
                    </div>

                    <div className="col-sm-4">
                        <h3 className="mt-4">Projects</h3>
                        <ul className="demo">
                            <li>
                                <a rel="noreferrer" href="https://github.com/Rebaone27/CapstoneFinal" target="_blank">
                                    Task Manager
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="https://github.com/Rebaone27/CapstoneProject4" target="_blank">
                                    Inventory System
                                </a>
                            </li>
                            <li>
                                <a rel="noreferrer" href="https://github.com/Rebaone27/Poised" target="_blank">
                                    Poised
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-4">
                        <h3 className="mt-4">Experience</h3>

                        <p>Experience includes working in the banking sector, assisting clients with various bank products. </p>
                        <p>Experience working in a Tech startup as a QA.
                            Ensuring product quality by manually testing software products and that issues are maintained</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default About;