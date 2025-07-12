export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Loading spinner */}
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
        {/* Loading text */}
        <p className="mt-4 text-gray-600 text-center">Loading...</p>
      </div>
    </div>
  );
}