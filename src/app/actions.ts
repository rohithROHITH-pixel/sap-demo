"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  // In a real application, you would save this data to a database.
  // For this example, we'll just log it to the console.
  console.log("New contact form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for your message! We will get back to you soon.",
  };
}
