import * as React from 'react';


export interface IProps {
    iconSz?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export function IncreaseButtonControl({ iconSz, onIncrement, onDecrement }: IProps) {

    return (
        <div>
            <button onClick={onIncrement}>Increase Size</button>
            <button onClick={onDecrement}>Decrease Size</button>
            <label>Size:</label>
            <label>{iconSz}</label>
        </div>
    );
}

