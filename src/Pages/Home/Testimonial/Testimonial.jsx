import React from 'react';
import Marquee from 'react-fast-marquee';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      quote: "Toy Trove has been a game-changer for my kids! The toys are not only fun but also educational. They absolutely love it!",
      photo: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg",
    },
    {
      id: 2,
      name: "Michael Thompson",
      quote: "I highly recommend Toy Trove to all parents out there. The quality of the toys and the excellent customer service exceeded my expectations.",
      photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Sophia Davis",
      quote: "As an educator, I appreciate Toy Trove's commitment to providing toys that promote learning and creativity. It's a fantastic resource for parents and teachers alike.",
      photo: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Alexandra Rodriguez",
      quote: "Toy Trove offers an amazing selection of toys for all ages. My children are always excited to explore the new additions. The customer support is exceptional too!",
      photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      name: "Olivia",
      quote: "I've been a loyal customer of Toy Trove for years. Their toys are durable and of high quality. I trust their brand and recommend it to everyone.",
      photo: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-2 text-gray-600">Read the testimonials from our happy customers.</p>
        </div>
        <div className="mt-10">
          <Marquee direction="left" 
          speed={30}
          pauseOnClick={true}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-md shadow-md p-6 mx-4">
                <p className="text-gray-700 w-80 h-32">{testimonial.quote}</p>
                <div className="flex items-center justify-center mt-4">
                  <div className="flex-shrink-0">
                    <img className="w-12 h-12 rounded-full" src={testimonial.photo} alt={testimonial.name} />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
