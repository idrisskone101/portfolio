export default function Loading() {
  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <div className="max-w-2xl mx-auto bg-gray-700 rounded h-7 animate-pulse"></div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="overflow-hidden bg-[#111] rounded-lg shadow-md"
          >
            <div className="w-full h-48 bg-gray-800 animate-pulse"></div>
            <div className="p-6">
              <div className="w-3/4 h-6 mb-3 bg-gray-700 rounded animate-pulse"></div>
              <div className="w-1/4 h-4 mb-3 bg-gray-700 rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="w-full h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="w-2/3 h-4 bg-gray-700 rounded animate-pulse"></div>
              </div>
              <div className="w-1/3 h-8 mt-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
