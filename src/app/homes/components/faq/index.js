import MKbox from '@/components/MKBox';
const Index = () => {
  return (
    <section className="mb-8">
      <MKbox title="FAQ" subtitle="Frequently asked questions" link={false} />
      <div className="bg-white rounded-lg shadow p-4">
        <details className="mb-4">
          <summary className="font-semibold">Apa itu MinumKopi?</summary>
          <p className="mt-2">MinumKopi is...</p>
        </details>
        {/* <!-- Repeat similar blocks for other FAQs --> */}
      </div>
    </section>
  );
};

export default Index;
