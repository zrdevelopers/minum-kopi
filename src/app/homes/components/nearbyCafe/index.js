'use client';

import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import MKbox from '@/components/MKBox';

const Index = (props) => {
  const { translation } = props;
  const [dataNearbyCafe, setDataNearbyCafe] = useState([]);

  const getDataNearbyCafe = async () => {
    setDataNearbyCafe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  useEffect(() => {
    getDataNearbyCafe();
  }, []);

  return (
    // <section className="mb-8">
    //   <MKbox
    //     title="Nearby Cafe"
    //     subtitle="Find the restaurant closest to you"
    //     link="/cafe"
    //     link_title="See All"
    //   />

    //   <div className="flex gap-4 overflow-x-auto">
    //     {dataNearbyCafe.map((item, idx) => (
    //       <div key={item?.id || idx} className="w-1/4 flex-none bg-white rounded-lg shadow p-4">
    //         <img
    //           src="https://placehold.co/260x200/webp"
    //           alt={`Cafe${idx + 1}`}
    //           className="w-full h-32 object-cover rounded-lg mb-2"
    //           loading="lazy"
    //         />
    //         <div className="flex items-center">
    //           <span className="text-yellow-500">4.8</span>
    //           <span className="ml-2">(1382)</span>
    //         </div>
    //         <span>Cafe {idx + 1}</span>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <Box>
      <MKbox
        title={translation('Kafe Terdekat')}
        subtitle={translation('Cari Kafe terdekat dengan kamu')}
        link="/cafe"
        link_title={translation('Lihat Semua')}
      />
      <div style={{ display: 'flex' }}>
        {dataNearbyCafe.map((item, idx) => (
          <div key={item?.id || idx}>
            <p>{idx + 1}</p>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Index;
