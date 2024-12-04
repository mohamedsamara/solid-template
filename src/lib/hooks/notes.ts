import { v4 as uuidv4 } from "uuid";

import { notes, setNotes } from "lib/stores";
import { Note, NoteFormValues } from "lib/types";

export const useNotes = () => {
  const addNote = (note: NoteFormValues) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        uid: uuidv4(),
        ...note,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);
  };

  const removeNote = (uid: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.uid !== uid));
  };

  const udpateNote = (note: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.uid === note.uid ? { ...n, ...note } : n))
    );
  };

  return {
    notes,
    addNote,
    removeNote,
    udpateNote,
  };
};
