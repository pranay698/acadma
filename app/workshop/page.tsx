import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = await createClient();

  const [
    { data: featuredCourses, error: featuredCoursesError },
    { data: stats, error: statsError },
    { data: pillars, error: pillarsError },
    { data: testimonials, error: testimonialsError },
  ] = await Promise.all([
    supabase.from("featured_courses").select("*").order("sort_order"),
    supabase.from("stats").select("*").order("sort_order"),
    supabase.from("pillars").select("*").order("sort_order"),
    supabase.from("testimonials").select("*").order("sort_order"),
  ]);

  if (
    featuredCoursesError ||
    statsError ||
    pillarsError ||
    testimonialsError
  ) {
    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">
        <h1 className="mb-4 text-3xl font-bold">Supabase connection issue</h1>
        <p className="text-slate-300">
          Check your environment variables, tables, and policies.
        </p>
        <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-sm text-red-300">
{JSON.stringify(
  {
    featuredCoursesError,
    statsError,
    pillarsError,
    testimonialsError,
  },
  null,
  2
)}
        </pre>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-80 right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white font-bold text-slate-950 shadow-lg shadow-white/10">
              A
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Acadma</div>
              <div className="text-xs text-slate-400">
                Modern learning for ambitious people
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#courses" className="transition hover:text-white">Courses</a>
            <a href="#webinars" className="transition hover:text-white">Webinars</a>
            <a href="#membership" className="transition hover:text-white">Membership</a>
            <a href="#testimonials" className="transition hover:text-white">Reviews</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/25 hover:bg-white/5 md:inline-flex">
              Log in
            </button>
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
              Explore now
            </button>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Learn through courses, cohorts, webinars, and memberships
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A sharper, more premium home for
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}modern online learning
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              This redesign turns the original marketplace-style experience into
              a high-trust, conversion-focused landing page with clearer
              hierarchy, stronger branding, and a cleaner path to discovery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 shadow-2xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-slate-100">
                Browse featured programs
              </button>
              <button className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5">
                Watch demo
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats?.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-sm text-slate-400">Featured experience</div>
                    <div className="mt-1 text-xl font-semibold">
                      Find the right course faster
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">
                    Redesigned search-first flow
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/80 p-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
                    Search courses, webinars, and digital products...
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {featuredCourses?.map((course) => (
                    <div
                      key={course.id}
                      className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30 hover:bg-white/[0.07] sm:grid-cols-[88px_1fr_auto] sm:items-center"
                    >
                      <div className="h-20 rounded-2xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-500/30" />
                      <div>
                        <div className="mb-2 inline-flex rounded-full border border-white/10 px-2 py-1 text-xs text-slate-300">
                          {course.tag}
                        </div>
                        <div className="text-base font-medium">{course.title}</div>
                        <div className="mt-1 text-sm text-slate-400">{course.subtitle}</div>
                      </div>
                      <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
                        <div className="text-base font-semibold">{course.price}</div>
                        <button className="mt-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="webinars" className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars?.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300/30 to-violet-400/30" />
                <h3 className="text-xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Social proof
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Trust-building elements that the current page underplays
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials?.map((item) => (
              <div
                key={item.id}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-slate-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}