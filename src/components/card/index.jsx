function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-xl border border-graphite-200 bg-white bg-clip-border shadow-sm dark:!border-navy-600 dark:!bg-navy-700 dark:text-white dark:shadow-none ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
