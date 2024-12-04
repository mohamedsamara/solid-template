import { createStore } from "solid-js/store";

import { Note } from "lib/types";

const [notes, setNotes] = createStore<Note[]>([]);

export { notes, setNotes };
