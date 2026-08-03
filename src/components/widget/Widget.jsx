import Card from "components/card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-xl border-dashed">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-lg bg-brand-50 p-3 dark:bg-navy-600">
          <span className="flex items-center text-brand-600 dark:text-brand-300">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-wide text-graphite-500 dark:text-graphite-300">
          {title}
        </p>
        <h4 className="font-mono text-xl font-semibold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
