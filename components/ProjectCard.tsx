import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  url: string;
  tags: string[];
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  url,
  tags,
}: ProjectCardProps) {
  return (
    <article className="group relative min-w-0 overflow-hidden rounded-2xl border-3 border-line transition-colors hover:border-accent focus-within:border-accent">
      <div className="aspect-video w-full overflow-hidden bg-surface">
        <Image
          src={imageSrc}
          alt=""
          width={800}
          height={600}
          sizes="(min-width: 1072px) 320px, (min-width: 1024px) calc((100vw - 114px) / 3), (min-width: 640px) calc((100vw - 84px) / 2), calc(100vw - 38px)"
          className="h-full w-full object-cover motion-safe:transition-transform motion-safe:group-hover:scale-105"
        />
      </div>

      <div className="p-4 sm:p-5 lg:p-6">
        <h3 className="mb-2 text-xl font-semibold text-accent">
          <a href={url} className="after:absolute after:inset-0">
            {title}
          </a>
        </h3>

        <p className="text-sm text-muted mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-surface px-2 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
