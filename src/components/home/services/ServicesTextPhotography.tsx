export default function ServicesTextPhotography() {
  return (
    <div className="flex min-w-128 flex-col items-start justify-center gap-8">
      <div className="relative flex h-24 gap-10 overflow-hidden py-2">
        <h2 className="p-0 text-6xl leading-[0.7] text-primary transition-all duration-300 hover:text-accent">
          Photo
        </h2>
        <div className="absolute left-1/2 top-1/2 h-64 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-accent" />
        <h2 className="mt-auto p-0 text-right text-6xl leading-[0.7] text-primary transition-all duration-300 hover:text-accent">
          Video
        </h2>
      </div>
      <div className="text-justify">
        <p className="text-lg">— portraits</p>
        <p className="text-lg">— events</p>
        <p className="text-lg">— products</p>
        <div className="ml-20 mt-4">
          <p className="transition-all duration-300 hover:translate-x-2">
            portrait and reportage sessions
          </p>
          <p className="ml-4 transition-all duration-300 hover:translate-x-2">
            focused on{" "}
            <span className="inline-block bg-offwhite">
              &nbsp;natural&nbsp;
            </span>{" "}
            beauty and light
          </p>
        </div>
      </div>
    </div>
  );
}
