import { LeaseCard } from './LeaseCard';

export function LeaseList({loadLeases}) {
    console.log("LOAD" + loadLeases);
    return (
        <ul>
            {loadLeases.map((lease) => (
                <h1>{lease.address}</h1>
            ))}
        </ul>
    )
}