import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Footer } from './Footer/Footer';
import StaticHeader from './STATICHeader/StacticHeader';
const data = `Welcome to our website! At our barber shop, we take your privacy seriously and are committed to protecting your personal information. This privacy policy outlines the types of information we collect, how we use it, and how we protect it.

##### 1. Information We Collect
When you use our website, we may collect the following types of information:
- Personal information, such as your name, email address, phone number, and payment information
- Non-personal information, such as your IP address, browser type, and operating system

##### 2. How We Use Your Information
We use your information to:
- Provide our services to you
- Process payments and fulfill orders
- Communicate with you about your appointments and our services
- Improve our website and services
- Comply with legal requirements

##### 3. How We Protect Your Information
We use a variety of security measures to protect your personal information, including SSL encryption and firewalls. We also limit access to your information to authorized personnel only.

##### 4. Disclosure of Information to Third Parties
We do not sell, rent, or share your personal information with third parties, except as required by law or as necessary to provide our services to you. We may share your information with third-party service providers who assist us with processing payments, delivering orders, or improving our website.

##### 5. Cookies
We may use cookies on our website to improve your user experience and collect non-personal information. You may disable cookies in your browser settings, but this may affect the functionality of our website.

##### 6. Children's Privacy
Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children.

##### 7. Changes to This Privacy Policy
We may update this privacy policy from time to time. Any changes will be posted on our website with the updated policy effective immediately upon posting.

##### 8. Contact Us
If you have any questions or concerns about our privacy policy, please contact us at RitishRahul87@gmail.com.

Thank you for choosing our barber shop!`;
const PrivacyPolicies = () => {
  return (
    <div>
      <StaticHeader />
      <div style={{ margin: '4rem auto', maxWidth: '1000px', padding: '1rem' }}>
        <h1>Privacy Policy</h1>
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>{' '}
      <Footer />
    </div>
  );
};

export default PrivacyPolicies;
