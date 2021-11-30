import './App.css';
import {useState} from "react";

const slots = [
    'Massasje når Levi sovner i kveld',
    'Jeg rydder opp og shiner kjøkken etter lunsj',
    'Du velger film ikveld, baby',
    'Jeg lager ekstra god middag',
]

const slotsWithDefault = Array(24).fill('Tom luke?!').map((def, i) => slots[i] || def)

const Slot = ({content, index}) => {
    const [open, setOpen] = useState(false)

    return <div onClick={setOpen} className={open ? 'slot open' : 'slot'}>
        <div className="front">
            <h1>{index + 1}</h1>
        </div>
        <div className="back">
            <p>{content}</p>
        </div>
    </div>
}

const App = () => <div className="calendar">
    {slotsWithDefault.map((content, index) => Slot({content, index}))}
</div>

export default App;
