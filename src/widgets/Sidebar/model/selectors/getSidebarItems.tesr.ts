import { getSidebarItems } from "./getSidebarItems"; // Adjust the path as needed
import { RoutePath } from "shared/config/routerConfig/routeConfig";
import { SidebarItemType } from "../types/sidebar";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
import { StateSchema } from "app/providers/StoreProvider";
import { User } from "entities/User";

describe("getSidebarItems selector", () => {
  it("should return the sidebar items list for unauthenticated users", () => {
    const state = { user: { authData: null } }; // No user data (unauthenticated)

    const result = getSidebarItems.resultFunc(state as unknown as User); // Call the selector's inner function directly

    const expectedSidebarItems: SidebarItemType[] = [
      { path: RoutePath.main, Icon: MainIcon, text: "MAIN" },
      { path: RoutePath.about, Icon: AboutIcon, text: "ABOUT" },
    ];

    expect(result).toEqual(expectedSidebarItems);
  });

  it("should return the sidebar items list for authenticated users with additional items", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: { id: "1", username: "admin", password: "123" },
      },
    }; // Mocked user data (authenticated)

    const result = getSidebarItems.resultFunc(state as User); // Call the selector with user data

    const expectedSidebarItems: SidebarItemType[] = [
      { path: RoutePath.main, Icon: MainIcon, text: "MAIN" },
      { path: RoutePath.about, Icon: AboutIcon, text: "ABOUT" },
      {
        path: RoutePath.profile + "123",
        Icon: ProfileIcon,
        text: "PROFILE",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: "ARTICLES",
        authOnly: true,
      },
    ];

    expect(result).toEqual(expectedSidebarItems);
  });
});
