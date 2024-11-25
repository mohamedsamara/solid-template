import { createSignal } from "solid-js";
import { ZodError, ZodTypeAny } from "zod";

type ValidationErrors<T> = {
  [K in keyof T]?: string;
};

export const useForm = <T extends object>(
  initialValues: T,
  schema: ZodTypeAny
) => {
  const [formValues, setFormValues] = createSignal<T>(initialValues);
  const [errors, setErrors] = createSignal<ValidationErrors<T>>({});
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [isDirty, setIsDirty] = createSignal(false);
  const [isValid, setIsValid] = createSignal(false);

  const handleChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues((prev) => {
      const newValues = { ...prev, [name]: value };
      const validationResult = schema.safeParse(newValues);

      setIsDirty(true);

      validationResult.error?.errors;
      if (!validationResult.success) {
        const errors = extractErrors(validationResult.error);
        setErrors(errors as {});
        setIsValid(false);
      } else {
        setErrors({});
        setIsValid(true);
      }
      return newValues;
    });
  };

  const handleSubmit = (submitCallback: (data: T) => void) => (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationResult = schema.safeParse(formValues());
    if (validationResult.success) {
      submitCallback(formValues());
      setErrors({});
    } else {
      const errors = extractErrors(validationResult.error);
      setErrors(errors as {});
    }
    setIsSubmitting(false);
  };

  const extractErrors = (error: ZodError<any>) => {
    const errors = error.errors.reduce((acc, error) => {
      const path = error.path.join(".");
      acc[path as keyof T] = error.message;
      return acc;
    }, {} as ValidationErrors<T>);
    return errors;
  };

  const reset = () => {
    setFormValues(initialValues as any);
    setErrors({});
    setIsValid(false);
    setIsDirty(false);
    setIsSubmitting(false);
  };

  return {
    formValues,
    errors,
    isSubmitting,
    isDirty,
    isValid,
    handleChange,
    handleSubmit,
    reset,
  };
};
