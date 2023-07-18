import Slider from "@/components/Slider";
import Favorites from "@/components/Favorites";
import BannerTop from "@/components/BannerTop";
import Products from "@/components/Products";
import BannerTwo from "@/components/BannerTwo";

export default function Home() {
  return (
    <div>
      <Slider />
      <Favorites />
      <BannerTop />
      <Products />
      <BannerTwo />
    </div>
  );
}
