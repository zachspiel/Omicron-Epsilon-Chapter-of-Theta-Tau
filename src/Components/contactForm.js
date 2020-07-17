import React, { Component } from 'react';

export default class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className=" row justify-content-center align-items-center contact-form">
        <div className="col-md-6 col-sm-8">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mwkrwkdd"
            method="POST"
          >
          <h1 className="text-center">Contact Us</h1>
            <label className="col-form-label col-form-label-lg">Name:</label>
            <input type="text" name="name" className="form-control w-100"/>
            <label className="col-form-label col-form-label-lg">Email:</label>
            <input type="text" name="email" className="form-control w-100"/>
            <label  className="col-form-label col-form-label-lg">Message:</label>
            <br />
            <textarea name="message" className="form-control w-100" rows="4"/>
            <br />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-primary">Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}