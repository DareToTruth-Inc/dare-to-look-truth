import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const SignupSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Success!",
        description: "You've been added to our early access list.",
        variant: "default",
      });
      setEmail("");
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const form = document.getElementById("earlyAccessForm");
    form.addEventListener("submit", () => {
      alert("Thanks for signing up! We'll be in touch.");
    });
    // Return a cleanup function to remove the event listener
    return () => {
      form.removeEventListener("submit", () => {
        alert("Thanks for signing up! We'll be in touch.");
      });
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-primary" id="signup">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get Early Access</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Leave your email for early access & 1 month premium free
            </p>
          </div>

          <form id="earlyAccessForm" action="https://formspree.io/f/mwpowjeb" method="POST" className="space-y-6 max-w-md mx-auto">
            <input type="hidden" name="_redirect" value="https://daretotruth.ca/" />
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                className="h-12 text-base"
                required
              />
              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white h-12 px-6 btn-glow whitespace-nowrap"
              >
                Sign Up
              </Button>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Be among the first to experience authentic social connection and shape the future of DareToTruth.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gray-${i*100} border-2 border-white`}></div>
                  ))}
                </div>
                <span className="text-sm font-medium text-primary">
                  Join 2,000+ early adopters
                </span>
              </div>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-xl font-bold text-primary">1 Month Free</h4>
              <p className="text-muted-foreground">Premium features unlocked</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary">Priority Access</h4>
              <p className="text-muted-foreground">Get in before everyone else</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary">Feature Input</h4>
              <p className="text-muted-foreground">Help shape our roadmap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
