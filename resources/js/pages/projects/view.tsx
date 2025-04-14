import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { BadgeInfo, Settings } from 'lucide-react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show Project Info and Tasks',
        href: '/projects',
    },
];

interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    user_id: string;
    completed: number;
}

type CreateProjectForm = {
    id: number,
    name: string,
    description: string,
    start_date: string,
    user_id: string,
    completed: number
}

export default function ProjectView({ project }: { project: Project }) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects"></Head>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                    <div className="pyt-3 font-normal text-4xl">
                        <span className='font-semibold uppercase text-xs'>Project:</span><br/>
                        <div className='flex'>
                            <span>{project.name}</span>
                            <span><Link href={"edit"}>
                                <Settings />
                            </Link></span>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-4 py-5 rounded-sm">
                       <div className='flex mb-3'>
                            {project.description}
                            <BadgeInfo className='mr-3 ml-3' style={{ color: "#36a832" }} /> 
                       </div>
                        <p className="text-xs text-gray-500">
                            <strong>Created By: {project.user_id}</strong> on {project.start_date}
                        </p>
                    </div>

                    <hr />

                    <div className='font-semibold text-2xl'>Project Tasks</div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Task</TableHead>
                                <TableHead className="font-bold">Description</TableHead>
                                <TableHead className="text-right font-bold">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className='cursor-default'>
                                <TableCell className="font-medium">... task ...</TableCell>
                                <TableCell>... description ...</TableCell>
                                <TableCell className="text-right">... status ...</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

            </div>
        </AppLayout>
    );
}