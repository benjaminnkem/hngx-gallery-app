const WidthWrapper = ({ children, addClass }: { children: React.ReactNode; addClass?: string }) => {
  return <div className={`md:max-w-[1200px] w-11/12 mx-auto ${addClass}`}>{children}</div>;
};

export default WidthWrapper;
