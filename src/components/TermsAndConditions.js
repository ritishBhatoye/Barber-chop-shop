import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Footer } from './Footer/Footer';
import StaticHeader from './STATICHeader/StacticHeader';

const data = `Welcome to our website! Before using any of our services, please read these terms and conditions carefully. By accessing and using our website, you agree to comply with and be bound by these terms.

##### Use of the Website
You must be at least 18 years old to use our website or have the permission of a parent or legal guardian. You are responsible for ensuring that all information provided to us is accurate, current, and complete.

##### Services
We offer a variety of services related to barbering, including haircuts, beard trims, and shaves. By booking an appointment through our website, you agree to pay the full amount of the service, unless you cancel or reschedule at least 24 hours in advance.

##### Payment
All payments must be made through our website using a valid credit or debit card. By making a payment, you authorize us to charge your card for the amount due.

##### Cancellation and Refund Policy
If you need to cancel or reschedule an appointment, you must do so at least 24 hours in advance. Failure to do so may result in a cancellation fee. We do not offer refunds for services rendered.

##### Liability
We are not liable for any damages or injuries that may occur as a result of using our services. You agree to hold us harmless and indemnify us for any losses, expenses, or damages that may arise from your use of our website or services.

##### Intellectual Property
All content on our website, including text, images, and logos, is protected by copyright and other intellectual property laws. You may not use our content for any commercial or non-commercial purpose without our prior written consent.

##### Privacy Policy
We take your privacy seriously and will only use your personal information in accordance with our privacy policy. By using our website, you agree to the terms of our privacy policy.

##### Governing Law
These terms and conditions shall be governed by and construed in accordance with the laws of the United States of America. Any disputes arising out of or relating to these terms and conditions shall be resolved in the state or federal courts located in the United States.

Thank you for using our website!`;
const TermsAndConditions = () => {
  return (
    <div>
      <StaticHeader />
      <div style={{ margin: '4rem auto', maxWidth: '1000px', padding: '1rem' }}>
        <h1>Terms & Conditions</h1>
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
