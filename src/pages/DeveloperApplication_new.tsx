
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
import { saveApplicationToFile } from 'formInfo';

const DeveloperApplication = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      portfolio: "",
      github: "",
      coverLetter: "",
      yearsExperience: "",
    },
  });

  const onSubmit = (data: any) => {
  const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
  const file = fileInput?.files?.[0];

  saveApplicationToFile(data, file);  

  toast({
    title: "Application Submitted",
    description: "Thank you for applying! Files have been saved locally.",
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Developer Application</h1>
            <p className="text-lg text-muted-foreground">
              Join our team of talented developers working on the next generation of authentic social media.
            </p>
          </div>

          <div className="bg-card rounded-lg border p-6 mb-10 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-primary">Job Description</h2>
            <p className="mb-4">
              As a developer at DareToTruth, you'll be working on creating cutting-edge features for our platform that encourages authentic social connections. You'll collaborate closely with our product, design, and data science teams to craft meaningful experiences.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Requirements:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>3+ years experience in frontend, backend, or mobile development</li>
                <li>Experience with React, React Native, or similar frameworks</li>
                <li>Knowledge of location-based services and social media platforms</li>
                <li>Strong focus on security, privacy, and performance</li>
                <li>Excellent communication and collaboration skills</li>
              </ul>
            </div>
            <p>
              This position offers competitive compensation, flexible work arrangements, and the opportunity to shape a product that's changing how people connect authentically.
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
                    name="portfolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourportfolio.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub Profile</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/yourusername" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="yearsExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience*</FormLabel>
                      <FormControl>
                        <Input type="number" required {...field} />
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
                      <FormLabel>Cover Letter / Additional Information*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you'd be a great fit for DareToTruth..."
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
                    <p className="mb-2 text-muted-foreground">Upload your CV/Resume (PDF, DOCX, max 5MB)*</p>
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

export default DeveloperApplication;
