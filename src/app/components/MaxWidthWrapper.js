export default function MaxWidthWrapper({ children, className, px }) {
  return (
    <div
      className={`mx-auto w-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
