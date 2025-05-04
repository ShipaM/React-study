import { getSidebarItems } from "./getSidebarItems"; // Adjust the import path if needed
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { getUserAuthData } from "entities/User"; // Adjust path if needed
import { StateSchema } from "app/providers/StoreProvider";

// Mocking getUserAuthData selector to simulate different states
jest.mock("entities/User", () => ({
  getUserAuthData: jest.fn(),
}));

describe("getSidebarItems", () => {
  it("should return only public items when userData is not available", () => {
    // Mock the state with no user data (i.e., user not logged in)
    (getUserAuthData as jest.Mock).mockReturnValue(null);

    const result = getSidebarItems({} as StateSchema); // Pass an empty state (or mock state if needed)

    // Test that only the public items are returned
    expect(result).toEqual([
      {
        path: RoutePath.main,
        Icon: expect.any(Function),
        text: "MAIN",
      },
      {
        path: RoutePath.about,
        Icon: expect.any(Function),
        text: "ABOUT",
      },
    ]);
  });

  it("should return public and authenticated items when userData is available", () => {
    // Mock the state with user data (i.e., user logged in)
    const mockUserData = { id: "123" };
    (getUserAuthData as jest.Mock).mockReturnValue(mockUserData);

    const result = getSidebarItems({} as StateSchema); // Pass an empty state (or mock state if needed)

    // Test that all items, including auth-only items, are returned
    expect(result).toEqual([
      {
        path: RoutePath.main,
        Icon: expect.any(Function),
        text: "MAIN",
      },
      {
        path: RoutePath.about,
        Icon: expect.any(Function),
        text: "ABOUT",
      },
      {
        path: `${RoutePath.profile}123`,
        Icon: expect.any(Function),
        text: "PROFILE",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: expect.any(Function),
        text: "ARTICLES",
        authOnly: true,
      },
    ]);
  });
});
