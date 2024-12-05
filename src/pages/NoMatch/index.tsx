import Link from "components/Link";

const NoMatch = () => {
  return (
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center space-y-6">
        <h4 class="font-bold text-xl">Page not found</h4>
        <p class="text-slate-600">
          Sorry, we could not find the page you are looking for.
        </p>
        <Link href="/" class="inline-flex">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
