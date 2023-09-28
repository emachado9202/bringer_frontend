
export interface InputFieldProps {
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: string;
    required?: boolean;
    className?: string;
    autoComplete?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
    name,
    label,
    value,
    onChange,
    placeholder,
    type,
    required,
    className,
    autoComplete
}) => {
    return <div>
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>
        <div className="mt-2">
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
                required={required}
                className={className}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoComplete={autoComplete}
            />
        </div>
    </div>
};