async function getData(): Promise<string[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(["Siim", "Kalle", "Malle"]);
    }, 3000);
  });
}

const Analytics = async () => {
  const data = await getData();

  return (
    <div className="border-2 p-4">
      <h2>Analytics</h2>
      {data &&
        data.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
    </div>
  );
};

export default Analytics;
