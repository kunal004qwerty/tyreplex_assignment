import CompneyCard from "@/components/cards/CompneyCard";
import AgentSection from "@/components/sections/AgentSection";
import ListAvilable from "@/components/sections/ListAvilable";
import NewsLetter from "@/components/sections/NewsLetter";
import SectionWrapper from "@/components/sections/SectionWrapper";
import TyreSection from "@/components/sections/TyreSection";
import CustomCrousel from "@/utils/CustomCrousel";
import { DealSectionData, PaymentModeData, ServiceProvidedData } from "@/utils/dummyData";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-4 mt-[60px]">

      <AgentSection />

      <SectionWrapper title={"Deals In"} >
        <CustomCrousel Extrastyles={"gap-[30px] pb-3"} list={DealSectionData} cards={CompneyCard} keyName="compneyLogo" />
      </SectionWrapper>


      <SectionWrapper title={"Services Provided by this Center"} >
        <ListAvilable list={ServiceProvidedData} />
      </SectionWrapper>

      <TyreSection />

      <SectionWrapper title={"Payment Mode"} >
        <ListAvilable list={PaymentModeData} />
      </SectionWrapper>

      <div className="font-roboto lg:w-[1000px] w-full mx-auto">
        <NewsLetter />
      </div>
    </div>
  );
}
