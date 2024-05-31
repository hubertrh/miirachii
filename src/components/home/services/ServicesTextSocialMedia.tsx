export default function ServicesTextSocialMedia() {
  return (
    <div className="flex min-w-128 flex-col items-start justify-center gap-8">
      <h2 className="text-6xl text-primary transition-all duration-300 hover:text-accent">
        Social Media
      </h2>
      <div className="text-justify">
        <p className="text-lg">— content creation</p>
        <p className="text-lg">— strategy</p>
        <div className="ml-20 mt-4">
          <p className="transition-all duration-300 hover:translate-x-2">
            delicate but powerful images
          </p>
          <p className="ml-4 transition-all duration-300 hover:translate-x-2">
            helping brands grow{" "}
            <span className="bg-offwhite">&nbsp;staying soft&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
