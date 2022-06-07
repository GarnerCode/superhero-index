import React from 'react'

const HeroCard = ({data}) => {
  return (
    <div className={`HeroCard ${data.biography.alignment === 'good' ? 'hero' : data.biography.alignment === 'bad' ? 'villain' : 'neutral'}`}>
        <h2>{data.name}</h2>
        <img className="hero-img" src={data.images.sm} alt={data.name} />

        <section>
            <h3>Stats</h3>
            <ul>
                <li>Intelligence: {data.powerstats.intelligence}</li>
                <li>Strength: {data.powerstats.strength}</li>
                <li>Speed: {data.powerstats.speed}</li>
                <li>Durability: {data.powerstats.durability}</li>
                <li>Power: {data.powerstats.power}</li>
                <li>Combat: {data.powerstats.combat}</li>
            </ul>
        </section>

        <section>
            <h3>Appearance</h3>
            <p>Gender: {data.appearance.gender}</p>
            <p>Race: {data.appearance.race}</p>
            <p>Height: {data.appearance.height[0] + ' / ' + data.appearance.height[1]}</p>
            <p>Weight: {data.appearance.weight[0] + ' / ' + data.appearance.weight[1]}</p>
            <p>Eye Color: {data.appearance.eyeColor}</p>
            <p>Hair Color: {data.appearance.hairColor}</p>
        </section>

        <section>
            <h3>Biography</h3>
            <p>Full Name: {data.biography.fullName}</p>
            <p>Alter Egos: {data.biography.alterEgos}</p>
            <p>Aliases: 
                {data.biography.aliases.map((alias, index) => {
                        return (
                            <span key={index}> {alias};</span>
                        );
                    })
                }
            </p>
            <p>Place of Birth: {data.biography.placeOfBirth}</p>
            <p>First Appearance: {data.biography.firstAppearance}</p>
            <p>Publisher: {data.biography.publisher}</p>
            <p>Alignment: {data.biography.alignment}</p>
        </section>

        <section>
            <h3>Work</h3>
            <p>Occupation: {data.work.occupation}</p>
            <p>Base: {data.work.base}</p>
        </section>

        <section>
            <h3>Connections</h3>
            <p>Group Affiliations: {data.connections.groupAffiliation}</p>
            <p>Relatives: {data.connections.relatives}</p>
        </section>

    </div>
  )
}

export default HeroCard