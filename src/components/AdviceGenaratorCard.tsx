import dice from "../assets/images/icon-dice.svg";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";

type Props = {
  id: number | undefined;
  advice: string | undefined;
  loading: boolean;
  loadAdvice: () => void;
};

const AdviceGenaratorCard = ({ id, advice, loading, loadAdvice }: Props) => {
  return (
    <article className="max-w-[25rem] text-center bg-clr-dark-grayish-blue rounded-2xl px-4 pt-10 pb-16 flex flex-col items-center gap-6 relative md:max-w-[34rem] md:px-11">
      <h3 className="text-clr-neon-green/80 text-xs uppercase tracking-[.3em]">
        Advice #{loading ? "..." : id}
      </h3>
      <p className="text-clr-light-cyan text-[1.75rem]">
        <q>{advice}</q>
      </p>
      <picture>
        <source srcSet={dividerDesktop} media="(min-width:768px)" />
        <img src={dividerMobile} alt="Divider" />
      </picture>
      <button
        onClick={() => loadAdvice()}
        className="bg-clr-neon-green w-16 h-16 rounded-full flex justify-center items-center absolute bottom-[-2rem] transition hover:brightness-110 hover:shadow-btnHover"
      >
        <img src={dice} alt="Dice" />
      </button>
    </article>
  );
};
export default AdviceGenaratorCard;
