import { useState } from "react"
import { TextField } from "@mui/material"
import { Button } from "@mui/material"
const TemperatureConv = () => {
    const [temp, setTemp] = useState(0)
    const newT = (e) => {
        setTemp(e.target.value)
    }
    const toNewTemp = () => {
        setTemp(temp * 1.8 + 32)
    }
    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" style={{ marginTop: 50 }} variant="outlined" value={temp} onChange={newT} />
            <Button variant="outlined" onClick={toNewTemp}>Outlined</Button>
            <p>{temp}</p>
        </div>
    )
}
export default TemperatureConv