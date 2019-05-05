import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DashboardHeader = (props) => {
  const { records, status, type } = props;

  const filteredRecords = records.filter(
    record => record.status === status && record.type === type
  );

  return (
    <div className=" motivation_box_profile motivation_box_profile_summary_inner">
      <div className="motivation_box_profile_header motivation_box_profile_card_header_summary motivation_box_profile_header--summary">
        <p>{status}</p>
      </div>
      <div>
        <h2 className="motivation_box_profile_text--successful">
          {filteredRecords.length}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  records: state.recordsReducer.records
});

DashboardHeader.propTypes = {
  records: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(DashboardHeader);
