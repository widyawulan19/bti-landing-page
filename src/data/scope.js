import { MdElectricalServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";

export const scopeList = [
    {
        id: 1,
        title: "Electrical Works",
        icon: <MdElectricalServices />,
        list: [
            { id: 1, name: '20 KV Incoming Work' },
            { id: 2, name: 'Substation Work' },
            { id: 3, name: 'Generator System Work' },
            { id: 4, name: 'Main Feeder Piping & Wiring Work' },
            { id: 5, name: 'Power Piping & Wiring Work' },
            { id: 6, name: 'Lighting Fixture Piping & Wiring Work' },
            { id: 7, name: 'Telephone System Piping & Wiring Work' },
            { id: 8, name: 'Paging System Work' },
            { id: 9, name: 'TV System Work' },
            { id: 10, name: 'Alarm System Work' },
            { id: 11, name: 'Fire Alarm System Work' },
            { id: 12, name: 'Lighting Protection System Work' },
            { id: 13, name: 'Other System Work' }
        ]
    },
    {
        id: 2,
        title: 'IT Works',
        icon: <FaLaptopCode />,
        list: [
            { id: 1, name: 'Business System Developer Work' },
            { id: 2, name: 'IT Consulting Work' },
            { id: 3, name: 'Software and Hardware Maintenance Work' },
            { id: 4, name: 'Network and Server Infrastructure Work' }
        ]
    },
    {
        id: 3,
        title: 'Maintenance Works',
        icon: <GrVmMaintenance />,
        list: [
            { id: 1, name: 'Mechanical and Electrical Works' },
            { id: 2, name: 'Daily Check' },
            { id: 3, name: 'Regular Check' },
            { id: 4, name: 'Special Check' }
        ]
    }
]