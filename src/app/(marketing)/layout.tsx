export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <h3>Route Groups example. about/blog page</h3>
      <div className="flex rounded-sm border border-dashed border-black">
        {props.children}
      </div>
    </>
  );
}
