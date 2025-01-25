
interface TitleProps {
  title: string; // Required string
  description?: string; // Optional string
}
export default function Title({ title, description }: TitleProps) {
    return (
      <div>
            <h3 className="text-center text-customGreen uppercase">{ title}</h3>
            <h2 className="text-2xl font-bold text-center mb-6">{ description}</h2>
      </div>
    );
}