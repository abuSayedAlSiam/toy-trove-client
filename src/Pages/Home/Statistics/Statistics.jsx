import React from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div className="pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-3xl">
          Igniting the joy of play with over 6 new customers embracing the magic of Toy Trove every minute.
          </h2>
          <p className="mt-3 text-sm text-gray-500 sm:mt-4">
          Embark on an adventure through our enchanting toy trove, where imagination knows no bounds. Delight in the vast array of playtime wonders for children of all ages, and join our community of satisfied customers, discovering the sheer joy that awaits on our trusted website
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3 bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Genuine Toys
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight">
                    <CountUp start={50} end={100} duration={2} separator="," />%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Sellers
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight">
                    <CountUp start={15} end={350} duration={3} separator="," />+
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Happy Customers
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight">
                    <CountUp start={250} end={8500} duration={10} separator="," />+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
