export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-48 w-full">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-100 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-medical-blue rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-accent-green rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
