import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { MapPin, Phone, Clock } from 'lucide-react';
import { insertReservationSchema } from '@shared/schema';

const formSchema = insertReservationSchema.extend({
  guests: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

export function Reservation() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: '',
    },
  });

  const reservationMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest('POST', '/api/reservations', {
        ...data,
        guests: parseInt(data.guests),
      });
    },
    onSuccess: () => {
      toast({
        title: 'Reservation Submitted!',
        description: 'We\'ll contact you shortly to confirm your booking.',
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: 'Reservation Failed',
        description: error.message || 'Please check your information and try again.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: FormData) => {
    reservationMutation.mutate(data);
  };

  return (
    <section id="reservation" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Reserve Your Table
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Book your table now
            and let us take care of the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-card p-8 rounded-2xl shadow-lg space-y-6"
              data-testid="form-reservation"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="text"
                          className="w-full h-12 px-4 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          data-testid="input-name"
                          placeholder="John Doe"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          className="w-full h-12 px-4 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          data-testid="input-email"
                          placeholder="john@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="tel"
                          className="w-full h-12 px-4 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          data-testid="input-phone"
                          placeholder="(555) 123-4567"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="guests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Guests *</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          className="w-full h-12 px-4 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          data-testid="select-guests"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num.toString()}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date *</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="date"
                          className="w-full h-12 px-4 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          data-testid="input-date"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time *</FormLabel>
                      <FormControl>
                        <input
                          {...field}
                          type="time"
                          className="w-full h-12 px-4 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          data-testid="input-time"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Dietary restrictions, special occasions, etc."
                        data-testid="textarea-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={reservationMutation.isPending}
                data-testid="button-submit-reservation"
              >
                {reservationMutation.isPending ? 'Submitting...' : 'Reserve Table'}
              </Button>
            </form>
          </Form>

          <div className="space-y-6">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-foreground/70">
                    Gachibowli Main Road
                    <br />
                    Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Contact
                  </h3>
                  <p className="text-foreground/70">
                    Phone: +91 98765 43210
                    <br />
                    Email: info@cafesouthindian.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Hours
                  </h3>
                  <div className="text-foreground/70">
                    <p className="mb-1">Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p className="mb-1">Saturday: 10:00 AM - 11:00 PM</p>
                    <p>Sunday: 10:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Visit Us Today
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Whether you're celebrating a special occasion or simply craving
                authentic South Indian cuisine, we're here to make your dining
                experience memorable.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Walk-ins are welcome, but we recommend making a reservation to
                ensure we have a table ready for you, especially during peak
                hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
