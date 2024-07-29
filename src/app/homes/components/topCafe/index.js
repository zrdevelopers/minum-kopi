'use client';

import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

import { Box, Grid } from '@mui/material';
import MKCard from '@/components/MKCard';
import MKbox from '@/components/MKBox';

const Index = (props) => {
  const { translation } = props;
  const [dataTopCafe, setDataTopCafe] = useState([]);

  const getDataTopCafe = async () => {
    setDataTopCafe([
      {
        name: 'Mie Ayam Muntjul',
        description: 'Delicious chicken noodle',
        imageUrl:
          'https://dashboard.makan-bang.id/images/logo/735571ba65a810e8905b13d1cdd7e15850e1191106a9a881e78ae56994cb69a9.png',
        link: '/menus/mie-ayam-muntjul-kisamaun'
      },
      {
        name: 'Bebek Boedjang',
        description: 'Crispy duck',
        imageUrl:
          'https://dashboard.makan-bang.id/images/logo/65aa481d4e610b8b423b9d242e44501aa01d7dd57b1817bdb371a2b05bcd0011.png',
        link: '/brand/64'
      },
      {
        name: 'Sop Mak Garang',
        description: 'Spicy soup',
        imageUrl:
          'https://dashboard.makan-bang.id/images/logo/7e15da20d46500ba44ece981e11418e813a9886ed876b9339d8032971a2e33d1.png',
        link: '/brand/73'
      }
    ]);
  };

  useEffect(() => {
    getDataTopCafe();
  }, []);

  return (
    // <section className="mb-8">
    //   <div className="flex gap-4 overflow-x-auto">
    //     {dataTopCafe.map((item, idx) => (
    //       <Link href={`/brand${idx + 1}`} key={item?.id || idx} className="w-1/6 flex-none mb-3">
    //         <div className="bg-white rounded-lg shadow-md p-4">
    //           <img
    //             src="https://placehold.co/100x100/webp"
    //             alt={`Cafe${idx + 1}`}
    //             className="h-16 mx-auto mb-2"
    //             loading="lazy"
    //           />
    //           <span>Cafe {idx + 1}</span>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </section>
    <Box>
      <MKbox
        title={translation('Kafe Andalan')}
        subtitle={translation('Lihat kafe rekomendasi di sekitarmu')}
        link="/brand"
        link_title={translation('Lihat Semua')}
      />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {dataTopCafe.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.name}>
            <MKCard {...restaurant} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
