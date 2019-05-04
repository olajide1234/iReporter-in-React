import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CardDeck, Button } from 'react-bootstrap';
import FullRecord from '../components/fullRecord/fullRecord';
import NavLinkHeader from '../components/NavLinkHeader';
import DashboardProfile from '../components/DashboardProfile';
import DashboardHeader from '../components/DashboardHeader';
import { getRecord } from '../actions/actions';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


const SingleRecord = (props) => {
  const { record, match: { params: { id } } } = props;

  useEffect(() => {
    props.getRecord(id);
  }, [record.comment, record.location]);

  return (
    <div>
      <Header props={props} />
      <NavLinkHeader title="/ SINGLE RECORD" />
      <section className="introduction introduction_create-record introduction_create-record_record-page">
        <div className="container">
          <div className="motivation_box_profile motivation_box_profile_details motivation_box_profile_details_outer">
            <DashboardProfile />
            <Button variant="success" size="lg" block className="mt-5" onClick={() => { props.history.push('/create_record'); }}> Create record </Button>
          </div>
          <div className="motivation_box_profile_summary">
            <h3 className="motivation_box_profile_summary_divheader"> Red-flag records</h3>
            <CardDeck>
              <DashboardHeader type="red-flag" status="resolved" />
              <DashboardHeader type="red-flag" status="under-investigation" />
              <DashboardHeader type="red-flag" status="rejected" />
            </CardDeck>
          </div>
          <div className="motivation_box_profile_summary motivation_box_profile_summary--bottom">
            <h3 className="motivation_box_profile_summary_divheader motivation_box_profile_summary_divheader--intervention">
              Intervention records
            </h3>
            <CardDeck>
              <DashboardHeader type="intervention" status="resolved" />
              <DashboardHeader type="intervention" status="under-investigation" />
              <DashboardHeader type="intervention" status="rejected" />
            </CardDeck>
          </div>
        </div>
      </section>
      <section className="motivation motivation_record">
        <div className="container">
          <div className="container motivation_record_list motivation_record_list_view-record">
            <FullRecord record={{ ...record }} onEdit={() => props.getRecord(id)} props={props} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  record: state.recordsReducer.record
});

SingleRecord.propTypes = {
  record: PropTypes.object.isRequired,
  getRecord: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getRecord })(SingleRecord);
