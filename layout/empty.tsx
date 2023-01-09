import * as React from 'react';
import { layoutProps } from '@/models/index'

import Link from 'next/link'

export function EmptyLayout ({ children }: layoutProps) {
  return (
    <div>
        <div>{children}</div>
    </div>
  );
}
