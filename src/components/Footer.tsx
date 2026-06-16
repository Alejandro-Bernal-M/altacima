export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0A0F14] py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>
            <h3 className="font-bold">
              GODAI TRAINING
            </h3>

            <p className="text-sm text-zinc-500">
              Body • Mind • Spirit
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Alejandro Bernal.
            All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}