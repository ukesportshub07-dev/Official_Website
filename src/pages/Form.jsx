
import React from 'react';
import { Helmet } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Formscreen from '../components/Formscreen';

function Form() {
  return (
    <>
      <Helmet>
        <title>Uk Esports Hub | Event Registration</title>

        <meta
          name="description"
          content="Register now for Uttarakhand Esports Hub tournaments and events. Fill out the official registration form for BGMI, Valorant, Free Fire, and upcoming esports competitions."
        />

        <meta
          name="keywords"
          content="uttarakhand esports registration, uk esports form, free fire registration uttarakhand, valorant registration dehradun, esports registration form"
        />
      </Helmet>

      <Navbar />
      <Formscreen />
      <Footer />
    </>
  );
}

export default Form;
