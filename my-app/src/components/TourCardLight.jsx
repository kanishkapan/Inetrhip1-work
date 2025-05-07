import React from 'react';

const tours = [
  {
    title: 'Senso-ji Temple & Nakamise Shopping Street Senso-ji',
    time: '8:15 am Morning',
    duration: '3 hours',
    pickup: 'From Hotel',
    image: '/images/sensoji.jpg',
  },
  {
    title: 'Tokyo Sky Tree',
    time: '1:00 pm Afternoon',
    duration: '3 hours',
    pickup: 'From Nakamise Street',
    image: '/images/skytree.jpg',
  },
  {
    title: 'Kimono Wearing',
    time: 'Anytime before 8:00pm',
    duration: '1-2 hours',
    pickup: 'From Hotel',
    image: '/images/kimono.jpg',
  },
];

const TourCardLight = () => {
  return (
    <div className="bg-white px-4 pb-6 pt-2 text-black w-full">
      <h2 className="text-xl font-semibold mb-4">Activities</h2>
      <div className="flex flex-col gap-4">
        {tours.map((tour, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden border shadow-sm ${
              index === 0 || index === tours.length - 1
                ? 'border-yellow-500'
                : 'border-gray-200'
            } bg-white`}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-[15px] leading-tight mb-2">
                {tour.title}
              </h3>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Timing:</span>{' '}
                {tour.time}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Duration:</span>{' '}
                {tour.duration}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-black">Pick up:</span>{' '}
                {tour.pickup}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCardLight;
