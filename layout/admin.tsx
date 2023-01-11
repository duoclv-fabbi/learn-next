import * as React from 'react';
import { layoutProps } from '@/models/index'

import Link from 'next/link'

export function AdminLayout ({ children }: layoutProps) {
  return (
    <div>
        <h1>Admin Layout</h1>
        <div>Sidebar</div>

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
