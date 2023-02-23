const year = 1888;
const month = 'November';
const musicInstrument = ['violin', 'piano', 'guitar', 'flute'];
const characters = {
    mainHero: 'Holmes',
    secondHero: 'Watson',
    appartmentOwner: 'Hudson',
    secondHeroWife: 'Mary Morstan'
};

document.body.innerHTML = `
    <p>My dear friend Sherlock ${characters.mainHero} once said, ‘Art in the blood is liable to take the strangest forms.’ And so it was for him. In my numerous accounts of the adventures we shared, I have mentioned his ${musicInstrument[0]} playing, his acting – but his artistry went much deeper than that. I believe it was at the very root of his remarkable success as the world’s first consulting detective.</p>

    <p>I have been loath to write in detail about ${characters.mainHero}’s artistic nature, lest it reveal a vulnerability in him that could place him in danger. It is well known that in exchange for visionary powers, artists often suffer with extreme sensitivity and violent changeability of temperament. A philosophical crisis, or simply the boredom of inactivity, could send ${characters.mainHero} spinning into a paralysed gloom from which I could not retrieve him.</p>

    <p>It was in such a state that I discovered my friend in late ${month} of ${year}.</p>

    <p>London was blanketed with snow, the city still reeling from the extended horror of the Ripper murders. But at that moment, violent crime was not my concern. Married earlier that year to ${characters.secondHeroWife}, I was ensconced in a nest of comfortable domesticity, living at some distance from the rooms I had formerly shared with ${characters.mainHero} in Baker Street.</p>

    <p>One late afternoon found me reading contentedly by the fire when a note arrived by breathless messenger. Opening it, I read: ‘Dr. ${characters.secondHero} — he has set 221B on fire! Come at once! – Mrs. ${characters.appartmentOwner}.’</p>

    <p>In seconds I was hurtling through the streets in a cab towards Baker Street. As we tore around a corner, I could feel the wheels slipping in the mounding snow, and the cab lurched dangerously. I rapped on the roof. ‘Faster, man!’ I shouted.</p>
    `;