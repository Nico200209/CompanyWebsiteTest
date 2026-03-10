import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  className?: string;
}

export function TestimonialCard({ author, text, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex w-[300px] shrink-0 flex-col gap-5 rounded-sm border-t-2 border-caoba-accent bg-caoba-primary p-6",
        className
      )}
    >
      {/* Large quote mark */}
      <span className="text-4xl font-black leading-none text-caoba-accent/30 select-none">
        &ldquo;
      </span>

      {/* Quote text */}
      <p className="flex-1 text-sm leading-relaxed text-white/75">
        {text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <Avatar className="h-9 w-9 shrink-0">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>
            {author.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs font-black text-caoba-accent">{author.name}</p>
          <p className="text-[11px] text-white/40">{author.role}</p>
        </div>
      </div>
    </div>
  );
}
