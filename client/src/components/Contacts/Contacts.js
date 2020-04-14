import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import * as actions from '../../store/actions/';
import "./Contacts.css";
import contactsDog from '../../assets/contacts-dog.png';

class Contacts extends Component {
    onSubmit = values => {
        this.props.onMessageSent(values);
    }

    render() {
        return (
            <React.Fragment>
                <div className="question">
                    <p className="title">
                        You have a question ?
                    </p>
                    <p className="subtitle">
                        Do not hesitate to contact us via this form.
                    </p>
                </div>
                <section className="section-block">
                    <div className="section-content">
                        <img src={contactsDog} alt="contacts-dog" />
                        <div className="form-block">
                            <Form
                                onSubmit={this.onSubmit}
                                validate={values => {
                                    const errors = {}
                                    if (!values.name) {
                                        errors.name = 'Required'
                                    }
                                    if (!values.surname) {
                                        errors.surname = 'Required'
                                    }
                                    if (!values.email) {
                                        errors.email = 'Required'
                                    }
                                    if (!values.phone) {
                                        errors.phone = 'Required'
                                    }
                                    if (!values.subject) {
                                        errors.subject = 'Required'
                                    }
                                    if (!values.message) {
                                        errors.message = 'Required'
                                    }                                    
                                    return errors
                            }}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="name">
                                        {({ input, meta }) => (
                                            <div className={`input-block ${meta.error && meta.touched ? 'input-error' : ''}`}>
                                                <label>Name *</label>
                                                <input {...input} type="text" />
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="surname">
                                        {({ input, meta }) => (
                                            <div className={`input-block ${meta.error && meta.touched ? 'input-error' : ''}`}>
                                                <label>Surname *</label>
                                                <input {...input} type="text" />
                                            </div>
                                        )}
                                    </Field>
                                    
                                    <div className="multi-input-row">
                                        <Field name="email">
                                            {({ input, meta }) => (
                                                <div className={`input-block ${meta.error && meta.touched ? 'input-error' : ''}`}>
                                                <label>Email *</label>
                                                    <input {...input} type="text" />
                                                </div>
                                            )}
                                        </Field>
                                        <Field name="phone">
                                            {({ input, meta }) => (
                                                <div className={`input-block ${meta.error && meta.touched ? 'input-error' : ''}`}>
                                                <label>Phone *</label>
                                                    <input {...input} type="text" />
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <Field name="subject">
                                        {({ input, meta }) => (
                                            <div className={`input-block ${meta.error && meta.touched ? 'input-error' : ''}`}>
                                                <label>Subject *</label>
                                                <input {...input} type="text" />
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="message">
                                    {({ input, meta }) => (
                                        <div className={`input-block ${meta.error && meta.touched ? 'input-error' : ''}`}>
                                            <label>Message *</label>
                                            <textarea rows="4" {...input}>
                                            </textarea>
                                        </div>
                                    )}
                                    </Field>
                                    <button type="submit" disabled={this.props.sending}>
                                        Submit
                                    </button>                                    
                                </form>
                            )}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        sending: state.sending
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onMessageSent: (messageData) => dispatch(actions.sendMessage(messageData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);