import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("Social network", () => {
  const createPost = postText => {
    const input = screen.getByPlaceholderText("Novo post");

    fireEvent.change(input, { target: { value: postText } });

    expect(input).toHaveValue(postText);

    const button = screen.getByText("Adicionar");

    fireEvent.click(button);
  };

  const createPostAndRender = () => {
    const utils = render(<App />);

    createPost("teste post");

    return utils;
  };

  test("create post", () => {
    const { getByTestId } = createPostAndRender();

    expect(getByTestId("post-content")).toHaveTextContent("teste post");
  });

  test("likes post", () => {
    const { getByText } = createPostAndRender();

    const likeButton = getByText("Curtir");

    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent("Descurtir");

    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent("Curtir");
  });

  test("delete post", () => {
    const { getByText, queryByTestId } = createPostAndRender();

    const deleteButton = getByText("Apagar");

    fireEvent.click(deleteButton);

    expect(queryByTestId("post-content")).toBeNull();
  });

  test("when user creates post, input should clean", () => {
    const { getByPlaceholderText } = createPostAndRender();

    const input = getByPlaceholderText("Novo post");

    expect(input).toHaveValue("");
  });

  test("'Nenhum post' message appears when posts are empty", () => {
    const { getByText, queryByText } = render(<App />);

    getByText("Nenhum post");

    createPost("aaaaa");

    expect(queryByText("Nenhum post")).toBeNull();
  });

  test("Amount of posts show correct number", () => {
    const { getByText, queryByText, getAllByTestId } = render(<App />);

    expect(queryByText(/Quantidade de posts/)).toBeNull();

    createPost("aaaa");
    createPost("bbbb");

    const amount = getByText(/Quantidade de posts/);

    expect(getAllByTestId("post-content").length).toEqual(2);

    expect(amount).toHaveTextContent("Quantidade de posts: 2");
  });

  test("Error message should appear when create empty post", () => {
    const { queryByTestId, getByText, queryByText } = render(<App />);
    expect(queryByText("Digite algo para criar o post!")).toBeNull();

    createPost("");

    expect(queryByTestId("post-content")).toBeNull();
    getByText("Digite algo para criar o post!");

    createPost("bananinha");
    expect(queryByText("Digite algo para criar o post!")).toBeNull();
  });
});
