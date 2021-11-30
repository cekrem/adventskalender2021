import './App.css';
import {useState} from "react";

const slots = [
    'Massasje når Levi sovner i kveld?',
    'Jeg rydder opp og shiner kjøkken etter lunsj!',
    'Du velger film i kveld, baby <3',
    'Jeg lager ekstra god middag!',
]

const slotsWithDefault = Array(24).fill('Tom luke?!').map((def, i) => slots[i] || def)

const snowflakes = Array(20).fill(0).map(() => ({
    size: `${Math.random() * 8}rem`,
    delay: `${Math.random() * 12}s`,
    position: `${(Math.random() * 120) - 10}%`,
    opacity: Math.random() * 0.5,
}))

const now = new Date()
const today = now.getMonth() === 11 ? now.getDate() : 0

console.log(today)
const Slot = ({content, index}) => {
    const [open, setOpen] = useState(false)
    const slotDay = index + 1

    return <div onClick={setOpen} className={open ? 'slot open' : 'slot'}>
        <div className="front">
            <h1>{slotDay}</h1>
        </div>
        <div className="back">
            <p>{slotDay > today ? 'Ikke juks!' : content}</p>
        </div>
    </div>
}

const App = () =>
    <div>
        <div className="calendar">
            <header>
                <h1>
                    Birgittes adventskalender 2021
                </h1>
            </header>
            {slotsWithDefault.map((content, index) => <Slot content={content} index={index} key={index}/>)}
        < /div>
        <div className="snowflakes">
            {snowflakes.map(({size, delay, position, opacity}) => <div key={position} style={{
                fontSize: size,
                left: position,
                animationDelay: delay,
                opacity: opacity
            }} className="snowflake">
                ❄
            </div>)}
        </div>
    </div>

export default App;
