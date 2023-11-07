export default function TopNavigationigationWrapper({ children }) {
  return (
    <div className="grid h-14 w-auto grid-flow-col content-center justify-stretch border-accent-400 bg-primary-300 px-4">
      {children}
    </div>
  );
}
