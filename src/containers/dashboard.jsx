import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RecordSummary from '../components/recordSummary/recordSummary';
import NavLinkHeader from '../components/NavLinkHeader';
import DashboardProfile from '../components/DashboardProfile';
import DashboardHeader from '../components/DashboardHeader';
import DashboardHeaderIntervention from '../components/DashboardHeaderIntervention';
import { getRecords } from '../actions/actions';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Dashboard = (props) => {
  useEffect(() => {
    props.getRecords();
  }, []);

  return (
    <div>
      <Header props={props} />
      <NavLinkHeader />
      <section className="introduction introduction_create-record introduction_create-record_record-page">
        <div className="container">
          <div className="motivation_box_profile motivation_box_profile_details motivation_box_profile_details_outer">
            <DashboardProfile />
            <Button variant="success" size="lg" block className="mt-5" onClick={() => { props.history.push('/create_record'); }}> Create record </Button>
          </div>
          <div className="motivation_box_profile_summary">
            <h3 className="motivation_box_profile_summary_divheader"> Red-flag records</h3>
            <DashboardHeader />
          </div>
          <div className="motivation_box_profile_summary motivation_box_profile_summary--bottom">
            <h3 className="motivation_box_profile_summary_divheader motivation_box_profile_summary_divheader--intervention">
              Intervention records
            </h3>
            <DashboardHeaderIntervention />
          </div>
        </div>
      </section>
      <section className="motivation motivation_record">
        <div className="container">
          <div className="container motivation_record_list motivation_record_list_view-record">
            <RecordSummary records={props.records} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  records: state.recordsReducer.records
});

Dashboard.propTypes = {
  records: PropTypes.array.isRequired,
  getRecords: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, { getRecords })(Dashboard);
