import * as React from 'react';
import { layoutProps } from '@/models/index'

import Link from 'next/link'

export function AdminLayout ({ children }: layoutProps) {
  return (
    <div>
        <h1>Admin Layout</h1>
        <div>Sidebar</div>

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
