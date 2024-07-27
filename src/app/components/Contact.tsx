'use cilent';
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <div id='contactUs' className="bg-gray-900 text-gray-100 min-h-screen">
            <div className="container mx-auto py-10 px-4">
                <motion.h1
                    className="text-4xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Contact Us
                </motion.h1>
                <div className="flex flex-col md:flex-row md:space-x-12 pt-10">
                    <div className="flex flex-1 w-full justify-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14686.735883097177!2d72.5051384!3d23.0353731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3acb9b5dad%3A0x5fb8f309d7bb2c9b!2sNew%20Marg%20Immigration%20Services!5e0!3m2!1sen!2sin!4v1722066466038!5m2!1sen!2sin" width="600" className="mr-5" height="450" loading="lazy"></iframe>
                    </div>
                    <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-semibold">Office Details</h2>
                        <p>
                            <strong>Address:</strong>&nbsp; 717, Shilp epitome, Rajpath-Rangoli Road, opp Nayara Petrol pump, Thaltej, Bodakdev, Ahmedabad, Gujarat 380054
                        </p>
                        <p>
                            <strong>Contact Number:</strong> <a target='_blanck' href="tel:+918200185968" className="text-blue-400 hover:text-blue-300">&nbsp; +91-8200185968</a>
                        </p>
                        <p>
                            <strong>WhatsApp:</strong>&nbsp;
                            <a target='_blanck' href="https://wa.me/8200185968" className="text-blue-400 hover:text-blue-300">+91-8200185968</a>
                        </p>
                        <p>
                            <strong>Email:</strong>&nbsp; <a target='_blanck' href="mailto:newmargimmigration.ahm@gmail.com" className="text-blue-400 hover:text-blue-300">newmargimmigration.ahm@gmail.com</a>
                        </p>
                        <p>
                            <strong>Business Hours:</strong>&nbsp; Mon-Sat: 11am - 6pm
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
