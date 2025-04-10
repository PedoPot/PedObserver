import { z } from "zod"

export const apiCredentialsFormSchema = z.object({
    apiKey: z.string().min(1, {
        message: "API Key is required.",
    }),
    apiSecret: z.string().min(1, {
        message: "If provided, API Secret cannot be empty.",
    }).optional().or(z.literal('')),
    apiEndpoint: z.string().url({
        message: "Please enter a valid API endpoint URL.",
    }).optional().or(z.literal('')),
    apiService: z.string({
        required_error: "Please select an API service.",
    }),
})

export type ApiCredentialsFormValues = z.infer<typeof apiCredentialsFormSchema>