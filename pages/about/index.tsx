import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export default function Page({ post }: any) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl my-32 max-w-5xl px-5">
          We are a full service agency & mobile app development team with over
          100 successful mobile and web applications on our list
        </h1>

        {/* First one */}
        <section className="flex max-w-7xl px-5 my-20">
          <div className="py-20 pr-10 max-w-md">
            <h2 className="font-semibold text-3xl">
              Et vitae sequi in sint itaque
            </h2>
            <div className="w-16 h-[1px] my-7 bg-black" />
            <p className="text-xl mt-3">
              Non labore nulla aut dignissimos facilis ea facilis voluptatem qui
              voluptas sint dolorem. Sed totam molestiae in inventore nulla hic
              sequi voluptatem est explicabo eligendi.
            </p>
          </div>
          <div className="">
            <Image
              src={"/about1.jpeg"}
              alt={"Image of case study product"}
              width={1400}
              height={600}
              priority
              className={"rounded-md shadow-md"}
            />
          </div>
        </section>

        {/* Second one */}
        <section className="flex flex-row-reverse max-w-7xl px-5 my-20">
          <div className="py-20 pl-10 max-w-md">
            <h2 className="font-semibold text-3xl">
              Et vitae sequi in sint itaque
            </h2>
            <div className="w-16 h-[1px] my-7 bg-black" />
            <p className="text-xl mt-3">
              Non labore nulla aut dignissimos facilis ea facilis voluptatem qui
              voluptas sint dolorem. Sed totam molestiae in inventore nulla hic
              sequi voluptatem est explicabo eligendi.
            </p>
          </div>
          <div className="">
            <Image
              src={"/about2.jpeg"}
              alt={"Image of case study product"}
              width={1400}
              height={600}
              priority
              className={"rounded-md shadow-md"}
            />
          </div>
        </section>
      </div>
      {/* Section two */}
      <section className="bg-black text-white py-16 my-10">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-4xl">OUR MANIFESTO</h1>
            <div className="w-full h-[1px] my-4 bg-white" />
          </div>
          <div className="my-8">
            <h2 className="font-semibold text-3xl">Trust & Transparency</h2>
            <p className="text-xl text-gray-500 my-2">
              Ea doloribus possimus est temporibus quasi et maiores consectetur
              sed nemo molestiae qui quas nobis est voluptatum consequatur. Eum
              sunt consectetur aut blanditiis velit vel itaque.
            </p>
          </div>
          <div className="my-8">
            <h2 className="font-semibold text-3xl">Partnership</h2>
            <p className="text-xl text-gray-500 my-2">
              Non incidunt ducimus nam vero incidunt eum mollitia accusantium
              hic voluptatum neque. Aut voluptas quibusdam et incidunt culpa et
              facilis voluptate! Et dolor provident ut illum dolorum ut optio
              reiciendis sed beatae excepturi eos quia recusandae vel suscipit
              perferendis est ipsa unde! In laboriosam dolores ut debitis
              corporis aut veritatis quaerat in quia deleniti.
            </p>
          </div>
          <div className="my-8">
            <h2 className="font-semibold text-3xl">Quality</h2>
            <p className="text-xl text-gray-500 my-2">
              In fugiat molestiae et quibusdam sapiente cum officiis voluptatum
              sed quia possimus sit ducimus numquam est corrupti cumque? A ullam
              aliquam et reprehenderit repellendus sed exercitationem ipsa ut
              labore fuga. Qui placeat laudantium et quidem rerum quo voluptatem
              maxime est atque minima! Aut repellat laudantium non provident
              laboriosam aut itaque labore et dolor fugit. Et laudantium
              corporis ea galisum harum ex dolorem blanditiis id tenetur nihil
              est expedita omnis.
            </p>
          </div>
          <div className="my-8">
            <h2 className="font-semibold text-3xl ">No Drama</h2>
            <p className="text-xl text-gray-500 my-2">
              A iste tempore qui tenetur ratione et expedita aliquam et labore
              illum in eaque voluptas rem delectus consequatur. Quo soluta
              facere qui sunt voluptatibus 33 necessitatibus quam! Ut molestiae
              praesentium est eveniet nihil eum atque reiciendis eos deleniti
              magni non doloremque aliquam ea sint tempore?
            </p>
          </div>
          <div className="my-8">
            <h2 className="font-semibold text-3xl">Positivity</h2>
            <p className="text-xl text-gray-500 my-2">
              Ad repellendus cupiditate ut illo explicabo qui maxime saepe. Non
              illum velit ea iste autem qui omnis voluptate qui sint voluptatem
              cum eius eveniet et repellat dignissimos. Qui reprehenderit
              mollitia eos soluta mollitia qui nostrum Quis sed eveniet
              perspiciatis id voluptates consectetur est odio voluptatem eum
              error doloribus. Aut explicabo impedit vel assumenda.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-lg text-center mt-40 mb-20">
          <h3 className="font-bold text-4xl mb-3">Let&apos;s Talk</h3>
          <p className="text-xl text-gray-600">
            We&apos;ve worked with clients of all sizes, from enterprise brands
            to funded startups. Let&apos;s talk about your project and how we
            can help provide value.
          </p>
        </div>
      </div>

      <ContactForm />
    </>
  );
}
