import { Button } from '@/components/ui/button';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects">
            </Head>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Link href="./projects/create"><Button className='w-[120px]'>Create Project</Button></Link>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='font-bold'>Project Name</TableHead>
                        <TableHead className='font-bold'>Project Description</TableHead>
                        <TableHead className="text-right font-bold">Start Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">-- name --</TableCell>
                        <TableCell>-- description --</TableCell>
                        <TableCell className="text-right">-- start date --</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
        </AppLayout>
    );
}
