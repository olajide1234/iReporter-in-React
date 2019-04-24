import React from 'react';
import ImageAndTextBelow from '../components/imageAndTextBelow/imageAndTextbelow';
import * as componentData from '../store/componentData';
import BoldHeader from '../components/boldHeader/boldHeader';
import SignUp from '../components/buttons/signUp';

const RenderThreeColumImageAndText = () => componentData.imageAndTextBelowData.map(
  imageAndTextBelowData => (
    <div className="motivation_box">
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
    <section className="introduction">
      <div className="container">
        <BoldHeader
          textHeader={componentData.homepageHeader.header}
          textBody={componentData.homepageHeader.paragraph}
        />
        <SignUp buttonText="SIGN UP" link="/sign_up" className="introduction_buttons introduction_buttons--signup" />
      </div>
    </section>
    <section className="motivation">
      <div className="container">
        <RenderThreeColumImageAndText />
      </div>
    </section>
  </div>
);

export default HomePage;
