import MKbox from '@/components/MKBox';

const Index = () => {
  return (
    <section className="mb-8">
      <MKbox
        title="New Article"
        subtitle="Article for you coffee lovers"
        link="/article"
        link_title="See All"
      />
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <img
            src="https://placehold.co/260x163/webp"
            alt="Article 1"
            className="w-full h-32 object-cover rounded-lg mb-2"
            loading="lazy"
          />
          <span className="text-gray-600">15 March 2024</span>
          <h3 className="font-semibold">Lorem ipsum</h3>
        </div>
        {/* <!-- Repeat similar blocks for other articles --> */}
      </div>
    </section>
  );
};

export default Index;
