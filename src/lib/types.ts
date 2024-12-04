import { z } from "zod";

export type Note = {
  uid: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

// export type NoteFormPayload = Pick<Note, "title" | "content">;

export const noteFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export type NoteFormValues = z.infer<typeof noteFormSchema>;
