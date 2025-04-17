import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a Project',
        href: '/tasks/create',
    },
];

export default function TaskMain() {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="max-w-[600px] flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                show all tasks
            </div>
        </AppLayout>
    );
}
