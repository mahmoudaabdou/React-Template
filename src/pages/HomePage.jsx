import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="text-3xl font-bold underline">Home Page</div>
      <p>{t("Welcome to React")}</p>
      <button
        onClick={() => {
          i18n.changeLanguage("ar");
        }}
      >
        AR
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        En
      </button>
      <Button>Click me</Button>
    </div>
  );
}

export default HomePage;
