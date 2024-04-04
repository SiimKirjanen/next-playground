import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h2>F1 page </h2>
      <Link href="/f1/f2">F2 page</Link>
    </div>
  );
}

export default page;
