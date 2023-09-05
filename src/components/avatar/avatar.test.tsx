import { render, screen } from "@testing-library/react";
import { Avatar } from "./index";

describe("Avatar Test Case", () => {
  it("should be full rounded", async () => {
    const altText = "avatar";

    render(<Avatar src="/path" alt={altText} />);

    const imageElement = await screen.findByAltText(altText);

    expect(imageElement).toHaveClass("rounded-full");
  });
});
