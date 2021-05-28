import './styles.scss';

const Calculator = () => {
    const blinker = () => {

    }

    return (
        <div className='container--calculator'>
            <div className='calculator--screen'>
                <div className='screen-operation'>
                    2 + 3
                </div>
                <div className='screen-typed'>2634<span class='blink'>_</span></div>
            </div>
            <div className='calculator--operation-row'>
                <div className='calculator--button'>Abs</div>
                <div className='calculator--button'>x^3</div>
                <div className='calculator--button'>x^-1</div>
                <div className='calculator--button'>x!</div>
            </div>
            <div className='calculator--main-row'>
                <div className='calculator--button'>sin</div>
                <div className='calculator--button'>cos</div>
                <div className='calculator--button'>tan</div>
                <div className='calculator--button'>/</div>
            </div>
            <div className='calculator--main-row'>
                <div className='calculator--button'>sqrt</div>
                <div className='calculator--button'>x^2</div>
                <div className='calculator--button'>x^()</div>
                <div className='calculator--button'>log</div>
                <div className='calculator--button'>ln</div>
            </div>
            <div className='calculator--main-row'>
                <div className='calculator--button'>1</div>
                <div className='calculator--button'>2</div>
                <div className='calculator--button'>3</div>
                <div className='calculator--button'>+</div>
                <div className='calculator--button'>-</div>
            </div>
            <div className='calculator--main-row'>
                <div className='calculator--button'>0</div>
                <div className='calculator--button'>.</div>
                <div className='calculator--button'>x10^x</div>
                <div className='calculator--button'>Ans</div>
                <div className='calculator--button'>=</div>
            </div>
        </div>
    )
}

export default Calculator;
