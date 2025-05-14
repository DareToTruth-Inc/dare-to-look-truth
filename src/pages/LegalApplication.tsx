
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

const LegalApplication = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      specialization: "",
      barAssociation: "",
      yearsExperience: "",
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
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Legal Consultant Application</h1>
            <p className="text-lg text-muted-foreground">
              Join our team as a legal consultant and help us navigate the complexities of privacy, content moderation, and digital rights.
            </p>
          </div>

          <div className="bg-card rounded-lg border p-6 mb-10 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-primary">Position Description</h2>
            <p className="mb-4">
              As a legal consultant for DareToTruth, you'll help us navigate the complex legal landscape of privacy laws, terms of service, and content moderation for our authentic social platform. You'll work closely with our product and leadership teams to ensure compliance and protect user rights.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Responsibilities:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Advise on privacy and data protection regulations (GDPR, CCPA, etc.)</li>
                <li>Develop user consent frameworks and legal documentation</li>
                <li>Create and refine content moderation policies</li>
                <li>Ensure international compliance across various jurisdictions</li>
                <li>Support our mission of encouraging authentic online interactions</li>
              </ul>
            </div>
            <p>
              This position offers competitive compensation, flexible work arrangements, and the opportunity to shape ethical standards in social media.
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
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Legal Specialization*</FormLabel>
                        <FormControl>
                          <Input placeholder="Privacy Law, Digital Rights, etc." required {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="barAssociation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bar Association/License*</FormLabel>
                        <FormControl>
                          <Input placeholder="State Bar of California, etc." required {...field} />
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
                      <FormLabel>Years of Legal Experience*</FormLabel>
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
                      <FormLabel>Cover Letter / Statement of Interest*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your relevant experience and interest in digital privacy and content moderation..."
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

export default LegalApplication;
