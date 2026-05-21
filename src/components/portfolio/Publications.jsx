export default function Publications() {
  return (
    <section id="publications" className="py-24 bg-yellow border-y-2 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.3em] border-2 border-ink bg-ink text-cream px-3 py-1 inline-block">
            005 — Publications
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl text-ink mb-6">
              RESEARCH
              <br />
              PUBLISHED
            </h2>
            <p className="font-mono text-sm text-ink/50 uppercase tracking-widest mb-8">
              IEEE International Conference 2025
            </p>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Traffic Prediction', 'Urban Planning', 'IEEE 2025'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs border-2 border-ink px-3 py-1.5 uppercase tracking-wider bg-ink text-yellow"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Paper card */}
          <div className="border-2 border-ink bg-cream shadow-brutal-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <span className="font-syne font-black text-6xl text-ink/10 leading-none select-none">¶</span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-3">
                  DOI: 10.1109/ICCoSD66074.2025.11348535
                </p>
                <h3 className="font-syne font-black text-lg md:text-xl uppercase leading-tight mb-4 text-ink">
                  Multi-Class Traffic Flow Prediction with Machine Learning for Urban Planning Applications
                </h3>
                <p className="font-grotesk text-sm text-ink/65 leading-relaxed">
                  Yash Sarda, Shriya Sinha,{' '}
                  <strong className="text-ink underline decoration-yellow decoration-2">
                    Shubham Sharma
                  </strong>
                  , Payal Saini, Shubham Garg, Ashis Tripathy.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-ink pt-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">Venue</p>
                <p className="font-grotesk font-semibold text-sm text-ink mt-0.5">
                  ICCoSD 2025 · Ranchi, India
                </p>
              </div>
              <a
                href="https://doi.org/10.1109/ICCoSD66074.2025.11348535"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-dark !text-xs !py-2"
              >
                View Paper ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
