import MKbox from '@/components/MKBox';
const Index = () => {
  return (
    <section className="mb-8">
      <MKbox
        title="Drink Videos"
        subtitle="For those who like watching drink videos"
        link="/tiktok-video"
        link_title="See All"
      />
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <img
            src="https://placehold.co/200x250/webp"
            alt="Video 1"
            className="w-full h-32 object-cover rounded-lg mb-2"
            loading="lazy"
          />
          <span>Warung Kopi Paling Rame di Tangerang...</span>
        </div>
        {/* <!-- Repeat similar blocks for other videos --> */}
      </div>
    </section>
  );
};

export default Index;
