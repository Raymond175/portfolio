import { purple, styled, Text } from "@nextui-org/react"
export const GradientText = styled(Text, {
    variants: {
        color: {
            orange: { textGradient: "$textGradientOrange" },
            purple: { textGradient: "$textGradientPurple" },
            green: { textGradient: "$textGradientGreen" }
        }
    },
    fontSize: "$8xl",
    fontWeight: "$bold",
    defaultVariants: {
        color: "purple",
    }
})
