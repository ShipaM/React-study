import React from "react";
import { render } from "@testing-library/react";
import { Avatar } from "./Avatar"; // Adjust import path as per your project structure

describe("Avatar component", () => {
  it("renders with required props", () => {
    const { getByAltText } = render(
      <Avatar src="avatar.jpg" className="custom-avatar" alt="User Avatar" />
    );

    const avatarImage = getByAltText("User Avatar");
    
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", "avatar.jpg");
    expect(avatarImage).toHaveClass("avatar");
    expect(avatarImage).toHaveClass("custom-avatar");
  });

  it("renders with size prop", () => {
    const { getByAltText } = render(
      <Avatar
        src="avatar.jpg"
        className="custom-avatar"
        alt="User Avatar"
        size={150}
      />
    );

    const avatarImage = getByAltText("User Avatar");
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", "avatar.jpg");
    expect(avatarImage).toHaveClass("avatar");
    expect(avatarImage).toHaveClass("custom-avatar");
    expect(avatarImage).toHaveStyle("width: 150px; height: 150px;");
  });

  it("renders with default size when size prop is not provided", () => {
    const { getByAltText } = render(
      <Avatar src="avatar.jpg" className="custom-avatar" alt="User Avatar" />
    );

    const avatarImage = getByAltText("User Avatar");
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", "avatar.jpg");
    expect(avatarImage).toHaveClass("avatar");
    expect(avatarImage).toHaveClass("custom-avatar");
    expect(avatarImage).toHaveStyle("width: 100px; height: 100px;");
  });
});
