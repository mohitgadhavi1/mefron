import { notFound } from "next/navigation";
import { blogData } from "@/lib/site-data";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20 pb-24 min-h-screen">
      <article className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.15]">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User size={14} className="text-primary" />
              </div>
              <span className="font-medium text-white/80">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="ml-auto flex gap-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary rounded-full">
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </header>

        <div className="aspect-video w-full bg-zinc-900 rounded-[2rem] mb-12 shadow-2xl relative overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed italic mb-10">
            {post.description}
          </p>
          <div className="text-white/90 leading-loose space-y-6">
            {post.content}
            <p>Electronics manufacturing involves several complex stages, including design for manufacturability, component sourcing, PCB assembly, and rigorous testing. At Mefron, we ensure each stage is optimized for precision and quality.</p>
            <p>The role of SMT technology in modern electronics cannot be overstated. With the precision allowed by high-speed placement machines, components as small as 01005 can be accurately mounted, enabling the creation of compact and powerful devices.</p>
          </div>
        </div>

        <div className="mt-20 p-12 bg-primary/5 border border-primary/20 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-2">Need a custom EMS solution?</h3>
                <p className="text-muted-foreground text-sm">Talk to our technical team about your next project and get a personalized quote.</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full h-12 px-8">
                Consult an Expert
            </Button>
        </div>
      </article>
    </div>
  );
}
