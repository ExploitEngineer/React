export default function DefaultProps({ label = 'Click me', className = 'btn btn-primary' }) {
    return (
        <div>
            <button className={className}>{label}</button>
        </div>
    );
};
