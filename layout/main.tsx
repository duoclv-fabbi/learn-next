import * as React from 'react';
import { layoutProps } from '@/models/index'

import Link from 'next/link'

export function MainLayout ({ children }: layoutProps) {
  return (
    <div>
        <h1>Main Layout</h1>

        <Link href={'/'}>
            <a> Home</a>
        </Link>

        <Link href={'/about'}>
            <a> About</a>
        </Link>

        <div>{children}</div>

    </div>
  );
}
