import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { ArrowLeft, Clock, User, Share2, ArrowRight } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ultraa Albums Journal`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
      }
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="py-32 bg-ivory text-center">
        <div className="section-container max-w-md space-y-4">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Article Not Found
          </span>
          <h2 className="font-serif text-3xl font-medium text-charcoal">
            The requested journal story could not be located.
          </h2>
          <div className="pt-4">
            <Link to="/blogs" className="btn-luxury-primary text-xs py-2.5 px-6 inline-flex">
              Return to Journal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-ivory text-charcoal">
      {/* 1. Header & Breadcrumbs */}
      <div className="bg-white border-b border-charcoal/5 py-4">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 hover:text-charcoal transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Stories</span>
          </Link>
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            {post.category}
          </span>
        </div>
      </div>

      {/* 2. Article Header */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl text-center space-y-6">
          <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            <span className="bg-ivory px-3 py-1 border border-charcoal/10 rounded-sm text-charcoal">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            {post.publishDate && <span>· {post.publishDate}</span>}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
            {post.title}
          </h1>

          <p className="text-xs sm:text-base text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            {post.excerpt}
          </p>

          <div className="pt-4 flex items-center justify-center gap-3 text-xs text-secondary font-light border-t border-charcoal/5 max-w-xs mx-auto">
            <User className="w-4 h-4 text-charcoal" />
            <span>Authored by <strong>{post.author}</strong></span>
          </div>
        </div>
      </section>

      {/* 3. Hero Visual */}
      <div className="section-container max-w-4xl py-12">
        <div className="aspect-[16/9] rounded-sm overflow-hidden border border-charcoal/10 shadow-card bg-white">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 4. Article Content Body */}
      <section className="pb-24">
        <div className="section-container max-w-2xl space-y-8">
          <div className="prose prose-neutral max-w-none text-xs sm:text-sm text-secondary font-light leading-relaxed space-y-6">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull Quote Highlight */}
          <div className="my-10 p-8 bg-white border-l-2 border-charcoal rounded-sm shadow-soft-sm">
            <p className="font-serif italic text-base sm:text-xl text-charcoal leading-snug">
              "Every wedding album is more than printed paper—it is the tangible sanctuary for memories that will be held by children and grandchildren decades from now."
            </p>
            <span className="block text-[10px] uppercase tracking-luxury text-secondary mt-3">
              Ultraa Albums Atelier Principle
            </span>
          </div>

          {/* Related Inquiries CTA */}
          <div className="p-8 sm:p-10 bg-white border border-charcoal/10 rounded-sm text-center space-y-4 shadow-soft-sm">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Bring Your Vision to Life
            </span>
            <h3 className="font-serif text-2xl font-medium text-charcoal">
              Ready to Craft Your Custom Album?
            </h3>
            <p className="text-xs text-secondary font-light max-w-md mx-auto leading-relaxed">
              Explore our complete collection of hand-bound flush mount albums, bookstore hardcovers, and professional image editing services.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link to="/contact-us" className="btn-luxury-primary text-xs py-2.5 px-6">
                Inquire With Our Atelier
              </Link>
              <Link to="/flush-mount-album" className="btn-luxury-secondary text-xs py-2.5 px-6">
                Explore Flush Mount Albums
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

