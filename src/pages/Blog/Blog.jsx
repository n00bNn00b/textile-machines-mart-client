import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-5 mb-5 pb-5">
      <h2 className="pt-5 text-center">
        Difference between JavaScript and NodeJS
      </h2>
      <p>
        JavaScript is a programming language that needs to write script with
        which websites become interactive. JavaScript can run only in browsers
        which used in client side. Devopers can add HTML through JavaScript and
        it is needed to work with DOM. JavaScript can run in any brwser engine
        like V8, JS Core, Spidermonkey etc. It has many frameworks and libraries
        such as ReactJS, AngularJS, VueJS, RamdaJS, TypedJS etc.
        <br />
        On the other hand, NodeJS is a JavaScript runtime environment which can
        run JavaScript outside of the browser. It is mostly used to write Server
        Side Logics. It is not compatible with HTML tags. Some of the NodeJS
        modules are ExpressJS, Lodash etc. NodeJS is written in C, C++ and
        JavaScript.
      </p>
      <hr />
      <h2 className="text-center">Differences between SQL and NOSQL</h2>
      <p>
        SQL stands for Strctured Query Language. It is Relational Database
        Management System which is called RDMS in short. These kind of databases
        are not suited for hierarchial data storage. These are best suited for
        complex queries. SQL is vertically scalable and follows ACID property.
        <br />
        NOSQL stands for No Structured Query Language which is non-relational or
        distributed database system. NOSQL has dynamic schema. These are best
        suited for hierarchy data storage. But these kind of databases are not
        as much good for complex queries as SQL. NOSQL is horizontally scalable
        and follows CAP(Consistency, availability, partition tolerance.)
      </p>
      <hr />
      <h2 className="text-center">
        When should you use NodeJS and when should you use MongoDB?{" "}
      </h2>
      <p>
        As we know NodeJS is JavaScript runtime environment, it actually helps
        JavaScript to run outside of server. It is used in server side
        development. So, we should use NodeJS for server side development.
        <br />
        On the other hand, MongoDB is NoSQL database which is document oriented
        and represents data as JSON and it is used for storing data. So, we
        should use MongoDB for storing data in database.
      </p>
    </Container>
  );
};

export default Blog;
