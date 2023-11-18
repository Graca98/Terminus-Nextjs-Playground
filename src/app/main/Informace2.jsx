import LinkHover from "./LinkHover";
import DarkOutlineButton from "../DarkOutlineButton";

const Informace = () => {

  //todo Dodělat copyIp
  // function copyIp() {
  //   navigator.clipboard.writeText("text")
  // }

  return (
    <main>
      <div className="container-fluid">
        <section>
          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-6">Informace</h2>
            <p className="mb-5">
              Skyblock & Slimefun. Potřebuješ vědět více? Jsme TerminusCraft
              Minecraft server s historií a letitými zkušenostmi. Naším cílem je
              vytvoření prostoru pro milovníky minecraftu, kde si dotyční budou
              hru moci pořádně užít. Naše servery běží na VDS (virtuálním
              dedikovaném serveru) poskytovaném skrze portál gamehosting.cz, kde
              máme k dispozici vysoce výkonný procesor typu AMD Ryzen 9 3900X s
              frekvencí až 4.6 GHz. Tyto servery jsou dále zabaleny do softwaru
              Pterodactyl, který umožňuje skvělý přehled a kontrolu nad veškerým
              děním. Toto vše se odehrává na operačním systému Alpine Linux, který
              je znám svou vysokou bezpečností a nízkou náročností.
            </p>
            <ul className="list-none">
              <li>
                Jak se připojit a hrát?
                <a href="servers/index.php">
                  <LinkHover text="Jednoduše"></LinkHover>
                </a>
              </li>

              <li>
                Chceš si prohlédnou náš admin team?
                <a href="ateam/index.php">
                  <LinkHover text="Zde"></LinkHover>
                </a>
              </li>

              <li>
                Máš zájem nás podpořit v tom, co děláme?
                <a href="https://store.tcraft.eu/" target="”_blank”">
                  <LinkHover text="Tady"></LinkHover>
                </a>
              </li>

              <li>
                Nebo se k nám připojit na discord a pokecat?
                <a href="https://discord.gg/FxsVHJP" target="”_blank”">
                  <LinkHover text="Bez problému"></LinkHover>
                </a>
              </li>

              <li>
                Líbí se ti náš server a chceš, aby se o něm dozvědělo více lidí?
                <a
                  href="https://czech-craft.eu/server/terminuscraft/"
                  target="_blank"
                >
                  <LinkHover text="Hlasuj"></LinkHover>
                </a>
              </li>
            </ul>
          </article>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-6">Servery</h2>
            <p className="mb-5">
              Momentálně poskytujeme dva herní servery a to SkyBlock a Survival.
              Tyto servery jsou propojené skrze proxy síť Waterfall, která je
              forkem známější verze nesoucí název BungeeCord. Snažíme se být stále
              na nejnovější verzi, což se nám daří, bohužel budeme v budoucnu opět
              závislí na kvalitní práci vývojářů jednotlivých pluginů. Server
              držíme v dostatečně optimalizovaném nastavení, aby nebyl nijak
              omezen výkon, ale ani hráčův pocit z hraní.
            </p>
            <h4>Na všechny naše servery se připojíte z jedné IP:</h4>
            <p className="pb-2 me-1">
              Minecraft:
              <DarkOutlineButton text="play.tcraft.eu" handleClick="" style="py-1.5 px-3 ms-1"></DarkOutlineButton>
            </p>
            <p>
              Discord:
              <a href="http://discord.gg/FxsVHJP" target="”_blank”">
                <LinkHover text="Terminus Craft"></LinkHover>
              </a>
            </p>
          </article>

          <article className="mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-6">Server listy</h2>
            <p className="mb-5">
              Seznam server listů, které měly potřebu být na našich stránkách.
            </p>
            <div className="flex gap-3 flex-col md:flex-row ">
              <a href="https://www.minelist.eu" target="_blank">
                <img
                  src="https://www.minelist.eu/images/bannery/Ikonka2.png"
                  alt="Minelist.eu"
                  className="h-8 img-hover"
                />
              </a>
              <a href="https://www.serverbook.cz" target="_blank">
                <img
                  src="https://www.serverbook.cz/images/banner_88_31.png"
                  alt="ServerBook.cz"
                  className="h-8 img-hover"
                />
              </a>
              <a href="https://craftlist.org">
                <img
                  src="https://minecraft-servery.cz/img/icons/icon_default.png"
                  alt="Minecraft Serverlist"
                  className="h-8 img-hover"
                />
              </a>
              <a href="http://minecraft-server-list.cz" target="_blank">
                <img
                  src="http://minecraft-server-list.cz/images/4_ico.jpg"
                  alt="minecraft-server-list.cz"
                  className="h-8 img-hover"
                />
              </a>
              <a href="https://minebook.eu/view/">
                <img
                  src="https://minebook.eu/assets/images/minebook-full.png"
                  alt="Minebook"
                  className="h-8 img-hover"
                />
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Informace;
