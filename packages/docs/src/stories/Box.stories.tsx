import { Box, BoxProps, Text } from "@smart-dev__ui/react"
import { StoryObj, Meta } from "@storybook/react"


export default {
    title: "Surfaces/Box",
    component: Box,
} as Meta<BoxProps>



export const Primary: StoryObj<BoxProps> = {
    args: {
        children: (
            <>
                <Text>Test component Box</Text>
            </>
        )
    }
}

