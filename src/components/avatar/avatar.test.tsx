import { render, screen } from "@testing-library/react";
import { Avatar } from "./index";

describe("Avatar Test Case", () => {
  const avatarProps = {
    src: "/path",
    alt: "avatar",
  };

  it("should be full rounded", async () => {
    render(<Avatar {...avatarProps} />);

    const imageElement = await screen.findByAltText(avatarProps.alt);

    expect(imageElement).toHaveClass("rounded-full");
  });

  it("renders avatar unchanged", () => {
    const { container } = render(<Avatar {...avatarProps} />);
    expect(container).toMatchSnapshot();
  });
});
