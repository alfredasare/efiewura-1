import React, {useState} from "react";
import './contact.styles.scss';
import './animate.css';
import Modal from "react-bootstrap/Modal";
import CustomButton from "../../components/custom-button/custom-button.component";

const ContactPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [alert, setAlert] = useState({heading: '', para1: '', para2: '', para3: '', para4: '', para5: '',
        para6: '', para7: '',
    });

    const showModal = (event) => {
        if(event.target.id === 'phone'){
            setAlert({...alert, heading: 'Call Efiewura', para1: '+233 233 233 233', para2: '+233 233 233 234',para3: '+233 233 233 235'});
        }else if(event.target.id === 'location'){
            setAlert({...alert, heading: 'Our Offices are located at', para1: 'Enter street name', para2: 'Add more of the address',para3: 'Final part of the address'});
        }
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className='main-body'>
                <div className='contact-container'>
                    <h1 className='main-header'>Reach EFIEWURA</h1>
                    <div className='line animated slideInLeft'/>
                    <div>
                        <a href="mailto:efiewura18@gmail.com" target="_blank"><i className='fa fa-envelope font-style animated bounceIn'/></a>
                        <i className='fa fa-phone font-style phone animated bounceIn delay-1s' onClick={showModal} id='phone'/>
                        <a href="#"><i className='fa fa-facebook font-style fb animated bounceIn delay-2s'/></a>
                        <a href="#"><i className='fa fa-instagram font-style instagram animated bounceIn delay-3s'/></a>
                        <a href="#"><i className='fa fa-twitter font-style twitter animated bounceIn delay-4s'/></a>
                        <i className='fa fa-map-marker font-style animated bounceIn delay-5s' onClick={showModal} id='location'/>
                    </div>
                    <div className='line second-line animated slideInRight'/>
                    <Modal show={isOpen} onHide={hideModal} size="md"
                           aria-labelledby="contained-modal-title-vcenter"
                           centered>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter" >
                                {alert.heading}
                            </Modal.Title>
                        </Modal.Header>
                    <Modal.Body>
                        <p>
                            {alert.para1}
                        </p>
                        <p>
                            {alert.para2}
                        </p>
                        <p>
                            {alert.para3}
                        </p>
                        <p>
                            {alert.para4}
                        </p>
                        <p>
                            {alert.para5}
                        </p>
                    </Modal.Body>
                        <Modal.Footer>
                            <CustomButton onClick={hideModal}>Close</CustomButton>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
