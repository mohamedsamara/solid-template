import { Component } from "solid-js";
import { z } from "zod";

import { useForm } from "lib/hooks";
import ErrorMessage from "components/ErrorMessage";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import Button from "components/Button";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

const Notes: Component = () => {
  const {
    formValues,
    errors,
    isSubmitting,
    isDirty,
    isValid,
    handleChange,
    handleSubmit,
    reset,
  } = useForm({ title: "", content: "" }, formSchema);
  const isFormDisabled = () => !isValid() || isSubmitting() || !isDirty();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("values", values);
    } catch (error) {
      console.log("error", error);
    } finally {
      reset();
    }
  };

  return (
    <main class="flex flex-col h-screen overflow-auto">
      <div class="container p-4 mx-auto my-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          class="px-8 py-10 bg-white border rounded-md"
        >
          <h2 class="mb-10">Add Note</h2>
          <div class="space-y-2 mb-6">
            <label for="title">Title</label>
            <Input
              id="title"
              name="title"
              type="text"
              value={formValues().title}
              onInput={handleChange}
            />

            <ErrorMessage error={errors().title ?? ""} />
          </div>
          <div class="space-y-2">
            <label for="content">Content</label>
            <Textarea
              id="content"
              name="content"
              value={formValues().content}
              onInput={handleChange}
            />
            <ErrorMessage error={errors().content ?? ""} />
          </div>
          <div class="flex gap-3 justify-end mt-10">
            <Button type="submit" disabled={isFormDisabled()}>
              Submit
            </Button>
            <Button
              variant="outline"
              disabled={isFormDisabled()}
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Notes;
