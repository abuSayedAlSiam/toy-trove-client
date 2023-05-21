import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const Blogs = () => {
    UseTitle('Blogs')
    const allData = [
        {
            question: " What is an access token and refresh token? How do they work and where should we store them on the client-side?",
            answer: "An access token is a credential used to access protected resources, while a refresh token is a longer-lived credential used to obtain new access tokens without reauthentication. Access tokens are stored securely on the client-side, often in session storage or cookies, while refresh tokens are stored in a more secure manner such as HTTP-only cookies or OS-specific secure storage" 
         },
         {
            question: "Compare SQL and NoSQL databases?",
            answer: " SQL databases are relational databases with a predefined schema and use SQL for data manipulation, while NoSQL databases are non-relational, schema-less databases that offer high scalability and flexibility but sacrifice some ACID properties for performance." 
         },
         {
            question: "What is express js? What is Nest JS ?",
            answer: " Express.js is a popular web application framework for Node.js, providing a minimal and flexible set of features to build web applications and APIs easily. Nest JS is a framework built on top of Node.js that offers a structured and scalable approach to building server-side applications, focusing on modularity, dependency injection, and TypeScript support." 
         },
         {
            question: "What is MongoDB aggregate and how does it work ?",
            answer: "MongoDB aggregate is a feature that allows performing advanced data processing operations, including filtering, grouping, and transforming data in a MongoDB database. It works by using a pipeline of stages that define the sequence of operations to be performed on the data, enabling powerful and flexible data aggregation capabilities." 
         },
    ]
    return (

        <section className="px-4 md:px-20">
      <div className="mx-auto max-w-7xl py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h1 className="text-2xl font-bold text-black">Frequently Asked Questions</h1>
            <p className="mt-6 text-sm text-gray-500">
            Welcome to Toy Trove! Here are some common questions we receive about our curated collection of quality toys:
            </p>
          </div>
          <div className=" mt-10 lg:col-span-7 lg:mt-0">
            <dl>
              {
              allData.map((data, i) => (
                <div key={i} className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                   {data?.question}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {data?.answer}
                  </dd>
                </div>
              ))
              }
            </dl>
          </div>
        </div>
      </div>
    </section>

 
        
    );
};

export default Blogs;