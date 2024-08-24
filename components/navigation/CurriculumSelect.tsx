import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export const CurriculumSelect = () => (
    <Select defaultValue="20-23">
        <SelectTrigger className="w-full shrink-0 select-none border-x-0 border-border hover:bg-secondary/90 focus:z-10 md:w-[160px] md:border md:border-y-0 md:border-l-0">
            <SelectValue placeholder="Valitse Opetussuunnitelma" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="20-23">OPS 2023-2026</SelectItem>
        </SelectContent>
    </Select>
)
