import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { companyDetails } from '../../data/company';

export interface InquiryFormProps {
  title?: string;
  subtitle?: string;
  defaultProductOrService?: string;
  isUkPage?: boolean;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  title = 'Send an Inquiry',
  subtitle = 'Fill in your details below. Our Mumbai workshop team responds to all inquiries within 24 hours.',
  defaultProductOrService = '',
  isUkPage = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: isUkPage ? 'United Kingdom' : 'India',
    serviceInterestedIn: defaultProductOrService,
    isStudioSample: false,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if defaultProductOrService changes externally
  useEffect(() => {
    if (defaultProductOrService) {
      setFormData((prev) => ({ ...prev, serviceInterestedIn: defaultProductOrService }));
    }
  }, [defaultProductOrService]);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.';
        if (value.trim().length < 2) return 'Full Name must be at least 2 characters.';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone Number is required.';
        // Basic phone validation: digits, optional leading +, length 7 to 16
        const phoneClean = value.replace(/[\s\-\(\)]/g, '');
        if (!/^\+?[0-9]{7,16}$/.test(phoneClean)) {
          return 'Please enter a valid phone number (at least 7 digits).';
        }
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'country':
        if (!value.trim()) return 'Country is required.';
        return '';
      case 'serviceInterestedIn':
        if (!value.trim()) return 'Please select a service or product.';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 8) return 'Please provide a few more details in your message.';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData] as string);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field] && typeof value === 'string') {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const fields = ['fullName', 'phone', 'email', 'country', 'serviceInterestedIn', 'message'];
    const newTouched: Record<string, boolean> = {};
    const newErrors: Record<string, string> = {};
    let hasError = false;

    fields.forEach((f) => {
      newTouched[f] = true;
      const error = validateField(f, formData[f as keyof typeof formData] as string);
      if (error) {
        newErrors[f] = error;
        hasError = true;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (hasError) return;

    // Trigger loading state
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 700);
  };

  // Prepare mailto and WhatsApp payloads
  const formattedSubject = encodeURIComponent(
    `Inquiry: ${formData.serviceInterestedIn || 'General'} - ${formData.fullName}`
  );
  const formattedBody = encodeURIComponent(
    `Hello Ultraa Albums Studio Team,\n\n` +
      `I would like to inquire about: ${formData.serviceInterestedIn}\n\n` +
      `My Details:\n` +
      `- Name: ${formData.fullName}\n` +
      `- Phone: ${formData.phone}\n` +
      `- Email: ${formData.email}\n` +
      `- Country: ${formData.country}\n` +
      (formData.isStudioSample ? `- Note: Requesting 10% Studio Sample Discount\n` : '') +
      `\nMessage Details:\n${formData.message}\n\n` +
      `Warm regards,\n${formData.fullName}`
  );

  const mailtoUrl = `mailto:${companyDetails.emails[0]}?cc=${companyDetails.emails[1]}&subject=${formattedSubject}&body=${formattedBody}`;
  const whatsappUrl = `https://wa.me/919322254315?text=${formattedBody}`;

  const summaryText =
    `Ultraa Albums Inquiry\n` +
    `Name: ${formData.fullName}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Country: ${formData.country}\n` +
    `Service: ${formData.serviceInterestedIn}\n` +
    `Message: ${formData.message}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // SUCCESS STATE (Accurate, transparent, non-fictional)
  if (isSuccess) {
    return (
      <div className="bg-white border border-charcoal/10 p-8 sm:p-12 rounded-sm shadow-card max-w-xl mx-auto text-center space-y-6">
        <div className="w-14 h-14 bg-ivory rounded-full flex items-center justify-center mx-auto border border-charcoal/10">
          <CheckCircle2 className="w-7 h-7 text-charcoal" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Inquiry Prepared
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
            Your Details Are Ready to Send
          </h3>
          <p className="text-xs text-secondary leading-relaxed max-w-md mx-auto">
            Because this inquiry operates directly in your browser without a remote database, click below to dispatch your verified message directly to Rajiv, Mayank & Bhairavi via your default mail client or WhatsApp:
          </p>
        </div>

        {/* Verification Summary Card */}
        <div className="bg-ivory border border-charcoal/10 p-5 rounded-sm text-left text-xs space-y-1.5 font-light text-secondary">
          <div><strong className="text-charcoal font-medium">Name:</strong> {formData.fullName}</div>
          <div><strong className="text-charcoal font-medium">Contact:</strong> {formData.phone} · {formData.email}</div>
          <div><strong className="text-charcoal font-medium">Country:</strong> {formData.country}</div>
          <div><strong className="text-charcoal font-medium">Service / Product:</strong> {formData.serviceInterestedIn}</div>
          <div className="pt-1.5 border-t border-charcoal/10">
            <strong className="text-charcoal font-medium">Message:</strong> {formData.message}
          </div>
        </div>

        {/* Dispatch Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={mailtoUrl}
            className="btn-luxury-primary text-xs flex items-center justify-center gap-2 py-3 px-5"
          >
            <Mail className="w-4 h-4" />
            <span>Send via Email Client</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-secondary text-xs flex items-center justify-center gap-2 py-3 px-5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 border-t border-charcoal/10 text-xs text-secondary">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 hover:text-charcoal transition-colors underline"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-secondary" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Inquiry Summary'}</span>
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="hover:text-charcoal transition-colors underline"
          >
            Edit Inquiry Form
          </button>
        </div>
      </div>
    );
  }

  // DEFAULT FORM STATE
  return (
    <div className="bg-white border border-charcoal/10 p-8 sm:p-10 rounded-sm shadow-card max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[10px] uppercase tracking-luxury font-medium text-secondary">
          {isUkPage ? 'UK & International Studio Inquiries' : 'Get In Touch With Ultraa Albums'}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal mt-1">
          {title}
        </h3>
        <p className="text-xs text-secondary mt-2 max-w-md mx-auto">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-subtle font-medium text-charcoal mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              onBlur={() => handleBlur('fullName')}
              placeholder="e.g. Eleanor Vance"
              className={`w-full px-3.5 py-2.5 text-xs bg-ivory/50 border transition-colors focus:bg-white focus:outline-none ${
                touched.fullName && errors.fullName
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-charcoal/15 focus:border-charcoal'
              }`}
            />
            {touched.fullName && errors.fullName && (
              <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-subtle font-medium text-charcoal mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              placeholder="+91-93222 54315 or +44..."
              className={`w-full px-3.5 py-2.5 text-xs bg-ivory/50 border transition-colors focus:bg-white focus:outline-none ${
                touched.phone && errors.phone
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-charcoal/15 focus:border-charcoal'
              }`}
            />
            {touched.phone && errors.phone && (
              <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-subtle font-medium text-charcoal mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="studio@example.com"
              className={`w-full px-3.5 py-2.5 text-xs bg-ivory/50 border transition-colors focus:bg-white focus:outline-none ${
                touched.email && errors.email
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-charcoal/15 focus:border-charcoal'
              }`}
            />
            {touched.email && errors.email && (
              <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-subtle font-medium text-charcoal mb-1">
              Country *
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => handleChange('country', e.target.value)}
              onBlur={() => handleBlur('country')}
              placeholder="India, United Kingdom, USA, etc."
              className={`w-full px-3.5 py-2.5 text-xs bg-ivory/50 border transition-colors focus:bg-white focus:outline-none ${
                touched.country && errors.country
                  ? 'border-rose-400 focus:border-rose-500'
                  : 'border-charcoal/15 focus:border-charcoal'
              }`}
            />
            {touched.country && errors.country && (
              <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.country}</span>
              </p>
            )}
          </div>
        </div>

        {/* Service Interested In */}
        <div>
          <label className="block text-[11px] uppercase tracking-subtle font-medium text-charcoal mb-1">
            Service Interested In *
          </label>
          <select
            value={formData.serviceInterestedIn}
            onChange={(e) => handleChange('serviceInterestedIn', e.target.value)}
            onBlur={() => handleBlur('serviceInterestedIn')}
            className={`w-full px-3.5 py-2.5 text-xs bg-ivory/50 border transition-colors focus:bg-white focus:outline-none ${
              touched.serviceInterestedIn && errors.serviceInterestedIn
                ? 'border-rose-400 focus:border-rose-500'
                : 'border-charcoal/15 focus:border-charcoal'
            }`}
          >
            <option value="">Select a service or product...</option>
            <optgroup label="Album Collections">
              <option value="Flush Mount Album">Flush Mount Album</option>
              <option value="Layflat Albums">Layflat Album</option>
              <option value="Photo Book">Photo Book</option>
              <option value="Luxury Albums & Wooden Casket">Luxury Album & Wooden Casket</option>
              <option value="Boxes and Bags">Boxes & Bags / Buckram Cases</option>
              <option value="Slip-In Pocket Albums">Slip-In Pocket Albums</option>
            </optgroup>
            <optgroup label="Studio Services">
              <option value="Album Designing (Free Revisions)">Bespoke Album Designing</option>
              <option value="Image Editing (Free RAW Sample)">Image Editing & Retouching</option>
              <option value="Wedding Photography & Cinema">Wedding Photography & Cinema</option>
            </optgroup>
            <optgroup label="United Kingdom Collection">
              <option value="Flush Mount Album (UK)">Flush Mount Album (UK)</option>
              <option value="Luxury Albums (UK)">Luxury Albums (UK)</option>
              <option value="Box and Bags (UK)">Box and Bags (UK)</option>
              <option value="Slip-In Albums (UK)">Slip-In Albums (UK)</option>
              <option value="Image Editing (UK)">Image Editing (UK)</option>
              <option value="Photo Book (UK)">Photo Book (UK)</option>
              <option value="Photography (UK)">Photography (UK)</option>
            </optgroup>
          </select>
          {touched.serviceInterestedIn && errors.serviceInterestedIn && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.serviceInterestedIn}</span>
            </p>
          )}
        </div>

        {/* Studio Sample Checkbox */}
        <div className="flex items-center gap-2 py-1">
          <input
            type="checkbox"
            id="studioSample"
            checked={formData.isStudioSample}
            onChange={(e) => handleChange('isStudioSample', e.target.checked)}
            className="rounded border-charcoal/20 text-charcoal focus:ring-0"
          />
          <label htmlFor="studioSample" className="text-xs text-secondary cursor-pointer">
            I am a professional photographer inquiring for a <strong>10% Studio Sample</strong> discount
          </label>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11px] uppercase tracking-subtle font-medium text-charcoal mb-1">
            Message *
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            placeholder="Tell us about your album format, number of spreads, cover preference, or custom instructions..."
            className={`w-full px-3.5 py-2.5 text-xs bg-ivory/50 border transition-colors focus:bg-white focus:outline-none resize-none ${
              touched.message && errors.message
                ? 'border-rose-400 focus:border-rose-500'
                : 'border-charcoal/15 focus:border-charcoal'
            }`}
          />
          {touched.message && errors.message && (
            <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn-luxury-primary w-full py-3.5 text-xs mt-2 flex items-center justify-center gap-2 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Verifying Details...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry / Request Quote</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
