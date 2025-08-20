export default function NotFound(){
  return (
    <div className="container-tight py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-gray-600 mt-2">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 rounded-xl bg-brand-600 text-white">Go Home</a>
    </div>
  );
}
