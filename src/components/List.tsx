export const List = ({
  title = "row",
  data,
  type,
}: {
  title: string;
  data: string[];
  type?: "row" | "column";
}) => {
  if (!data.length) return null;

  const cln = type === "column" ? "flex flex-wrap gap-x-4" : "";

  return (
    <div>
      <h3>{title}</h3>
      <ul className={cln}>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
