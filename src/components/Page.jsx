import React, { forwardRef } from "react";

const Page = forwardRef(({ children }, ref) => {
  return (
    <div className='page' ref={ref}>
      {children}
    </div>
  );
});

export default Page;
