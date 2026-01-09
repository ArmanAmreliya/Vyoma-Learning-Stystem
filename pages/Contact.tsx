import React from 'react';
import Section from '../components/SectionWrapper';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <Section>
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              For product inquiries, institutional partnerships, or general questions, 
              reach out to our team.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Section dark>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-light text-white mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-2">Office Address</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Vyoma Learning Systems Pvt. Ltd.<br />
                      i-Hub, KCG Campus<br />
                      University Area<br />
                      Ahmedabad – 380015<br />
                      Gujarat, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone size={24} className="text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-2">Phone</h3>
                    <p className="text-slate-400 text-sm">
                      +91 8780375687
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={24} className="text-blue-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-2">Email</h3>
                    <p className="text-slate-400 text-sm">
                      contact@vyoma.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="mb-6 text-white text-xl font-light">Inquiry Types</h3>
              <div className="space-y-4">
                <Card className="bg-white border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-slate-900">Institutional Partnerships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-sm">
                      Schools, colleges, and education organizations interested in platform 
                      integration and licensing.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-slate-900">Student Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-sm">
                      Individual students and parents seeking information about Curio and 
                      other products.
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium text-slate-900">Career Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-sm">
                      Professionals interested in employment or collaboration opportunities.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light text-slate-900 mb-6">Business Hours</h2>
            <p className="text-slate-600 mb-4 font-medium">
              Monday – Friday: 9:00 AM – 6:00 PM IST
            </p>
            <p className="text-slate-500 text-sm">
              We typically respond to inquiries within 24-48 hours during business days.
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default Contact;
