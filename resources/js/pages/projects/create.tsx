import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects/create',
    },
];

const handelSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    alert("testing");
}

export default function Dashboard() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="max-w-[600px] flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form className='flex flex-col gap-6' onSubmit={handelSubmit}>
                    Project Name: <Input
                        type='text'
                        id="project_name"
                        placeholder="Project Name..." />
                    Project Description: <Textarea className="h-[160px]" id="project_description" placeholder="Describe this project..."></Textarea>

                    Project Start Date: 

                    <Button type="submit">Create Project</Button>
                </form>
            </div>
        </AppLayout>
    );
}
