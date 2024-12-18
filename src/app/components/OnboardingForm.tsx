"use client";

import { useState } from 'react';
import type { NextPage } from 'next';

interface ClientData {
  name: string;
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  companyAddress: string;
  aboutCompany: string;
  websiteURL?: string;
  projectDetails?: string;
  brandColors?: string;
  logoFile?: File | null;
}

const OnboardingForm: NextPage = () => {
  const [formData, setFormData] = useState<ClientData>({
    name: '',
    companyName: '',
    contactEmail: '',
    contactPhone: '',
    companyAddress: '',
    aboutCompany: '',
    websiteURL: '',
    projectDetails: '',
    brandColors: '',
    logoFile: null,
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, logoFile: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add submission logic here (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow space-y-6">
      <h1 className="text-xl font-semibold mb-4 text-black">Client Onboarding Form</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block text-black">
          <span>Name</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-gray-400 rounded p-2" />
        </label>

        <label className="block text-black">
          <span>Company Name</span>
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="mt-1 block w-full border border-gray-400 rounded p-2" />
        </label>

        <label className="block text-black">
          <span>Contact Email</span>
          <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required className="mt-1 block w-full border border-gray-400 rounded p-2" />
        </label>

        <label className="block text-black">
          <span>Contact Phone</span>
          <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required className="mt-1 block w-full border border-gray-400 rounded p-2" />
        </label>
      </div>

      <label className="block text-black">
        <span>Company Address</span>
        <textarea name="companyAddress" value={formData.companyAddress} onChange={handleChange} required className="mt-1 block w-full border border-gray-400 rounded p-2" />
      </label>

      <label className="block text-black">
        <span>About the Company</span>
        <textarea name="aboutCompany" value={formData.aboutCompany} onChange={handleChange} required className="mt-1 block w-full border border-gray-400 rounded p-2" />
      </label>

      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-black">Branding Information (if any)</legend>
        <label className="block text-black">
          <span>Brand Colors (Hex Codes)</span>
          <input type="text" name="brandColors" value={formData.brandColors} onChange={handleChange} className="mt-1 block w-full border border-gray-400 rounded p-2" />
        </label>

        <label className="block text-black">
          <span>Upload Logo</span>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full" />
          {logoPreview && <img src={logoPreview} alt="Logo Preview" className="mt-4 max-w-xs" />}
        </label>
      </fieldset>

      <button type="submit" className="w-full py-2 px-4 bg-gray-800 text-white font-medium rounded hover:bg-gray-700">Submit</button>
    </form>
  );
};

export default OnboardingForm;


