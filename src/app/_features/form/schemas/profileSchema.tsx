import { z } from "zod";

export const profileFormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
    }),
    confirmPassword: z.string(),
    bio: z.string().max(160, {
        message: "Bio cannot be longer than 160 characters.",
    }).optional(),
    location: z.string().optional(),
    birthDate: z.string().optional(),
    gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
        message: "Please select a valid gender option.",
    }),
    profileVisibility: z.enum(["public", "friends-only", "private"], {
        message: "Please select a valid visibility option.",
    }),
    interests: z.array(z.string()).optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

// Define available interests
export const interestOptions = [
    { id: "technology", label: "Technology" },
    { id: "sports", label: "Sports" },
    { id: "arts", label: "Arts" },
    { id: "music", label: "Music" },
    { id: "food", label: "Food" },
    { id: "travel", label: "Travel" },
    { id: "gaming", label: "Gaming" },
    { id: "books", label: "Books" },
];

export type ProfileFormValues = z.infer<typeof profileFormSchema>;