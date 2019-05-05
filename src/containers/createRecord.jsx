import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoldHeader from '../components/boldHeader/boldHeader';
import Form from '../components/form/form';
import * as componentData from '../store/componentData';
import NavLinkHeader from '../components/NavLinkHeader';
import { addRecord } from '../actions/actions';
import Alerts from '../components/Alerts';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


const CreateRecord = (props) => {
  const [alertMessage, setAlertMessage] = useState({
    message: '',
    visibility: false
  });

  return (
    <div>
      <Header props={props} />
      <NavLinkHeader title="/ CREATE RECORD" />
      <Alerts
        message={alertMessage.message}
        show={alertMessage.visibility}
        closeAlertModal={() => setAlertMessage({ message: '', visibility: false })}
        variant="primary"
      />
      <section className="introduction">
        <div className="container">
          <div className="introduction_signup_and_signin">
            <BoldHeader
              textHeader={componentData.createRecordPageHeader.header}
              textBody={componentData.createRecordPageHeader.paragraph}
            />
          </div>

          <div className="container_form container_form_red-flag container_form_red-flag--redflagform">
            <Form
              onSubmit={record => props.addRecord(record).then((res) => {
                if (res.type === 'error') { setAlertMessage({ message: `${res.message}`, visibility: true }); } else {
                  props.history.push(`/single/${res.data.id}`);
                }
              })}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const mapDispatchProps = {
  addRecord
};

CreateRecord.propTypes = {
  addRecord: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(() => ({}), mapDispatchProps)(CreateRecord);
