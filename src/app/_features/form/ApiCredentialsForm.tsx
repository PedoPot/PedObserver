"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
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

export function ApiCredentialsForm({ onSubmitSuccess }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            apiKey: "",
            apiSecret: "",
            apiEndpoint: "",
            apiService: "",
        },
    })

    function onSubmit(values) {
        console.log("API form submitted:", values);

        // Call the callback if it exists
        if (onSubmitSuccess) {
            onSubmitSuccess(values);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="apiService"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>API Service</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an API service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="telegram">Telegram</SelectItem>
                                    <SelectItem value="discord">Discord</SelectItem>
                                    <SelectItem value="twitter">Twitter</SelectItem>
                                    <SelectItem value="instagram">Instagram</SelectItem>
                                    <SelectItem value="custom">Other (Custom)</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Select the service you want to connect to
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="apiKey"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>API Key</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your API key" {...field} />
                            </FormControl>
                            <FormDescription>
                                The public key for authenticating with the API
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="apiSecret"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>API Secret</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your API secret" type="password" {...field} />
                            </FormControl>
                            <FormDescription>
                                Keep this secret secure - it's like a password for your API
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="apiEndpoint"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>API Endpoint (Optional)</FormLabel>
                            <FormControl>
                                <Input placeholder="https://api.example.com/v1" {...field} />
                            </FormControl>
                            <FormDescription>
                                The URL where API requests will be sent
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">Complete Registration</Button>
            </form>
        </Form>
    )
}
