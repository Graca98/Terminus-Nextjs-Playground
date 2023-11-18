import Image from "next/image";
import rulesIcon from "@/app/img/rulesIco.png"

const Pravidla = () => {
  return (
    <div className="container-fluid">
      <section>
        <h2 className="mb-8 text-3xl font-bold">Pravidla Serverů</h2>
        <article className="mb-12">
          <h4 className="text-xl font-medium mb-1">
            Pravidla SkyBlock serveru:
          </h4>
          <ol className="list-decimal ps-8 mb-4">
            <li>
              Chovat se slušně, nenadávat, neponižovat, nevyvyšovat se nad
              ostatní a nespamovat. Do chatu psát pouze česky, slovensky, nebo
              anglicky.
            </li>
            <li>
              Zákaz projevu nacismu, rasismu, nebo jakékoliv politické,
              náboženské, či jiné nesnášenlivosti
            </li>
            <li>
              Respektovat Admin-Team! Neodmlouvat, nenadávat, nebýt drzý. Při
              nevhodném jednání člena AT neprodleně kontaktovat správce! (pozn.:
              Admini ve svém volném čase pomáhají udržovat server tak, abyste na
              něm mohli zdarma hrát, berte na ně ohledy)
            </li>
            <li>
              Zákaz cheatování (např.: upravený klient, autoclicker, killaura,
              textury, scripty, či cokoliv, co vás zvýhodní před ostatními
              hráči), zákaz zneužívání bugů a exploitů. (Bugy a exploity serveru
              neprodleně nahlásit správci!)
            </li>
            <li>Zákaz jakéhokoliv pokusu o zabití hráče.</li>
            <li>
              Zákaz griefování, kradení itemů, nebo podvádění ostatních hráčů a
              to jakýmkoliv způsobem!
            </li>
            <li>Zákaz používání více účtů jedním člověkem.</li>
            <li>
              Zákaz sdílení jakékoliv formy reklamy včetně adres jiných
              minecraft serverů, discord serverů apod.
            </li>
            <li>
              Rozepře mezi lidmi na jednom ostrově Admin-Team neřeší! Každý hráč
              nese zodpovědnost za toho, koho si na ostrov pozve!
            </li>
            <li>Nebýt kretén.</li>
          </ol>
          <p>
            To, že něco není zakázáno, nemusí znamenat, že je to povoleno,
            orientujte se dle vyšších morálních zásad a nedělejte druhým něco,
            co by Vám samotným vadilo. Vaše práva a svoboda končí tam, kde
            omezujete práva, či svobodu druhých!
          </p>
        </article>

        <article className="mb-12">
          <h4 className="text-xl font-medium mb-1">Pravidla Survival serveru:</h4>
          <ol className="list-decimal ps-8 mb-4">
            <li>
              Chovat se slušně, nenadávat, neponižovat, nevyvyšovat se nad
              ostatní a nespamovat. Do chatu psát pouze česky, slovensky, nebo
              anglicky.
            </li>
            <li>
              Zákaz projevu nacismu, rasismu, nebo jakékoliv politické,
              náboženské, či jiné nesnášenlivosti
            </li>
            <li>
              Respektovat Admin-Team! Neodmlouvat, nenadávat, nebýt drzý. Při
              nevhodném jednání člena AT neprodleně kontaktovat správce! (pozn.:
              Admini ve svém volném čase pomáhají udržovat server tak, abyste na
              něm mohli zdarma hrát, berte na ně ohledy)
            </li>
            <li>
              Zákaz cheatování (např.: upravený klient, autoclicker, killaura,
              textury, scripty, či cokoliv, co vás zvýhodní před ostatními
              hráči), zákaz zneužívání bugů a exploitů. (Bugy a exploity serveru
              neprodleně nahlásit správci!)
            </li>
            <li>
              Zákaz jakéhokoliv pokusu o zabití hráče. (Výjimka se vztahuje na
              Nether, kde je zabíjení povoleno)
            </li>
            <li>
              Zákaz griefování, kradení itemů, nebo podvádění ostatních hráčů a
              to jakýmkoliv způsobem!
            </li>
            <li>Zákaz používání více účtů jedním člověkem.</li>
            <li>
              Zákaz sdílení jakékoliv formy reklamy včetně adres jiných
              minecraft serverů, discord serverů apod.
            </li>
            <li>
              Rozepře mezi lidmi v jedné residenci Admin-Team neřeší! Každý hráč
              nese zodpovědnost za toho, koho si do residence pozve!
            </li>
            <li>Nebýt kretén.</li>
          </ol>
          <p>
            To, že něco není zakázáno, nemusí znamenat, že je to povoleno,
            orientujte se dle vyšších morálních zásad a nedělejte druhým něco,
            co by Vám samotným vadilo. Vaše práva a svoboda končí tam, kde
            omezujete práva, či svobodu druhých!
          </p>
        </article>

        <article className="mb-12">
          <h4 className="text-xl font-medium mb-1">Pravidla Discord serveru:</h4>
          <ol className="list-decimal ps-8 mb-4">
            <li>
              Chovat se slušně, nenadávat, neponižovat, nevyvyšovat se nad
              ostatní a nespamovat. Do chatu psát pouze česky, slovensky, nebo
              anglicky.
            </li>
            <li>
              Zákaz projevu nacismu, rasismu, nebo jakékoliv politické,
              náboženské, či jiné nesnášenlivosti.
            </li>
            <li>
              Respektovat Admin-Team! Neodmlouvat, nenadávat, nebýt drzý. Při
              nevhodném jednání člena AT neprodleně kontaktovat správce! (pozn.:
              Admini ve svém volném čase pomáhají udržovat server tak, abyste na
              něm mohli zdarma hrát, berte na ně ohledy)
            </li>
            <li>Zákaz používání více účtů jedním člověkem.</li>
            <li>
              Zákaz pokusu o podvádění ostatních hráčů a to jakýmkoliv způsobem!
            </li>
            <li>Zákaz vydávání se za někoho jiného!</li>
          </ol>
        </article>

        <article className="mb-12">
          <h3 className="text-xl font-medium mb-1">Plné znění</h3>
          <p className="mb-5">Plné znění pravidel v platnosti od 14.4.2020 ke stažení zde:</p>
          <ul className="ps-8">
            <a href="download/tcraft_pravidla.pdf" target="_blank">
              {/* Doplnit link!! */}
              <li className="inline-block bg-yellow-500 p-5 rounded-full img-hover hover:rotate-45">
                <Image src={rulesIcon} width={50} height={50} alt="Pravidla ke stažení"></Image>
              </li>
            </a>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Pravidla;
