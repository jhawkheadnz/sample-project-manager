import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';



type CreateProjectForm = {
    name: string,
    description: string,
    start_date: string
}
export default function Dashboard() {
    
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Projects',
            href: '/projects'
        },
        {
            title: 'Create a Project',
            href: '/projects/create',
        },
    ];

    const { data, setData, post } = useForm<Required<CreateProjectForm>>({
        name: '',
        description: '',
        start_date: '',
    });

    const handleSubmit: FormEventHandler = (e) => {

        e.preventDefault();

        console.log(data);

        post(route("projects.store"), {
            onFinish: () => { console.log(e); }
        });

    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="max-w-[600px] flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

                    Project Name:
                    <Input
                        id="project_name"
                        type='text'
                        required
                        tabIndex={1}
                        value={data.name}
                        onChange={(e)=> setData('name', e.target.value)}
                        placeholder="Project Name..." />

                    Project Description:
                    <Textarea
                        className="h-[160px]"
                        id="project_description"
                        required
                        tabIndex={2}
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Describe this project..."
                        />

                    Project Start Date: <Input
                        id="start_date"
                        type="text"
                        required
                        tabIndex={3}
                        value={data.start_date}
                        onChange={(e) => setData('start_date', e.target.value)}

                    />

                    <Button type="submit">Create Project</Button>
                </form>
            </div>
        </AppLayout>
    );
}
