import React from 'react';

const Blogs = () => {
    return (
        <div  className='my-12 bg-primary mx-12 rounded p-8'>
        <div>
            <h3 className='text-3xl font-semibold p-3 text-white'>Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <p className='text-xl ms-4 text-white'>Ans: An access token is a credential used to access protected resources, while a refresh token is a longer-lived credential used to obtain new access tokens without reauthentication. Access tokens are stored securely on the client-side, often in session storage or cookies, while refresh tokens are stored in a more secure manner such as HTTP-only cookies or OS-specific secure storage.</p>
        </div>
        <div>
            <h3 className='text-3xl font-semibold p-3 text-white'>Q: Compare SQL and NoSQL databases?</h3>
            <p className='text-xl ms-4 text-white'>Ans:
            SQL databases are relational databases with a predefined schema and use SQL for data manipulation, while NoSQL databases are non-relational, schema-less databases that offer high scalability and flexibility but sacrifice some ACID properties for performance.</p>
        </div>
        <div>
            <h3 className='text-3xl font-semibold p-3 text-white'>Q: What is express js? What is Nest JS ?</h3>
            <p className='text-xl ms-4 text-white'>Ans: Express.js is a popular web application framework for Node.js, providing a minimal and flexible set of features to build web applications and APIs easily. Nest JS is a framework built on top of Node.js that offers a structured and scalable approach to building server-side applications, focusing on modularity, dependency injection, and TypeScript support.</p>
        </div>
        <div>
            <h3 className='text-3xl font-semibold p-3 text-white'>Q: What is MongoDB aggregate and how does it work ?</h3>
            <p className='text-xl ms-4 text-white'>Ans: MongoDB aggregate is a feature that allows performing advanced data processing operations, including filtering, grouping, and transforming data in a MongoDB database. It works by using a pipeline of stages that define the sequence of operations to be performed on the data, enabling powerful and flexible data aggregation capabilities.</p>
        </div>
    </div>
        
    );
};

export default Blogs;