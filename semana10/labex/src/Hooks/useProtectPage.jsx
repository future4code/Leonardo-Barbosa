import { useEffect } from "react"
import { useHistory } from "react-router-dom"

export const useProtectPage = (parametro) => {
  const history = useHistory()

  useEffect(() => {
    const token = window.localStorage.getItem("token")

    if (token) {
      parametro()
    } else {
      history.push("/login")
    }
  }, [history, parametro])
}