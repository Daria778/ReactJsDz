import { useCallback } from "react"
import { action } from "./actions"
import { useDispatch, useSelector } from "react-redux"

const Profile = () => {
    const { theme } = useSelector((state) => state.theme)
    const dispatch = useDispatch();
    const setTheme = () => {
        dispatch(action)
    }
    return (
        <div > <label><button style={{ background: theme }} onClick={setTheme}>{theme}</button> Dark Theme </label> </div>
    );
}
export default Profile