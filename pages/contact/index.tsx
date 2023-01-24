import ContactForm from "../../components/ContactForm";

export default function Page({ post }: any) {
  return (
    <div>
      <div className="flex flex-col justify-center max-w-3xl pl-5 pr-20 mt-24 mb-16 mx-auto">
        <h3 className="font-bold text-4xl sm:text-5xl mb-3">
          We&apos;d love to work with you
        </h3>
        <p className="text-xl sm:text-2xl text-gray-600">
          We&apos;ve worked with clients of all sizes, from enterprise brands to
          funded startups. Let&apos;s talk about your project and how we can
          help provide value.
        </p>
      </div>
      <div className="mb-10">
        <ContactForm />
      </div>
    </div>
  );
}
