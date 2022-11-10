import { ComponentProps } from "@stitches/react";
import { ElementType } from "react";
import { styled } from "../styles";

export const Heading = styled("h2", {
    fontFamily: "$default",
    lineHeight: "$shorter",
    margin: 0,
    color: "$gray100",

    variants: {
        size: {
            sm: { fontSize: '$xl' },
            md: { fontSize: '$2xl' },
            lg: { fontSize: '$4xl' },
            '2xl': { fontSize: '$5xl' },
            '3xl': { fontSize: '$6xl' },
            '4xl': { fontSize: '$6xl' },
            '5xl': { fontSize: '$7xl' },
            '6xl': { fontSize: '$8xl' },
            '7xl': { fontSize: '$9xl' },
        },
    },

    defaultVariants: {
        size: "md",
    }
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType
}