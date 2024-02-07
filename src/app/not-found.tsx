import UnderConstructionAlert from "@/components/UnderConstructionAlert";
import PageContainer from "@/components/ui/page-container";

export default function Notfound() {
  return (
    <PageContainer>
      <div className="flex justify-center items-center h-full w-full">
        <UnderConstructionAlert />
      </div>
    </PageContainer>
  );
}
