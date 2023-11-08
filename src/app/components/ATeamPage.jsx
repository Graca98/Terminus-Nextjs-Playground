'use client'

import { useState } from "react"
import Card from './CardFolder/Card'
import aTeam from "../../data/aTeam.js"

const ATeamPage = () => {
  const [skin, setSkin] = useState(null)
  let src = "https://crafatar.com/renders/body/10db14fb-2492-48c2-85c0-c9f393d1987b?overlay=true"

  const baseUrl = "https://crafatar.com/renders/body/"
  const customParams = "?overlay&default=MHF_Steve"

  // console.log(aTeam);
  const fetchSkin = async (uuid) => {
    const res = await fetch(baseUrl + uuid + customParams)
    
    if (!res.ok) {
      throw Error("Nepodařilo se fetchnout data")
    }

    console.log(res.url);
    return setSkin(res.url)
  }

  
  fetchSkin("ed2dab89-4441-4acc-a7ac-b948dc6862c8")


  // console.log(getSkin("ed2dab89-4441-4acc-a7ac-b948dc6862c8"))
  // console.log(fetchSkin("ed2dab89-4441-4acc-a7ac-b948dc6862c8"));

  let aTeamList = aTeam.map( (jedenClen) => {
    // let skin = getSkin(jedenClen.uuid)
    return <div key={jedenClen.id}>
      <Card
        name={jedenClen.name}
        role={jedenClen.role}
        description={jedenClen.descr}
        imgSrc={skin}
        // insta={}
        // discord={}
      ></Card>
    </div> 
  })
  
  return ( <>
    {aTeamList}
      {/* <Card
        name="Gracous"
        role="Správce pluginů"
        description="Docela cool týpek.. fjdklsfjl lakfjldkafj alkdůfjl kfja lkasdjflksadf laskdfjlůksdf"
        imgSrc={src}
        insta="gracous1"
        discord="Gracous"
      ></Card>
      <Card
        name="Verunka"
        role="Přítelkyně"
        description="Moje krásna holka <3"
        imgSrc={src}
        insta="butterfly.meli"
        discord="buterrfly.meli"
      ></Card>
      <Card
        name={aTeam[0].name}
        description="Docela cool týpek.. fjdklsfjl lakfjldkafj alkdůfjl kfja lkasdjflksadf laskdfjlůksdf"
        imgSrc={src}
      ></Card>
      <Card
        name="Gracous"
        description="Docela cool týpek.. fjdklsfjl lakfjldkafj alkdůfjl kfja lkasdjflksadf laskdfjlůksdf"
        imgSrc={src}
      ></Card> */}
  </>
  );
}

export default ATeamPage
