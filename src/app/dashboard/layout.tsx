export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      <h2 className="mb-4">Parallel routes example</h2>
      <div className="flex flex-row gap-x-6">
        {props.children}
        {props.team}
        {props.analytics}
      </div>
    </>
  );
}
