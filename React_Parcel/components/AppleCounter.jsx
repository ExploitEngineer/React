import Button from './Button';
import leftArrow from '../assets/images/arrow.png';
import rightArrow from '../assets/images/rarrow.png';
import AppleBasket from './AppleBasket';

import { createRoot } from 'react-dom/client';
const root = createRoot(document.querySelector("#root"));


const totalAppleCount = 100;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {

    const leftClickHandler = () => {
        rightAppleCount--;
        leftAppleCount++;
    };

    const rightClickHandler = () => {
        rightAppleCount++;
        leftAppleCount--;
    };

    return (
        <>
            <section>
                <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
                <Button clickHandler={leftClickHandler} imageUrl={leftArrow} buttonName="Left Arrow" />
                <Button clickHandler={rightClickHandler} imageUrl={rightArrow} buttonName="Right Arrow" />
                <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />

            </section>
            <p style={{ textAlign: "center", marginTop: "32px", }}>
                <button onClick={() => { root.render(<AppleCounter />); }}>Re - Render</button>
            </p>
        </>
    )
}

export default AppleCounter
