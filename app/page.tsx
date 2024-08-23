import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/ui/ModeToggle'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Background, ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { Compass, Search } from 'lucide-react'

const testCourses = [
    {
        id: '1',
        data: { label: 'Course 1' },
        position: { x: 0, y: 0 },
    },
    {
        id: '2',
        data: { label: 'Course 2' },
        position: { x: 0, y: 100 },
    },
    {
        id: '3',
        data: { label: 'Course 3' },
        position: { x: 0, y: 200 },
    },
    {
        id: '4',
        data: { label: 'Course 4' },
        position: { x: 0, y: 300 },
    },
    {
        id: '5',
        data: { label: 'Course 5' },
        position: { x: 200, y: 300 },
    },
]

const testEdges = [
    { id: '1-2', source: '1', target: '2' },
    { id: '2-3', source: '2', target: '3' },
    { id: '3-4', source: '3', target: '4' },
    { id: '4-5', source: '3', target: '5' },
]

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="z-10 flex size-full min-h-screen flex-col items-start justify-between text-sm">
                <div className="flex w-full flex-col">
                    <div className="flex w-full shrink flex-col justify-between md:flex-row md:items-center">
                        <div className="flex w-full flex-col md:h-full md:flex-row md:items-center">
                            <div className="relative flex flex-row items-center">
                                <Compass
                                    size={18}
                                    className="absolute left-2 top-1/2 z-20 -translate-y-1/2"
                                />
                                <h1 className="md pb-1.5 pl-8 pr-3 pt-1.5 font-serif text-xl md:py-0">
                                    Kurssikartta
                                </h1>
                            </div>

                            <Select>
                                <SelectTrigger className="w-full shrink-0 border-x-0 border-b-0 focus:z-10 md:w-[180px] md:border md:border-y-0">
                                    <SelectValue
                                        placeholder="Choose Degree"
                                        defaultValue="TKT"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="TKT">
                                        TKT Kandiohjelma
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full shrink-0 border-x-0 focus:z-10 md:w-[180px] md:border md:border-y-0 md:border-l-0">
                                    <SelectValue
                                        placeholder="Choose OPS"
                                        defaultValue="20-23"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="20-23">
                                        OPS 2020-2023
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="relative flex w-full flex-row">
                                <Search
                                    size={20}
                                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2"
                                />
                                <Input
                                    className="w-full border-0 pl-11 focus:z-10"
                                    placeholder="Search courses"
                                />
                                <ModeToggle className="inline-flex border-y-0 border-r-0 md:hidden" />
                            </div>
                        </div>

                        <ModeToggle className="hidden border-y-0 border-r-0 md:inline-flex" />
                    </div>
                    <Separator />
                </div>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="flex-grow"
                >
                    <ResizablePanel defaultSize={80} minSize={20}>
                        <ReactFlow
                            nodes={testCourses}
                            edges={testEdges}
                            defaultNodes={[]}
                            defaultEdges={[]}
                            attributionPosition="bottom-left"
                            panOnDrag
                            zoomOnPinch
                            className="size-full"
                        >
                            <Background color="#777" />
                        </ReactFlow>
                    </ResizablePanel>
                    <ResizableHandle className="hidden md:flex" />
                    <ResizablePanel minSize={15} className="hidden md:flex">
                        <div className="flex size-full flex-col items-center justify-center">
                            <p className="p-3 text-center">
                                Choose a course to view info
                            </p>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </main>
    )
}
