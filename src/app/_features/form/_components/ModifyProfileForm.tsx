'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  profileFormSchema,
  interestOptions,
  type ProfileFormValues,
} from '../schemas/profileSchema';

interface ProfileFormProps {
  onSubmitSuccess?: (values: ProfileFormValues) => void;
  id: string;
}

export function ModifyProfileForm({ onSubmitSuccess, id }: ProfileFormProps) {
  console.log(id);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: id,
      fullName: 'NAME',
      email: 'EMAIL',
      password: 'PASS',
      confirmPassword: 'PASS',
      bio: 'BLABLA',
      location: 'LOC',
      birthDate: '2003-10-10',
      gender: 'male',
      profileVisibility: 'public',
      interests: ['food'],
    },
  });

  function onSubmit(values: ProfileFormValues) {
    console.log('Profile form submitted:', values);
    if (onSubmitSuccess) {
      onSubmitSuccess(values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe' {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
                </FormControl>
                <FormDescription>
                  Your real name or the name you prefer to be called.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='johndoe@example.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <FormDescription>
                  Must be at least 8 characters with mixed case and numbers.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type='password' {...field} />
                </FormControl>
                <FormDescription>
                  Repeat your password to confirm.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us a little about yourself'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>Keep it under 160 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder='City, Country' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='birthDate'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Date</FormLabel>
                <FormControl>
                  <Input type='date' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='male' />
                      </FormControl>
                      <FormLabel className='font-normal'>Male</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='female' />
                      </FormControl>
                      <FormLabel className='font-normal'>Female</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='other' />
                      </FormControl>
                      <FormLabel className='font-normal'>Other</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='prefer-not-to-say' />
                      </FormControl>
                      <FormLabel className='font-normal'>
                        Prefer not to say
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='profileVisibility'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Visibility</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select visibility' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='public'>Public</SelectItem>
                    <SelectItem value='friends-only'>Friends Only</SelectItem>
                    <SelectItem value='private'>Private</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Who can view your profile information
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='interests'
          render={() => (
            <FormItem>
              <div className='mb-4'>
                <FormLabel className='text-base'>Interests</FormLabel>
                <FormDescription>
                  Select the interests to personalize your profile
                </FormDescription>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {interestOptions.map((interest) => (
                  <FormField
                    key={interest.id}
                    control={form.control}
                    name='interests'
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={interest.id}
                          className='flex flex-row items-start space-x-3 space-y-0'
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(interest.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([
                                      ...(field.value || []),
                                      interest.id,
                                    ])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== interest.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>
                            {interest.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          Continue to API Setup
        </Button>
      </form>
    </Form>
  );
}
