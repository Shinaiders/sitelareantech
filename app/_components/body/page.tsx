import BannerPage from "../banner/banner";
import DetalhesPage from "./detalhes";
import SimpleSlider from "./servicos";

export default function BodyPage() {
  return (
    <div>
      <BannerPage />
      {/* <SimpleSlider /> */}
      <DetalhesPage />
    </div>
  );
}
