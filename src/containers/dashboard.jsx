import React from 'react';
import RecordSummary from '../components/recordSummary/recordSummary';
import NavLinkHeader from '../components/NavLinkHeader';
import DashboardProfile from '../components/DashboardProfile';
import DashboardHeader from '../components/DashboardHeader';
import SignUp from '../components/buttons/signUp';

const Dashboard = () => (
  <div>
    <NavLinkHeader />
    <section className="introduction introduction_create-record introduction_create-record_record-page">
      <div className="container">
        <div className="motivation_box_profile motivation_box_profile_details motivation_box_profile_details_outer">
          <DashboardProfile />
          <SignUp buttonText="Create record" link="/create_record" className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--createrecord" />
          <SignUp buttonText="View draft" link="/drafts" className="introduction_buttons introduction_buttons--redflag introduction_buttons--redflag--createrecord" />
        </div>
        <div className="motivation_box_profile_summary">
          <h3 className="motivation_box_profile_summary_divheader"> Red-flag records</h3>
          <DashboardHeader type="red-flag" status="resolved" />
          <DashboardHeader type="red-flag" status="under-investigation" />
          <DashboardHeader type="red-flag" status="rejected" />
        </div>
        <div className="motivation_box_profile_summary motivation_box_profile_summary--bottom">
          <h3 className="motivation_box_profile_summary_divheader motivation_box_profile_summary_divheader--intervention">
            Intervention records
          </h3>
          <DashboardHeader type="intervention" status="resolved" />
          <DashboardHeader type="intervention" status="under-investigation" />
          <DashboardHeader type="intervention" status="rejected" />
        </div>
      </div>
    </section>
    <section className="motivation motivation_record">
      <div className="container">
        <div className="container motivation_record_list motivation_record_list_view-record">
          <RecordSummary />
        </div>
      </div>
    </section>
  </div>
);

export default Dashboard;
