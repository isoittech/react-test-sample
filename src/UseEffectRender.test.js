import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />);
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument(); // findXXXは４秒（デフォルト）まで待って、対象テキストの要素を探そうとする。４秒超えるとエラーとなる。
  });
});
