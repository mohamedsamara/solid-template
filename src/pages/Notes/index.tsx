import { Component, createSignal, For, Show } from "solid-js";

import { useNotes } from "lib/hooks";
import { Note } from "lib/types";
import Button from "components/Button";
import AddNoteForm from "./AddNoteForm";
import NoteItem from "./NoteItem";
import EditNoteForm from "./EditNoteForm";

const Notes: Component = () => {
  const [editNoteDialog, setEditNoteDialog] = createSignal<{
    note: Note | null;
    isOpen: boolean;
  }>({ note: null, isOpen: false });
  const { notes, removeNote } = useNotes();

  return (
    <main class="flex flex-col h-full overflow-auto pt-10 pb-[5rem]">
      <div class="container p-4 mx-auto">
        <AddNoteForm />
        <div class="mt-8">
          <h3 class="mb-2">Notes</h3>
          {notes.length > 0 ? (
            <For each={notes}>
              {(note) => (
                <li class="p-4 border rounded-lg shadow-sm list-none mt-4">
                  <NoteItem note={note} />
                  <div class="flex justify-end">
                    <Button
                      color="warning"
                      onClick={() => setEditNoteDialog({ isOpen: true, note })}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => removeNote(note.uid)}
                      class="ml-2"
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              )}
            </For>
          ) : (
            <p class="text-slate-600">No notes found.</p>
          )}
        </div>
      </div>
      <Show when={!!editNoteDialog().note}>
        <EditNoteForm
          note={editNoteDialog().note as Note}
          isOpen={editNoteDialog().isOpen}
          onClose={() => setEditNoteDialog({ note: null, isOpen: false })}
        />
      </Show>
    </main>
  );
};

export default Notes;
