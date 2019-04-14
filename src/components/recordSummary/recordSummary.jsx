import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const RecordSummary = props => props.records.map(data => (
  <Link key={data.id} to={`/single/${data.id}`}>
    <div className="motivation_box_profile motivation_box_profile_record">
      <div className={`motivation_box_profile_header motivation_box_profile_card_header motivation_box_profile_header--${data.status}`}>
        <p className="motivation_box_card--status">{data.dateofincident}</p>
      </div>
      <div className="motivation_box_card--header--title">
        <h3 className="motivation_box_card--header">{data.title}</h3>
      </div>
      <div className="motivation_box_profile_body">
        <p className="motivation_box_card--text motivation_box_card--cardtext">
          {data.comment}
        </p>
      </div>
      <div className="motivation_box_card_tagholder">
        <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
          {data.type}
          {' '}
record
        </button>
        <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info introduction_buttons--redflag--recordcard--{data[0].type}">
          {data.status}
        </button>
        <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
          {data.images.length}
          {' '}
Images
        </button>
        <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
          {data.videos.length}
          {' '}
Videos
        </button>
        <button className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--recordcard introduction_buttons--redflag--recordcard--info">
          {data.location.length}
          {' '}
Place
        </button>
      </div>
    </div>
  </Link>
));

const mapStateToProps = state => ({
  records: state.records
});
export default connect(mapStateToProps)(RecordSummary);
