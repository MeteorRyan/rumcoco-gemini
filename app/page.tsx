import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-charcoal text-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Header or Nav could go here */}
      </div>

      <div className="relative flex place-items-center flex-col gap-8">
        <h1 className="text-6xl font-bold text-neon-pink tracking-tighter">
          RumCoCo
        </h1>
        <p className="text-xl text-gray-300 max-w-md text-center">
          Compliance, Finance, & Operations OS for the Florida/Caribbean markets.
        </p>

        <Button className="text-lg px-8 py-6 bg-palm-green hover:bg-[#3d7d22] text-white font-bold rounded-full shadow-[0_0_15px_rgba(76,154,42,0.5)] transition-all hover:shadow-[0_0_25px_rgba(76,154,42,0.8)]">
          Get Legit
        </Button>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-20 gap-8">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neon-pink/20 hover:bg-white/5">
          <h2 className={`mb-3 text-2xl font-semibold text-neon-pink`}>
            Compliance{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Automated filing and regulatory tracking.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neon-pink/20 hover:bg-white/5">
          <h2 className={`mb-3 text-2xl font-semibold text-neon-pink`}>
            Finance{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Integrated bookkeeping and forecasting.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neon-pink/20 hover:bg-white/5">
          <h2 className={`mb-3 text-2xl font-semibold text-neon-pink`}>
            Operations{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Streamlined workflow and inventory management.
          </p>
        </div>
      </div>
    </main>
  );
}
