import React, { forwardRef } from "react";

const Page = forwardRef(({ children, extraClass = "" }, ref) => {
  return (
    <div className={`page ${extraClass}`} ref={ref}>
      {children}
    </div>
  );
});

export default Page;
