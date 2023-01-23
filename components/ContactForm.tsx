import { FC } from "react";

const ContactForm: FC<any> = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-4 [&>input]:w-full [&>input]:p-4 [&>input]:rounded-md && text-lg [&>input:hover]:shadow">
        <input
          type="text"
          placeholder="First Name"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black"
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-4 [&>input]:w-full [&>input]:p-4 [&>input]:rounded-md && text-lg [&>input:hover]:shadow">
        <input
          type="text"
          placeholder="Email"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black"
        />
        <input
          type="text"
          placeholder="Company"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black"
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-4 [&>input]:w-full [&>input]:p-4 [&>input]:rounded-md && text-lg [&>input:hover]:shadow">
        <input
          type="text"
          placeholder="Phone Number"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black"
        />
        <select
          placeholder="Email"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black w-full p-4 rounded-md hover:shadow"
        >
          <option value="">Budget</option>
          <option value="Less than 50K">Less than 50K</option>
          <option value="50-100K">$50,000 - $100,000</option>
          <option value="100-150K">$100,000 - $150,000</option>
          <option value="150-250K">$150,000 - $250,000</option>
          <option value="250-350K">$250,000 - $350,000</option>
        </select>
      </div>
      <div className="w-full flex justify-between gap-4 mt-4 h-32 [&>textarea]:w-full [&>textarea]:p-4 [&>textarea]:rounded-md && text-lg [&>textarea:hover]:shadow">
        <textarea
          placeholder="Tell us about your project. What problem can we help you solve?"
          required
          className="outline outline-1 outline-[#00000010] focus:outline-black"
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="px-8 py-4 my-4 bg-black text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
