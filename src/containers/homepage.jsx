import React from 'react';
import { Link } from 'react-router-dom';
import ImageAndTextBelow from '../components/imageAndTextBelow/imageAndTextbelow';
import * as componentData from '../store/componentData';
import BoldHeader from '../components/boldHeader/boldHeader';
import SignUp from '../components/buttons/signUp';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const RenderThreeColumImageAndText = () => componentData.imageAndTextBelowData.map(
  imageAndTextBelowData => (
    <div className="motivation_box" key={imageAndTextBelowData.headerText}>
      <ImageAndTextBelow
        image={imageAndTextBelowData.image}
        header={imageAndTextBelowData.headerText}
        bottom={imageAndTextBelowData.bottomText}
      />
    </div>
  )
);

const HomePage = () => (
  <div>
    <Header />
    <section className="introduction">
      <div className="container">
        <BoldHeader
          textHeader={componentData.homepageHeader.header}
          textBody={componentData.homepageHeader.paragraph}
        />
        <Link to="/sign_up">
          <SignUp buttonText="SIGN UP" className="introduction_buttons introduction_buttons--signup" />
        </Link>
      </div>
    </section>
    <section className="motivation">
      <div className="container">
        <RenderThreeColumImageAndText />
      </div>
    </section>
    <Footer className="bottom" />
  </div>
);

export default HomePage;
