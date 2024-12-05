import { Component } from "solid-js";

import { Note } from "lib/types";
import { formatDateTimeString } from "lib/utils";

type Props = {
  note: Note;
};

const NoteItem: Component<Props> = ({ note }) => {
  const createdAt = formatDateTimeString(note.createdAt);
  const updatedAt = formatDateTimeString(note.updatedAt);

  return (
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h4 class="text-slate-900">{note.title}</h4>
      </div>
      <div class="space-y-2 text-slate-600">
        <p>{note.content}</p>
        <div>
          <span class="text-slate-900">{`uid `}</span>({note.uid})
        </div>
        <div>
          <span class="text-slate-900">{`Created at `}</span>({createdAt})
        </div>
        <div>
          <span class="text-slate-900">{`Updated at `}</span>({updatedAt})
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
