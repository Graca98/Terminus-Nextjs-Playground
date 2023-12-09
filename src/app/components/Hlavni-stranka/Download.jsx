import Image from "next/image";
import LinkHover from "../LinkHover";
import rulesIcon from "@/app/img/rulesIco.png"
import sfIcon from "@/app/img/sFIco.png"

const Download = () => {
  return <div className="container-fluid">
    <section>
      <h2 className="mb-8 text-3xl font-bold">Ke stažení</h2>
      <article className="mb-8">
        <h3 className="text-xl font-medium mb-1">SlimeFun Texture Pack</h3>
        <p className="mb-4">
          SlimeFun Texture Pack je resource pack, který odlišuje itemy ze
          slimefunu a dává jim nový vzhled, tudíž si je již nebudete plést s
          ostatními ze základní hry!
        </p>
        <p className="text-lg">Navod k instalaci (aktuálně na verzi 1.18.1):</p>
        <ol className="list-decimal ps-8 mb-5">
          <li>
            Nejprve nainstalujte <a href="https://optifine.net/downloads" className="link link-primary underline underline-offset-4" target="_blank">
              Optifine
            </a> na Vaši verzi Minecraftu.
          </li>
          <li>
            Stahněte soubor s příponou .zip a nakopírujte jej do adresáře se
            hrou do složky resourcepacks. (Defaultní cesta:
            <span className="break-words">C:\Users\"username"\AppData\Roaming\.minecraft\resourcepacks)</span>
          </li>
          <li>Nakonec v nastavení minecraftu resourcepack aktivujete.</li>
        </ol>
        <ul className="ps-8">
          <a href="download/Slimefun_Texture_v3.1.1.zip" target="_blank">
            {/* Doplnit link!! */}
            <li className="inline-block bg-yellow-500 p-5 rounded-full img-hover hover:rotate-45">
              <Image src={sfIcon} alt="Texturepack ke stažení"></Image>
            </li>
          </a>
        </ul>
      </article>

      <article className="mb-12">
        <h3 className="text-xl font-medium mb-1">Plné znění</h3>
        <p className="mb-5">Plné znění pravidel v platnosti od 14.4. 2020 ke stažení zde:</p>
        <ul className="ps-8">
          <a href="download/tcraft_pravidla.pdf" target="_blank">
            {/* Doplnit link!! */}
            <li className="inline-block bg-yellow-500 p-5 rounded-full img-hover hover:rotate-45">
              <Image src={rulesIcon} alt="Pravidla ke stažení"></Image>
            </li>
          </a>
        </ul>
      </article>
    </section>
  </div>
}

export default Download