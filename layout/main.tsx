import * as React from 'react';
import { layoutProps } from '@/models/index'

import Link from 'next/link'

export function MainLayout ({ children }: layoutProps) {
  return (
    <div>
        <h1>Main Layout</h1>

        <Link href={'/'}>
            <p> Home</p>
        </Link>

        <Link href={'/about'}>
            <p> pbout</p>
        </Link>

        <div>{children}</div>

    </div>
  );
}
