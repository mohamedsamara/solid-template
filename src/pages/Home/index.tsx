import Link from "components/Link";

const Home = () => {
  return (
    <main class="flex flex-col h-full overflow-auto">
      <div class="flex flex-col items-center justify-center min-h-screen container p-4 mx-auto">
        <div class="flex flex-col items-center justify-center max-w-2xl p-10 text-center bg-white rounded-lg border">
          <h3 class="mb-4 text-slate-800">Solid Template</h3>
          <p class="mb-6 text-lg text-slate-600">
            A simple notes application built with Solid JS. Create, view, edit
            and delete notes.
          </p>
          <Link href="/notes">Go to Notes</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
