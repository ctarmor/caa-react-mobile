import { Home, Icon, Rss } from '@githubprimer/octicons-react'


export interface INavigationDefinition {
    href: string;
    icon: Icon;
    color: string;
}

export const HomeDef: INavigationDefinition = { href: "/", icon: Home, color: "primary" };
export const FeedDef: INavigationDefinition = { href: "/feeds/:userid", icon: Rss, color: "primary" };


export interface INavigationButtons<T> {
    navbuttons: INavigationDefinition[],
}


const navigationButtons: INavigationButtons<INavigationDefinition> = {
    navbuttons: [
        HomeDef,
        FeedDef
    ]
}

export const NavigationButtons = navigationButtons;


