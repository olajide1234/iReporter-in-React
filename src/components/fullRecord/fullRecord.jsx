import React from 'react';
import PropTypes from 'prop-types';

const FullRecord = (props) => {
  const { record } = props;

  return (
    <div className="motivation_box_profile motivation_box_profile_record motivation_box_profile_record--single_record">
      <div className={`motivation_box_profile_header motivation_box_profile_card_header motivation_box_profile_header--${record.status}`}>
        <p className="motivation_box_card--status">{record.dateofincident}</p>
      </div>
      <div className="motivation_box_card--header--title motivation_box_card--header--title--single_record">
        <h2 className="motivation_box_card--header motivation_box_card--header--singlerecord">
          {record.title}
        </h2>
      </div>
      <div className="motivation_box_profile_body motivation_box_profile_body_single_record">
        <div className="single_record_buttons">
          <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
            {record.type}
          </button>
          <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--statusisresolved introduction_buttons--redflag--recordcard--info">
            {record.status}
          </button>
          <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
            {record.images}
            {' '}
            Images
          </button>
          <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
            {record.videos}
            {' '}
            Videos
          </button>
          <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
            {record.location}
            {' '}
            Place
          </button>
        </div>
        <div className="motivation_box_card--text">{record.comment}</div>

        <div className="motivation_box_card--images">
          <div className="motivation_box_card--innerimages">
            <img
              src={`${record.images}`}
              alt="Police corruption"
              width="300"
              height="200"
            />
          </div>

          <div className="motivation_box_card--innerimages">
            <img
              src="./img/corruption2.jpg"
              alt="Buhari Sketch"
              width="300"
              height="200"
            />
          </div>

          <div className="motivation_box_card--innerimages">
            <img
              src="./img/corruption3.jpg"
              alt="Buhari cartoon"
              width="300"
              height="200"
            />
          </div>
        </div>

        <div className="motivation_box_card--video">
          <div className="motivation_box_card--innervideo">
            <iframe
              title="Incident video"
              width="280"
              height="157.5"
              src="https://www.youtube.com/embed/arodYGXdzlc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="motivation_box_card--innervideo">
            <iframe
              title="Incident video"
              width="280"
              height="157.5"
              src="https://www.youtube.com/embed/_e92yME-PHY"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};


FullRecord.propTypes = {
  record: PropTypes.object.isRequired,
};

export default FullRecord;
