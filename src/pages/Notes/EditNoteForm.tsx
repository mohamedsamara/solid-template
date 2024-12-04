import { Note, NoteFormValues } from "lib/types";
import { useNotes } from "lib/hooks";
import Dialog from "components/Dialog";
import NoteForm from "./NoteForm";

type Props = {
  note: Note;
  isOpen: boolean;
  onClose: () => void;
};

const EditNoteForm = (props: Props) => {
  const { udpateNote } = useNotes();

  const onSubmit = async (values: NoteFormValues) => {
    const updatedNote = {
      ...props.note,
      ...values,
    };
    await udpateNote(updatedNote);
    props.onClose();
  };

  return (
    <Dialog isOpen={props.isOpen} onClose={props.onClose} title="Edit Note">
      <NoteForm
        editMode
        initialValues={{
          title: props.note.title,
          content: props.note.content,
        }}
        onDone={onSubmit}
      />
    </Dialog>
  );
};

export default EditNoteForm;
