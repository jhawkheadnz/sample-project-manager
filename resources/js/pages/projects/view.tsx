import EditTaskDialog from '@/components/task-dialog';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Project, Task, User, type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { BadgeInfo, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show Project Info and Tasks',
        href: '/projects',
    },
];

function updateTask(){

    console.log("Update task");

}

export default function ProjectView({ project, tasks, creator }: { project: Project, tasks: Task[], creator: User }) {

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
                            <strong>Created By: {creator.name}</strong> on {project.start_date}
                        </p>
                    </div>

                    <hr />

                    <div className='font-semibold text-2xl flex item-center align-middle'>
                        <div className='mr-4 mt-1'>Project Tasks</div>
                        <Link href={`/tasks/` + project.id + `/create`}><button className='hover:bg-blue-800 transition delay-75 ease-in-out bg-blue-500 py-2 px-5 cursor-pointer text-sm text-white rounded'>Add a Task</button></Link>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Task</TableHead>
                                <TableHead className="font-bold">Description</TableHead>
                                <TableHead className="text-right font-bold">% Completed</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                tasks.map((task) => (
                                    <Dialog key={task.id}>
                                        <DialogTrigger asChild>

                                            <TableRow  className='cursor-pointer'>
                                                <TableCell className="font-medium">{task.name}</TableCell>
                                                <TableCell>
                                                    {task.description}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Progress value={task.progress} />{task.progress}%
                                                </TableCell>
                                            </TableRow>

                                        </DialogTrigger>
                                        <DialogContent className='sm:max-w-[625px]'>
                                            <DialogHeader>
                                                <DialogTitle>Edit Task</DialogTitle>
                                                <DialogDescription>
                                                    Update and change task information
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className='grid gap-4 py-4'>
                                                <div className='grid grid-cols-4 items-center gap-4'>
                                                    <Label className="text-right">Name</Label>
                                                    <Input id="name" defaultValue={task.name} className="col-span-3 w-[400px]" />

                                                    <Label className="text-right">Description</Label>
                                                    <Textarea id="description" defaultValue={task.description} className='col-span-3 w-[400px]' />

                                                    <Label className="text-right">Progress (%)</Label>
                                                    <Input id="description" defaultValue={task.progress} className='col-span-3 w-[400px]' />

                                                    <Label className='text-right'>Completed?</Label>
                                                    <Checkbox id="completed" className='col-span-3 border border-gray-700'/>
                                                </div>
                                            </div>

                                            <DialogFooter>
                                                <Button onClick={updateTask}>Update Task</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                ))
                            }
                        </TableBody>
                    </Table>

            </div>
        </AppLayout>
    );
}