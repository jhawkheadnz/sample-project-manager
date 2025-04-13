import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
}

export default function Projects({ projects }: { projects: Project[] }) {

    console.log(projects);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects"></Head>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Link href="./projects/create">
                    <Button className="w-[120px]">Create Project</Button>
                </Link>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold">Project Name</TableHead>
                            <TableHead className="font-bold">Project Description</TableHead>
                            <TableHead className="text-right font-bold">Start Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                        {
                            projects.map(
                                (project) => (
                                    <TableRow>
                                        <TableCell className="font-medium">{project.name}</TableCell>
                                        <TableCell>{project.description}</TableCell>
                                        <TableCell className="text-right">{project.start_date}</TableCell>
                                    </TableRow>
                                )
                            )
                        }


                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
