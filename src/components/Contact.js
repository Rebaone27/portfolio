import contact from "../assets/images/contact.jpg";
import {Container} from "react-bootstrap";


function Contact() {
    const myStyle={
        backgroundImage: `url(${contact})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
        <div style={myStyle}>
            <Container >
                <div className="row">
                    <div className="col-sm">
                        <section>
                            <h1 className="mt-5 my-3 heading" style={{textAlign:"center"}}>Get In Touch</h1>

                            <p className="mt-5">
                                Now that you know a bit about me, surely you have some advice,
                                opportunity, mentorship or anything really. Slide in the DM's.
                            </p>

                            <div className="mt-5">
                                <a rel="noreferrer" href="tel:0814881194">
                                    <i className="fa fa-phone"></i> 0814881194
                                </a>
                            </div>

                            <div className="mt-4">
                                <a rel="noreferrer" href="mailto:moipolairebaone@gmail.com">
                                    <i className="fa fa-envelope"></i> moipolairebaone@gmail.com
                                </a>
                            </div>

                            <div className="mt-4">
                                <a rel="noreferrer" href="https://za.linkedin.com/in/Rebaone-moipolai" target="_blank">
                                    <i className="fa fa-linkedin"></i> Rebaone Moipolai
                                </a>
                            </div>

                            <div className="mt-4">
                                <a rel="noreferrer" href="https://github.com/Rebaone27" target="_blank"><
                                    i className="fa fa-github"></i> My Git
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;