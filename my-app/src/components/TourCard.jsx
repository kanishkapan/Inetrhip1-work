import React from 'react';

const tours = [
  {
    title: 'Senso-ji Temple & Nakamise Shopping Street Senso-ji',
    time: '8:15 am Morning',
    duration: '3 hours',
    pickup: 'From Hotel',
    image: '../src/assets/plans1.png',
  },
  {
    title: 'Tokyo Sky Tree',
    time: '1:00 pm Afternoon',
    duration: '3 hours',
    pickup: 'From Nakamise Street',
    image: '../src/assets/plans2.png',
  },
  {
    title: 'Kimono Wearing',
    time: 'Anytime before 8:00pm',
    duration: '1-2 hours',
    pickup: 'From Hotel',
    image: '../src/assets/plans3.png',
  },
];

const TourCard = () => {
  return (
    <div className="bg-black px-4 pb-6 pt-2 text-white w-full">
      <h2 className="text-xl font-semibold mb-4">Activities</h2>
      <div className="flex flex-col gap-4">
        {tours.map((tour, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden border ${
              index === 0 || index === tours.length - 1
                ? 'border-yellow-400'
                : 'border-transparent'
            } bg-[#1c1c1e]`}
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
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Timing:</span>{' '}
                {tour.time}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Duration:</span>{' '}
                {tour.duration}
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">Pick up:</span>{' '}
                {tour.pickup}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCard;
