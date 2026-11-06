import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, upcomingJournalStories, originalBlogsIntro } from '../data/blogs';
import { ArrowRight, Clock, Sparkles, BookOpen, User } from 'lucide-react';

export const BlogsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Journal | Stories, Inspiration & Everything In Between | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore stories, craftsmanship insights, and post-production techniques from Ultraa Albums. Hand-bound album binding, silver halide prints, and photo retouching in Mumbai.'
      );
    }
  }, []);

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero Header */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container text-center max-w-3xl space-y-4">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            The Ultraa Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal leading-tight">
            Stories, inspiration and everything in between.
          </h1>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            Reflections on artisan bookbinding, continuous-tone silver halide printing, and bespoke wedding photo album craftsmanship from our workshop in Mumbai.
          </p>
        </div>
      </section>

      {/* 2. Featured Article (Original Authentic Content) */}
      <section className="py-16 sm:py-20 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="bg-white border border-charcoal/10 rounded-sm overflow-hidden shadow-soft-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 aspect-[4/3] bg-beige-warm/30 overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                <span className="text-charcoal bg-ivory px-2.5 py-1 border border-charcoal/10 rounded-sm">
                  {featuredPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredPost.readTime}
                </span>
                {featuredPost.publishDate && <span>· {featuredPost.publishDate}</span>}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal leading-snug">
                <Link to={`/blogs/${featuredPost.slug}`} className="hover:underline">
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-secondary font-light">
                  <User className="w-3.5 h-3.5" />
                  <span>{featuredPost.author}</span>
                </div>

                <Link
                  to={`/blogs/${featuredPost.slug}`}
                  className="btn-luxury-primary text-xs py-2.5 px-5 inline-flex items-center gap-2"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Article Cards */}
      <section className="py-20 bg-white border-b border-charcoal/5">
        <div className="section-container space-y-12">
          <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Craftsmanship & Guides
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                Studio Insights
              </h3>
            </div>
            <span className="text-xs text-secondary font-light">
              {blogPosts.length} Published Articles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.id}
                className="bg-ivory border border-charcoal/10 rounded-sm overflow-hidden flex flex-col justify-between shadow-soft-sm hover:border-charcoal/25 transition-all"
              >
                <div className="aspect-[16/10] bg-white overflow-hidden border-b border-charcoal/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                      <span className="text-charcoal bg-white px-2 py-0.5 border border-charcoal/10 rounded-sm">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal leading-snug">
                      <Link to={`/blogs/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-secondary font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between text-xs">
                    <span className="text-secondary font-light">{post.author}</span>
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="font-medium text-charcoal hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Coming Soon / Unpublished Articles Section (Empty-state requirement) */}
      <section className="py-20 bg-ivory border-b border-charcoal/5">
        <div className="section-container max-w-4xl space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              From the Atelier Archive
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal">
              Forthcoming Journal Stories
            </h3>
            <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
              We preserve authentic business content without publishing placeholder drafts. Here are the upcoming photographic essays currently being authored by our workshop team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {upcomingJournalStories.map((story, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-charcoal/10 rounded-sm space-y-3 shadow-soft-sm"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-luxury">
                  <span className="text-secondary font-semibold">{story.category}</span>
                  <span className="text-rose-pastel font-medium text-[9px] bg-charcoal px-2 py-0.5 rounded-sm text-ivory">
                    Coming Soon
                  </span>
                </div>
                <h5 className="font-serif text-base font-medium text-charcoal leading-snug">
                  {story.title}
                </h5>
                <p className="text-[11px] text-secondary/80 font-light italic">
                  {story.status}
                </p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-white border border-charcoal/10 rounded-sm text-center space-y-3">
            <h4 className="font-serif text-xl font-medium text-charcoal">Have a Topic or Question?</h4>
            <p className="text-xs text-secondary font-light max-w-md mx-auto">
              If you’d like our bookbinders to cover a specific topic—such as archival paper coatings, foil embossing methods, or color profiling—let us know.
            </p>
            <div className="pt-2">
              <Link to="/contact-us" className="btn-luxury-secondary text-xs py-2 px-5 inline-flex">
                Suggest an Editorial Topic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Original Website Content Statement */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl text-center space-y-3">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Original Manufacturer Statement
          </span>
          <p className="font-serif italic text-base sm:text-lg text-charcoal leading-relaxed">
            "{originalBlogsIntro.quote}"
          </p>
          <div className="pt-2">
            <Link
              to="/image-editing"
              className="inline-flex items-center gap-1.5 text-xs text-charcoal font-medium underline"
            >
              <span>Explore Professional Image Editing & Free RAW Sample</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
