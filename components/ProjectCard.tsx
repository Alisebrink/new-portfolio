import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
  tags: string[];
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  imageAlt,
  url,
  tags,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border-3 border-zinc-800 overflow-hidden hover:border-rose-300 transition block"
    >
      <div className="w-full h-56 bg-zinc-900 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="object-cover w-full h-full group-hover:scale-105 transition"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-violet-100 mb-2">
          {title}
        </h3>

        <p className="text-sm text-zinc-300 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-rose-500/20 text-rose-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
