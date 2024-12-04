import { Component } from "solid-js";

import { useNotes } from "lib/hooks";
import { NoteFormValues } from "lib/types";
import NoteForm from "./NoteForm";

const AddNoteForm: Component = () => {
  const { addNote } = useNotes();

  const onSubmit = async (values: NoteFormValues) => {
    await addNote(values);
  };

  return (
    <div class="p-4 border rounded-lg shadow-sm">
      <h2 class="mb-6">Add Note</h2>
      <NoteForm onDone={onSubmit} />
    </div>
  );
};

export default AddNoteForm;
