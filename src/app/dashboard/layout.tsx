export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-x-6">
      {props.children}
      {props.team}
      {props.analytics}
    </div>
  );
}
