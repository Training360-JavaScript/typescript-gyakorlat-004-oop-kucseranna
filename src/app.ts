// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [{
    id: 1,
    name: "Spike Witwicky",    
    sex: "male",
    age: 17,
    health: 100,
    photo: "https://tfwiki.net/wiki/File:Spikewitwickyg1.jpg",
},
{
    id: 2,
    name: "Victor Drath",
    sex: "male",
    age: 45,
    health: 80,
    photo: "https://tfwiki.net/wiki/File:Victordrath.jpg",
},
{
    id: 3,
    name: "Miko Nakadai",
    sex: "female",
    age: 12,
    health: 90,
    photo: "https://transformers.fandom.com/wiki/Miko_Nakadai?file=Prime-miko-s01face.jpg",
}
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [{
    id: 1,
    name: "Elita-1",
    wings: 2,
    wheels: 4,
    clan: "autobot",
    photo: "https://i.pinimg.com/originals/9f/d6/25/9fd625b09f741ea59364b6b5608ba43c.jpg"
},
{
    id: 2,
    name: "Ultra Magnus",    
    wings: 0,
    wheels: 16,
    clan: "autobot",
    photo: "https://en.wikipedia.org/wiki/Ultra_Magnus#/media/File:Ultramagnus2.jpg"
},
{
    id: 3,
    name: "Shockwave",
    wings: 2,
    wheels: 4,
    clan: "decepticon",
    photo: "https://tfwiki.net/mediawiki/images2/a/a2/AlternatorsShockblast_toy.jpg"
}
];
