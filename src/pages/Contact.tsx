import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram, Facebook, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé", description: "Merci pour votre message. Je vous répondrai dans les meilleurs délais." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-14 fade-in-up">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">Contact</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une question ? N'hésitez pas à me contacter.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            <a href="mailto:contact@margot-sophrologie.fr" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} /> contact@margot-sophrologie.fr
            </a>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/les_pauses_sophro_de_margot/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100089760737215&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 shadow-soft space-y-6">
            <div>
              <Label htmlFor="name" className="text-foreground">Nom</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Votre nom"
                required
                className="mt-2 bg-warm-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="votre@email.fr"
                required
                className="mt-2 bg-warm-white"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message..."
                rows={5}
                required
                className="mt-2 bg-warm-white resize-none"
              />
            </div>
            <Button type="submit" variant="default" size="lg" className="w-full">
              <Send size={16} /> Envoyer le message
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
