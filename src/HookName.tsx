import React from 'react';

export const HookName = ({ name }: { name: string }) => (
  <h1>
    {`${name} Hook `}
    <span role="img" aria-label="img">
      🎣
    </span>
  </h1>
);
