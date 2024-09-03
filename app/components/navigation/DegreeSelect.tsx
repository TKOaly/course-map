import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/app/components/ui/select'

export const DegreeSelect = () => (
    <Select defaultValue="TKT">
        <SelectTrigger
            aria-label="Choose degree"
            className="w-full shrink-0 select-none border-x-0 border-b-0 border-border hover:bg-secondary/90 focus:z-10 md:w-[160px] md:border md:border-y-0"
        >
            <SelectValue placeholder="Valitse Tutkinto" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="TKT">TKT Kandi</SelectItem>
        </SelectContent>
    </Select>
)
