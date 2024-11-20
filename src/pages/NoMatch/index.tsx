import { A } from "@solidjs/router";

const NoMatch = () => {
  return (
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center space-y-6">
        <h4 class="font-bold text-xl">Page not found</h4>
        <p class="text-slate-600">
          Sorry, we could not find the page you are looking for.
        </p>
        <A color="secondary" href="/" class="btn-default">
          Go to home
        </A>
      </div>
    </div>
  );
};

export default NoMatch;
