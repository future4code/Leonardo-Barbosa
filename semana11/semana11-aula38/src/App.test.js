import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect"
import Post from "./Components/Post"

const post = () => {
  return (
    <Post />
  )
}



test("Ao clicar no botão Adicionar um novo post é adicionado a lista com o valor teste", () => {
  const { getByText, getByPlaceholderText } = render(<App />)

  const newTaskInput = getByPlaceholderText(/Novo post/i)
  
  fireEvent.change(newTaskInput, { target: { value: "teste" }})
  
  expect(newTaskInput.value).toEqual("teste")
  
  const addPost = getByText(/Adicionar/i)
  
  const newPost = getByText(post)
  
  fireEvent.click(addPost)
  
  expect(addPost).toContainElement(newPost)

  
})

test("Verifica se ao clicar no botão curtir seu texto muda para descurtir", () => {
  const { getByText, getByPlaceholderText } = render(<App />)

  
  const newTaskInput = getByPlaceholderText(/Novo post/i)
  
  fireEvent.change(newTaskInput, { target: { value: "teste" }})
  
  const likeButton = getByText("Curtir")
  
  fireEvent.click(likeButton)
  
  expect(likeButton).toHaveTextContext("Descurtir")
})