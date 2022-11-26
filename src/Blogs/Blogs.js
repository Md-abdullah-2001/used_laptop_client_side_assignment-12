import React from "react";

const Blogs = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold">
        Here is some important questions with answer
      </h1>
      <div className="max-w-4xl mx-auto mt-20">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. There are four
              main types of state you need to properly manage in your React
              apps: <strong>1/Local state</strong> <br />
              <strong>2/Global state</strong> <br />{" "}
              <strong>3/Server state</strong> <br />{" "}
              <strong>4/URL state</strong>
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div
          tabIndex={4}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
