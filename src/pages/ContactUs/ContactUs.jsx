import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ps5r4zs",
        "template_dgp6kfs",
        form.current,
        "z4bXv3BHIscReqijv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast("Your message has been sent!");
  };
  return (
    <Container className="mt-5 pt-5 w-50 pb-5">
      <Form ref={form} onSubmit={sendEmailHandler} className="pb-5">
        <h2 className="text-center">Contact Us</h2>
        <p className="text-center">
          Send us Email through our webmail. It is fully functional. Let us know
          your feedback about our services.
        </p>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Subject" name="subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            style={{ height: "150px" }}
            as="textarea"
            type="text"
            placeholder="message"
            name="message"
            required
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "rgb(70 129 104)" }}
          className="d-block mx-auto border-0"
          type="submit"
          required
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
