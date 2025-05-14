
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft } from 'lucide-react';

const InternApplication = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      school: "",
      major: "",
      graduationYear: "",
      coverLetter: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    toast({
      title: "Application Submitted",
      description: "Thank you for applying! We'll be in touch soon.",
    });
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Internship Application</h1>
            <p className="text-lg text-muted-foreground">
              Gain valuable experience working on the next generation of authentic social media.
            </p>
          </div>

          <div className="bg-card rounded-lg border p-6 mb-10 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-primary">Internship Description</h2>
            <p className="mb-4">
              As an intern at DareToTruth, you'll get hands-on experience in product development, marketing, and user research for our revolutionary authentic social platform. You'll work closely with experienced team members while contributing to real projects that impact our users.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">What You'll Learn:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>User growth strategies for social media platforms</li>
                <li>Content creation and community building</li>
                <li>Market research and Gen Z insights</li>
                <li>Product development and testing processes</li>
                <li>Startup operations and team collaboration</li>
              </ul>
            </div>
            <p>
              This internship offers a stipend, flexible hours, and the opportunity to shape a product that's changing how people connect authentically online.
            </p>
          </div>

          <div className="bg-card rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-primary">Application Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" required {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="school"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>School/University*</FormLabel>
                        <FormControl>
                          <Input placeholder="University of Innovation" required {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="major"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Major/Field of Study*</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science, Marketing, etc." required {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="graduationYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Expected Graduation Year*</FormLabel>
                      <FormControl>
                        <Input placeholder="2025" required {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter / Why are you interested?*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're interested in DareToTruth and what you hope to learn..."
                          className="min-h-[150px]"
                          required
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="border border-dashed border-border p-6 rounded-lg text-center">
                    <p className="mb-2 text-muted-foreground">Upload your Resume (PDF, DOCX, max 5MB)*</p>
                    <Input 
                      type="file" 
                      accept=".pdf,.docx" 
                      className="max-w-sm mx-auto"
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-accent text-white hover:bg-accent/90">
                    Submit Application
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternApplication;
