
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TermsandConditions from '../components/TermsandConditions';

function TermsandCondition() {
  return (
    <>
      <Helmet>
        <title>Uttarakhand Esports Hub | Terms & Conditions</title>

        <meta
          name="description"
          content="Read the official Terms and Conditions for participating in Uttarakhand Esports Hub tournaments, events, and esports competitions. Understand eligibility, rules, and guidelines."
        />

        <meta
          name="keywords"
          content="uttarakhand esports terms, uk esports rules, uk esports terms and conditions, tournament eligibility uk esports,uk esports gaming event rules"
        />
      </Helmet>

      <Navbar />
      <TermsandConditions />
      <Footer />
    </>
  );
}

export default TermsandCondition;
