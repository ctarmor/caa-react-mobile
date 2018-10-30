import * as React from 'react';


export interface IProps {
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export function IncreaseButtonControl({ onIncrement, onDecrement }: IProps) {

    return (
        <div>
            <button onClick={onIncrement}>Increase Size</button>
            <button onClick={onDecrement}>Decrease Size</button>
        </div>
    );
}

