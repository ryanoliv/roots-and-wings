import Image from "next/image";
import Link from "next/link";
import Separator from "../separator";

export default function ProgrammeIntro() {
  return (
    <div className="flex flex-col">
      <div className="container flex flex-col gap-xl items-center">
        <div className="flex flex-col text-center gap-xs">
          <h2>Our Roots to Wings Programme</h2>
          <p>
            Our programme carefully combines academic achievement with emotional
            empowerment, following a four-step approach:
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-xl xl:gap-doublexl">
          <div className="flex flex-col gap-sm items-center">
            <h3>Connect</h3>
            <Image
              src="/svgs/connect.svg"
              alt="connect"
              width={138}
              height={142}
            />
          </div>
          <div className="flex flex-col gap-sm items-center">
            <h3>Empower</h3>
            <Image
              src="/svgs/empower.svg"
              alt="empower"
              width={151}
              height={151}
            />
          </div>
          <div className="flex flex-col gap-sm items-center">
            <h3>Enhance</h3>
            <Image
              src="/svgs/enhance.svg"
              alt="enhance"
              width={145}
              height={148}
            />
          </div>
          <div className="flex flex-col gap-sm items-center">
            <h3>Cultivate</h3>
            <Image
              src="/svgs/cultivate.svg"
              alt="cultivate"
              width={155}
              height={151}
            />
          </div>
        </div>
        <Link href="/our-programme" className="btn btn-primary mt-md">
          Explore Our Programme
        </Link>
      </div>
      <Separator />
    </div>
  );
}
