import { useEffect, useState } from "react";
import AdviceGenaratorCard from "./components/AdviceGenaratorCard";

type AdviceType = {
  id: number;
  advice: string;
};

function App() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      const { slip } = await response.json();
      return setAdvice(slip);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="text-clr-dark-blue min-h-screen grid place-items-center px-8">
      {/* {isLoading && <p className="text-clr-light-cyan">Loading...</p>} */}

      <AdviceGenaratorCard
        id={advice?.id}
        advice={advice?.advice}
        loadAdvice={fetchAdvice}
        loading={isLoading}
      />
    </main>
  );
}

export default App;
