import { Component, Show } from "solid-js";

import { useForm } from "lib/hooks";
import { noteFormSchema, NoteFormValues } from "lib/types";
import ErrorMessage from "components/ErrorMessage";
import { Input } from "components/Input";
import { Textarea } from "components/Textarea";
import Button from "components/Button";

type Props = {
  editMode?: boolean;
  initialValues?: NoteFormValues;
  onDone: (values: NoteFormValues) => void;
};

const NoteForm: Component<Props> = (props) => {
  const {
    formValues,
    errors,
    isSubmitting,
    isDirty,
    isValid,
    handleChange,
    handleSubmit,
    reset,
  } = useForm(
    props.initialValues ?? { title: "", content: "" },
    noteFormSchema
  );
  const isFormDisabled = () => !isValid() || isSubmitting() || !isDirty();

  const onSubmit = async (values: NoteFormValues) => {
    try {
      props.onDone(values);
    } catch (error) {
      console.log("error", error);
    } finally {
      if (!props.editMode) reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="space-y-2 mb-6">
        <label class="font-medium text-slate-600" for="title">
          Title
        </label>
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
        <label class="font-medium text-slate-600" for="content">
          Content
        </label>
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
          {props.editMode ? "Save" : "Submit"}
        </Button>
        <Show when={!props.editMode}>
          <Button variant="outline" disabled={isFormDisabled()} onClick={reset}>
            Reset
          </Button>
        </Show>
      </div>
    </form>
  );
};

export default NoteForm;
