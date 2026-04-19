import { useState } from "react";

interface Props {
  labels: {
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ labels }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!validateForm()) return;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} class="space-y-6">
      {status === "success" && (
        <div class="p-4 bg-green-100 text-green-800 rounded-lg">{labels.success}</div>
      )}

      {status === "error" && (
        <div class="p-4 bg-red-100 text-red-800 rounded-lg">{labels.error}</div>
      )}

      <div>
        <label htmlFor="name" class="block text-sm font-medium mb-2 text-dark">
          {labels.name}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          class={`w-full px-4 py-3 rounded-lg border ${
            errors.name ? "border-red-500" : "border-gray-200"
          } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors`}
        />
        {errors.name && <p class="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" class="block text-sm font-medium mb-2 text-dark">
          {labels.email}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          class={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-200"
          } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors`}
        />
        {errors.email && <p class="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" class="block text-sm font-medium mb-2 text-dark">
          {labels.message}
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          class={`w-full px-4 py-3 rounded-lg border resize-none ${
            errors.message ? "border-red-500" : "border-gray-200"
          } focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors`}
        />
        {errors.message && <p class="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        class="w-full md:w-auto px-8 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primaryDark transition-colors"
      >
        {labels.submit}
      </button>
    </form>
  );
}
