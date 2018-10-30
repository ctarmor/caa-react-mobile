import { ChevronLeft, ChevronRight, Gear, Home, Icon, Mute, Rss, Settings, SignOut, TriangleRight } from '@githubprimer/octicons-react'


export interface INavigationDefinition {
    href: string;
    icon: Icon;
    color: string;
}

export const HomeDef: INavigationDefinition = { href: "/", icon: Home, color: "primary" };
export const FeedDef: INavigationDefinition = { href: "/feeds/:userid", icon: Rss, color: "primary" };
export const PreviousDef: INavigationDefinition = { href: "/", icon: ChevronLeft, color: "primary" };
export const NextDef: INavigationDefinition = { href: "/", icon: ChevronRight, color: "primary" };
export const SettingsDef: INavigationDefinition = { href: "/", icon: Gear, color: "primary" };
export const PlayerDef: INavigationDefinition = { href: "/", icon: TriangleRight, color: "primary" };
export const MueteOnDef: INavigationDefinition = { href: "/", icon: Mute, color: "primary" };
export const ExitDef: INavigationDefinition = { href: "/", icon: SignOut, color: "primary" };
export const OptionsDef: INavigationDefinition = { href: "/", icon: Settings, color: "primary" };


export interface INavigationButtons<T> {
    navbuttons: INavigationDefinition[],
}


const navigationButtons: INavigationButtons<INavigationDefinition> = {
    navbuttons: [
        HomeDef,
        FeedDef,
        PreviousDef,
        NextDef,
        SettingsDef,
        PlayerDef,
        MueteOnDef,
        ExitDef,
        OptionsDef,
    ]
}

export const NavigationButtons = navigationButtons;


