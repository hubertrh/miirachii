export default function ServicesTextMain() {
  return (
    <div className="flex min-w-128 flex-col items-start justify-center gap-8">
      <h2 className="text-6xl text-primary transition-all duration-300 hover:text-accent">
        Services
      </h2>
      <div className="text-justify">
        <p className="mb-4 text-lg">I focus on three pillars:</p>
        <div className="ml-20">
          <p className="transition-all duration-300 hover:translate-x-2">
            evocative photography
          </p>
          <p className="ml-4 transition-all duration-300 hover:translate-x-2">
            lifestyle enhancement
          </p>
          <p className="ml-8 transition-all duration-300 hover:translate-x-2">
            engaging social media content
          </p>
        </div>
      </div>
    </div>
  );
}
