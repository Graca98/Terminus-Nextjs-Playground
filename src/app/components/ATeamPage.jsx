'use client'

import { useState, useEffect } from "react"
import Card from './CardFolder/Card'
import aTeam from "../../data/aTeam.js"

const ATeamPage = () => {
  const baseUrl = "https://crafatar.com/renders/body/"
  const customParams = "?overlay&default=MHF_Steve"

  const [skins, setSkins] = useState([])

  useEffect(() => {
    const fetchSkins = async () => {
      const skinPromises = aTeam.map(async (jedenClen) => {
        try {
          const res = await fetch(baseUrl + jedenClen.uuid + customParams)
          if (!res.ok) {
            throw new Error("Nepodařilo se fetchnout data")
          }
          return res.url
        } catch (error) {
          console.error(error)
          return null
        }
      })

      const skinUrls = await Promise.all(skinPromises)
      setSkins(skinUrls)
    }

    fetchSkins()
  }, [])

  const aTeamList = aTeam.map((jedenClen, index) => (
    <div key={jedenClen.id}>
      <Card
        name={jedenClen.name}
        role={jedenClen.role}
        description={jedenClen.descr}
        imgSrc={skins[index]}
      ></Card>
    </div>
  ))

  return <>{aTeamList}</>;
}

export default ATeamPage

