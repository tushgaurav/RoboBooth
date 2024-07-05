import React from 'react'
import type { Trajectory } from '@/app/app/SelectTrajectory'
import clsx from 'clsx';

export const CardContext = React.createContext({
    index: 0,
    setIndex: (index: number) => { console.log(index) }
});

export default function Card({ currentSelectedIndex, index, setIndex, trajectoryData, children }: { currentSelectedIndex: number, index: number, setIndex: Function, trajectoryData: Trajectory, children: React.ReactNode }) {
    console.log(trajectoryData)
    console.log("SELECTED INDEX", index)
    console.log("CURRENT SELECTED:", trajectoryData.index === index)

    const classes = clsx("relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-96 ", {
        "bg-pink-300": trajectoryData.index == currentSelectedIndex,
        "bg-white": trajectoryData.index !== currentSelectedIndex
    })
    return (
        <CardContext.Provider value={{ index, setIndex }}>
            <div className={classes}>
                {
                    React.Children.map(children, child => {
                        return React.cloneElement(child as React.ReactElement, { selected: trajectoryData.index == currentSelectedIndex })
                    })
                }
            </div>
        </CardContext.Provider>
    )
}
