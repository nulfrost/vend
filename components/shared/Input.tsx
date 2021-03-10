export default function Input({
  type,
  name,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      name={name}
      className="w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
      {...props}
    />
  );
}
