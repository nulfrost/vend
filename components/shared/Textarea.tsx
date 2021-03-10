export default function Textarea({ name, ...props }) {
  return (
    <textarea
      name={name}
      cols={30}
      rows={10}
      className="w-full border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
      {...props}
    ></textarea>
  );
}
