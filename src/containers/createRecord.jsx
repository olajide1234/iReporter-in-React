import React from 'react';
import { connect } from 'react-redux';
import BoldHeader from '../components/boldHeader/boldHeader';
import Form from '../components/form/form';
import * as componentData from '../store/componentData';
import { NavLinkHeader } from '../components/NavLinkHeader';
import { addRecord } from '../actions/actions';

const CreateRecord = props => (
  <div>
    <NavLinkHeader title="/ CREATE RECORD" />
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
              props.history.push(`/single/${res.id}`);
            })}
          />
        </div>
      </div>
    </section>
  </div>
);

const mapDispatchProps = {
  addRecord
};

export default connect(() => ({}), mapDispatchProps)(CreateRecord);
