import React from 'react'
import { Stage, Layer, Line } from 'react-konva'
import { useEffect, useState, useRef } from 'react'
import "./style.css"

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



export default function DrawingArea({ onClearLines, clearLines }) {

    const [tool, setTool] = useState('pen')
    const [lines, setLines] = useState([])
    const isDrwaing = useRef(false)
    const stageRef = useRef(null);


    const handleExport = () => {
        const uri = stageRef.current.toDataURL();
        console.log(uri);
        downloadURI(uri, 'whiteborad.png');
    };

    useEffect(() => {

    }, [clearLines])

    const handleMouseDown = (e) => {

        isDrwaing.current = true;
        const pos = e.target.getStage().getPointerPosition()
        setLines([...lines, { tool, points: [pos.x, pos.y] }])
    }

    const handleMouseMove = (e) => {
        if (!isDrwaing.current) {
            return
        }

        const stage = e.target.getStage()
        const point = stage.getPointerPosition()

        let lastLine = lines[lines.length - 1]

        if (lastLine) {
            lastLine.points = lastLine.points.concat([point.x, point.y])

            lines.splice(lines.length - 1, 1, lastLine)
            setLines(lines.concat())
        }
    }

    const handleMouseUp = () => {
        isDrwaing.current = false
    }


    return (
        <div className="drawing-area">
            <div className="text-center text-dark">
                <div id="buttons" >
                    <Button style={{ background: '#388087' }} variant="contained" onClick={handleExport}>Click to capture</Button>
                </div>
                <div>
                    <div className="flex-stage-1">

                    </div>
                    <div className="flex-stage-1">
                        <Stage
                            width={790}
                            height={600}
                            ref={stageRef}
                            onMouseDown={handleMouseDown}
                            onMousemove={handleMouseMove}
                            onMouseup={handleMouseUp}
                            className="canvas-stage"
                        >

                            <Layer>
                              
                                {lines.map((line, i) => (
                                    <Line
                                        key={i}
                                        points={line.points}
                                        stroke="#df4b26"
                                        strokeWidth={5}
                                        tension={0.5}
                                        lineCap="round"
                                        lineJoin="round"
                                        globalCompositeOperation={
                                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                                        }
                                    />
                                ))}
                            </Layer>
                        </Stage>
                    </div>
                </div>
                <Select
                    value={tool}
                    onChange={(e) => {
                        setTool(e.target.value);
                    }}
                    
                >
                    <MenuItem value="pen">Pen</MenuItem>
                    <MenuItem value="eraser">Eraser</MenuItem>
                </Select>
            </div>
        </div>
    )
}
