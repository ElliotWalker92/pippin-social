export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  budget: string;
};

export type ContactFormErrors = Partial<
  Record<Exclude<keyof ContactFormData, "budget">, string>
>;

export const budgetOptions = [
  "Not sure yet",
  "Under £1,000 per month",
  "£1,000–£2,500",
  "£2,500–£5,000",
  "£5,000+",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: ContactFormData
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please add your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please add your email.";
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }

  if (!data.company.trim()) {
    errors.company = "Please add your company.";
  }

  if (!data.message.trim()) {
    errors.message = "Let us know what you need help with.";
  }

  return errors;
}
